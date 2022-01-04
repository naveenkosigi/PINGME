import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { combineLatest, Subject } from "rxjs";
import { userModel } from "../type-definitions/authentication";
import {User} from "firebase/auth"
import { take } from "rxjs/operators";
import { handleErrorMessage } from "../common-functions";

@Injectable({providedIn:'root'})
export class chatService{
    private selectedUser:Subject<userModel>=new Subject();

    constructor(private fireStore:AngularFirestore,private fireStoreAuth:AngularFireAuth){

    }

    async initChatStoreForUserId(uid:string) : Promise<void>{
        try{
            const currentUserDoc=this.fireStore.collection("users").doc((await this.fireStoreAuth.currentUser)?.uid);
        const otherUserDoc=this.fireStore.collection("users").doc(uid);

        const collection1=this.fireStore.collection("messages",ref => ref.where("from","==",currentUserDoc.ref).where("to","==",otherUserDoc.ref));
        const collection2=this.fireStore.collection("messages",ref => ref.where("from","==",otherUserDoc.ref).where("to","==",currentUserDoc.ref));

        const docs =await combineLatest([collection1.valueChanges(),collection2.valueChanges()]).pipe(take(1)).toPromise();
        console.log(docs);
        }
        catch(e:any){
            handleErrorMessage(e.message);
        }
    }
}