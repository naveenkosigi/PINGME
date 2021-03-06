import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import {take} from "rxjs/operators"
import { authState } from "../store/action-reducers";
import { appState } from "../store/store-definitions";

@Injectable()
export class authenticationGuard implements CanActivate{
    
    authObservable:Observable<authState>;
    constructor(private store:Store<appState>,private router:Router){
        this.authObservable=store.select('authenticate');
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        const authState:authState=await this.authObservable.pipe(take(1)).toPromise();
        console.log("auth",authState);
        if(!authState.status){
            this.router.navigateByUrl("");
        }
        return authState.status;
    }
}