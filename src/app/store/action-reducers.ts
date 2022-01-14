import { addChatConstant, chatModel, logInConstant } from "../type-definitions/authentication";
import { addChat, logIn } from "./action-dispatchers";

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
            return state;
    }
}


export interface chatFormatInStore{
    [k:string] : string | chatModel[]
}

export interface chatState{
    chats: chatFormatInStore,
    currentUser:string | null
}

const initialChatState:chatState={
    chats:{},
    currentUser:null
}

export function chatReducer(state:chatState=initialChatState,action:addChat) : chatState{
    switch(action.type){
        case addChatConstant : 
            return{
                ...state,
                chats:{...state.chats,[<string>action.payload?.id] : [...<chatModel[]>action.payload?.chat]},
                currentUser:<string>action.payload?.id
            }
        default : 
            return state;    
    }
}