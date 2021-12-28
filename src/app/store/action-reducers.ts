import { logIn } from "./action-dispatchers";

export interface authState{
    status:boolean
}

const initialState:authState={
    status:false
};

export function authenticationReducer(state:authState=initialState,action:logIn) : authState{
    switch(action.type){
        case action.type : 
            return {
                ...state,
                status : true
            }

            default:
                return initialState;
    }
}