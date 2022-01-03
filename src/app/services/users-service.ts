import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { take } from "rxjs/operators";
import { userModel } from "../type-definitions/authentication";

@Injectable({providedIn:'root'})
export class userService{
    
    usersCollectionObservable:Observable<any>;
    usersCollection:userModel[]=[];
  
    constructor(private fireStore:AngularFirestore){
        this.usersCollectionObservable=this.fireStore.collection("users").valueChanges({ idField: 'id' });
    }

    async getUsersCollection() : Promise<userModel[]>{
        const docs:[]=await this.usersCollectionObservable.pipe(take(1)).toPromise();
        this.usersCollection=[];
        docs.forEach((doc:userModel) => {
            this.usersCollection.push(new userModel(
              doc.id,
              doc.name,
              doc.photo
            ));
          });
        return [...this.usersCollection];
    }    
}