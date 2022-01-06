import { Action } from "@ngrx/store";
import { addChatConstant, chatModel, logInConstant, logOutConstant } from "../type-definitions/authentication";

export class logIn implements Action{
    type=logInConstant;

    constructor(){}
}

export class logOut implements Action{
    type=logOutConstant;

    constructor(){}
}

export class addChat implements Action{
    type=addChatConstant;

    constructor(public payload?:{id:string,chat:chatModel[]}){}
}