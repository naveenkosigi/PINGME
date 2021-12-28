import { ActionReducerMap } from "@ngrx/store";
import { authenticationReducer, authState } from "./action-reducers";

export interface appState{
    authenticate:authState
}

export const actionReducerMap:ActionReducerMap<appState>={
    authenticate:authenticationReducer
}