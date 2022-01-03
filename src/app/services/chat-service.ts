import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { userModel } from "../type-definitions/authentication";

@Injectable({providedIn:'root'})
export class chatService{
    private selectedUser:Subject<userModel>=new Subject();

    constructor(){

    }
}