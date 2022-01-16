import { addChatConstant, addMessageConstant, chatModel, logInConstant } from "../type-definitions/authentication";
import { addChat, addMessage, logIn } from "./action-dispatchers";

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
    currentUser:string
}

const initialChatState:chatState={
    chats:{},
    currentUser:''
}

export function chatReducer(state:chatState=initialChatState,action:addChat | addMessage) : chatState{
    switch(action.type){
        case addChatConstant : 
            return{
                ...state,
                chats:{...state.chats,[(<string>(<addChat>action).payload?.id)] : [...<chatModel[]>(<addChat>action).payload?.chat]},
                currentUser:(<string>(<addChat>action).payload?.id)
            }
        case addMessageConstant : 
            const currentUserId=state.currentUser;
            const chats=[...state.chats[currentUserId]];
            chats.push(<chatModel>action.payload);

            return{
                ...state,
                chats:{...state.chats,[currentUserId] : [...<chatModel[]>chats]}
            }    
        default : 
            return state;    
    }
}