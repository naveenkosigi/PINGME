import { Action } from "@ngrx/store";
import { logInConstant, logOutConstant } from "../type-definitions/authentication";

export class logIn implements Action{
    type=logInConstant;

    constructor(){}
}

export class logOut implements Action{
    type=logOutConstant;

    constructor(){}
}