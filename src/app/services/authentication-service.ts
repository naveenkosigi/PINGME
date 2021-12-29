import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Store } from "@ngrx/store";
import { logIn, logOut } from "../store/action-dispatchers";
import { appState } from "../store/store-definitions";

@Injectable()
export class authenticationService{
    constructor(private fireStoreAuth:AngularFireAuth,private store:Store<appState>){
        fireStoreAuth.onAuthStateChanged((user) => {
            if(user){
                this.store.dispatch(new logIn());
            }
            else{
                this.store.dispatch(new logOut());
            }
        });
    }
}