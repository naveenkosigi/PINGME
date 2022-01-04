import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { combineLatest, Subject } from "rxjs";
import { chatModel, userModel } from "../type-definitions/authentication";
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

            const docs : any[] =await combineLatest([collection1.valueChanges(),collection2.valueChanges()]).pipe(take(1)).toPromise();
            const toSend: {id:string,chat:chatModel[]}={id:otherUserDoc.ref.id,chat:[]};
            
            docs[0].forEach(((data: chatModel)  => {
               toSend.chat.push(data);
            }));

            docs[1].forEach(((data: chatModel) => {
                toSend.chat.push(data);
            }));
            console.log(toSend);
        }
        catch(e:any){
            handleErrorMessage(e.message);
        }
    }
}