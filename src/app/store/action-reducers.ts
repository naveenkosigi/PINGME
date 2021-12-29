import { logInConstant } from "../type-definitions/authentication";
import { logIn } from "./action-dispatchers";

export interface authState{
    status:boolean
}

const initialState:authState={
    status:false
};

export function authenticationReducer(state:authState=initialState,action:logIn) : authState{
    switch(action.type){
        case logInConstant : 
                    return {
                        ...state,
                        status : true
                    };  
        default:
            return initialState;
    }
}