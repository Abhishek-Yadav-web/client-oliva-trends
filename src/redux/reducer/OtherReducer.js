import { actionType } from "../constant/ActionType";

export const ocReducer = (state = {data : {open : false,pageName : ''}},{type,payload}) => {
    switch(type){
        case actionType.OPEN_PAGE :
            return {
                open : true,
                pageName : payload
            }
        case actionType.CLOSE_PAGE :
            return {
                open : false,
                pageName : payload
            }
        default :
            return state
    }
}

export const popMessageReducer = (state = {data : {active : false, message : '', popType : ''}},{type,payload}) => {
    switch(type){
        case actionType.POP_MESSAGE_OPEN :
            return {
                active : true,
                message : payload.message,
                popType : payload.popType
            }
        case actionType.POP_MESSAGE_CLOSE :
            return {
                ...state,
                active : false,
            }
        default :
            return state
    }
}