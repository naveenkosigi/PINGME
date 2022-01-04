import { DocumentReference } from "@angular/fire/compat/firestore";

export const logInConstant="LOGIN";
export const logOutConstant="LOGOUT";

export class userModel{
    
    constructor(public id:string,public name:string,public photo:string){

    }
}

export class chatModel{
    constructor(public content:string,public from:DocumentReference,public to:DocumentReference){}
}


