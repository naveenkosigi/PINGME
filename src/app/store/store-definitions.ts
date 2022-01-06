import { ActionReducerMap } from "@ngrx/store";
import { authenticationReducer, authState, chatReducer, chatState } from "./action-reducers";

export interface appState{
    authenticate:authState,
    chat:chatState
}

export const actionReducerMap:ActionReducerMap<appState>={
    authenticate:authenticationReducer,
    chat:chatReducer
}