import { Injectable } from "@angular/core";
import { AngularFirestore, DocumentReference } from "@angular/fire/compat/firestore";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { empty, from, Observable, of } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { addMessage, addMessageStarted } from "../store/action-dispatchers";
import { addMessageConstant, addMessageStartedConstant, chatModel } from "../type-definitions/authentication";
import firebase from "firebase/compat";

@Injectable()
export class chatEffects{
    constructor(private action:Actions,private angularFireStore:AngularFirestore){

    }

    @Effect()
    addMessage=this.action.pipe(
      ofType(addMessageStartedConstant),
      switchMap((data : addMessageStarted) => {
          const payload=data.payload;
          console.log(payload);

          return from(this.angularFireStore.collection('messages').add({
                ...payload,
                from:this.angularFireStore.doc('users/' + payload?.from).ref,
                to:this.angularFireStore.doc('users/' + payload?.to).ref,
                timeSent:Math.round(new Date().getTime()/1000).toString()
            })).pipe(
                map(() => {
                        console.log("inside add message");
                        return new addMessage();
                })
            );
      })
    )
}