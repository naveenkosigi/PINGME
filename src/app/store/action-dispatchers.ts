import { Action } from "@ngrx/store";
import { addChatConstant, addMessageConstant, addMessageStartedConstant, chatModel, logInConstant, logOutConstant } from "../type-definitions/authentication";

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

export class addMessageStarted implements Action{
    type=addMessageStartedConstant;

    constructor(public payload?:chatModel){}
}

export class addMessage implements Action{
    type=addMessageConstant;

    constructor(public payload?:chatModel){}

}