import {actionType} from '../constant/ActionType'

export const showPage = (pageName) => {
    return ({
        type : actionType.OPEN_PAGE,
        payload : pageName
    })
}

export const closePage = () => {
    return ({
        type : actionType.CLOSE_PAGE,
        payload : 'Login'
    })
}

export const popMessageOpen = (message,popType) => {
    return ({
        type : actionType.POP_MESSAGE_OPEN,
        payload : {
            message,
            popType
        }
    })
}

export const popMessageClose = () => {
    return ({
        type : actionType.POP_MESSAGE_CLOSE,
    })
}