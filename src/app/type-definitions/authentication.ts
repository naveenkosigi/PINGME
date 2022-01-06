import { DocumentReference } from "@angular/fire/compat/firestore";

export const logInConstant="LOGIN";
export const logOutConstant="LOGOUT";
export const addChatConstant="ADDCHAT";

export class userModel{
    
    constructor(public id:string,public name:string,public photo:string){

    }
}

export class chatModel{
    constructor(public content:string,public from:string,public to:string){}
}

export type chatDoc={
    content:string,
    from:DocumentReference,
    to:DocumentReference
}




