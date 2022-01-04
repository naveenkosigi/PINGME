import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Subject } from "rxjs";
import { userModel } from "../type-definitions/authentication";
import {User} from "firebase/auth"

@Injectable({providedIn:'root'})
export class chatService{
    private selectedUser:Subject<userModel>=new Subject();

    constructor(private fireStore:AngularFirestore,private fireStoreAuth:AngularFireAuth){
        
    }

    async initChatStore() : Promise<void>{
        const doc=this.fireStore.collection("users").doc((await this.fireStoreAuth.currentUser)?.uid);
        this.fireStore.collection("messages",ref => ref.where("from","==",doc.ref).where("to","==",doc.ref)).valueChanges().subscribe((data) => {
            console.log(data);
        });
    }
}