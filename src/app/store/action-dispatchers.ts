import { Action } from "@ngrx/store";
import { logInConstant } from "../type-definitions/authentication";

export class logIn implements Action{
    type=logInConstant

    constructor(){}
}