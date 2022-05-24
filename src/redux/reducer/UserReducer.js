import { actionType } from "../constant/ActionType"

export const userReducer = (state = {user : {}},{type,payload}) => {
    switch(type){
        case actionType.USER_LOGIN_REQUEST :
        case actionType.USER_REGISTER_REQUEST:
        case actionType.USER_LOAD_REQUEST:
            return {
                loading : true,
                isAuthenticated : false,
            }
        case actionType.USER_LOGIN_SUCCESS :
        case actionType.USER_REGISTER_SUCCESS :
        case actionType.USER_LOAD_SUCCESS : 
            return {
                ...state,
                loading : false,
                isAuthenticated : true,
                user : payload
            }
        case actionType.USER_LOGOUT_SUCCESS : 
            return {
                loading : false,
                user : null,
                isAuthenticated : false
            }
        case actionType.USER_LOGIN_FAIL :
        case actionType.USER_REGISTER_FAIL :
            return {
                ...state,
                loading : false,
                isAuthenticated : false,
                user : null,
                error : payload
            }
        case actionType.USER_LOGOUT_FAIL:
            return {
                ...state,
                loading : false,
                error : payload
            }
        case actionType.USER_LOAD_FAIL :
            return {
                loading : false,
                isAuthenticated : false,
                user : null,
                error : payload
            }
        case actionType.CLEAR_ERRORS : 
            return {
                ...state,
                error : null
            }
        default : 
            return state
    }
}


export const updateReducer = (state = {},{type,payload}) => {
    switch(type){
        case actionType.UPDATE_PROFILE_REQUEST :
        case actionType.UPDATE_EMAIL_REQUEST : 
        case actionType.RESET_PASSWORD_REQUEST : 
            return ({
                ...state,
                loading : true
            })
            case actionType.UPDATE_PROFILE_SUCCESS :
            case actionType.UPDATE_EMAIL_SUCCESS : 
            case actionType.RESET_PASSWORD_SUCCESS :
                return ({
                    ...state,
                    loading : false,
                    isUpdated : payload.isUpdated,
                    message : payload.message

                })
            case actionType.UPDATE_PROFILE_FAIL :
            case actionType.UPDATE_EMAIL_FAIL :
            case actionType.RESET_PASSWORD_FAIL :
                return ({
                    ...state,
                    loading : false,
                    error : payload
                })
            case actionType.CLEAR_ERRORS : 
                return {
                    ...state,
                    error : null
                }
        default : 
            return (state)
    }
}


export const forgetPassReducer = (state = {},{type,payload}) => {
    switch(type){
        case actionType.FORGET_PASSWORD_REQUEST :
        case actionType.RESET_PASSWORD_REQUEST :
            return ({
                ...state,
                loading : true,
                error : null
            })
        case actionType.FORGET_PASSWORD_SUCCESS :
             return ({
                ...state,
                loading : false,
                message : payload
                })
        case actionType.RESET_PASSWORD_SUCCESS : 
            return ({
                ...state,
                loading : false,
                success : payload
            })
        case actionType.FORGET_PASSWORD_FAIL :
        case actionType.RESET_PASSWORD_FAIL :
            return ({
                loading : false,
                error : payload
            })
        case actionType.CLEAR_ERRORS : 
            return {
                ...state,
                error : null
            }
        default : 
            return (state)
    }
}