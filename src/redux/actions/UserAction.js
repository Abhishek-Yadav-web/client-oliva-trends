import axios from "axios"
import { actionType } from "../constant/ActionType"
import { productsOfWhislist } from "./WishlistAction";

export const userLogin = (userData) => async (dispatch) => {
    try{
        dispatch({type : actionType.USER_LOGIN_REQUEST})
        const {email , password} = userData;

        const config = {headers : {"Content-Type":"application/json"}}

        const { data } = await axios.post(
            `/api/v1/user/login`,
            {email,password},
            config
        )

        dispatch({type : actionType.USER_LOGIN_SUCCESS, payload : data.data})
        dispatch(productsOfWhislist())


    }catch(error){
        dispatch({type : actionType.USER_LOGIN_FAIL, payload: error.response.data.error})
    }
}

export const userRegister = (userData) => async (dispatch) => {
    try {
        dispatch({type : actionType.USER_REGISTER_REQUEST})
        const {fName,lName,sGender,DOB,email,password} = userData;

        const config = {headers : {"Content-Type":"application/json"}}

        const { data } = await axios.post(
            `/api/v1/user/register`,
            { firstName : fName,
              lastName : lName,
              gender : sGender,
              DOB,email,password},
            config
        )

        dispatch({type : actionType.USER_REGISTER_SUCCESS, payload : data.data})

    } catch (error) {
        dispatch({type : actionType.USER_REGISTER_FAIL, payload: error.response.data.error})
    }
}

export const userLoad = () => async (dispatch) => {
    try {
        dispatch({type : actionType.USER_LOAD_REQUEST})

        const { data } = await axios.get('/api/v1/user/profile');

        dispatch({type : actionType.USER_LOAD_SUCCESS, payload : data.data})
        dispatch(productsOfWhislist())
        
    } catch (error) {
        dispatch({type : actionType.USER_LOAD_FAIL})
    }
}

export const userLogout = () => async (dispatch) => {
    try {
        await axios.get(`/api/v1/user/logout`);

        dispatch({type : actionType.USER_LOGOUT_SUCCESS})
        dispatch({type : actionType.CLEAR_DATA})
        
    } catch (error) {
        dispatch({type : actionType.USER_LOGOUT_FAIL,payload : error.response.data.error})
    }
}

export const updateProfile = (profileData) => async (dispatch) => {
    try {
        dispatch({type : actionType.UPDATE_PROFILE_REQUEST})

        const config = {headers : {"Content-Type":"application/json"}}
        const {fName,lName,newDOB,sGender} = profileData


        const { data } = await axios.put('/api/v1/user/update/profile',{
            fName, lName, DOB : newDOB, gender : sGender
        },config)


        dispatch({type : actionType.UPDATE_PROFILE_SUCCESS,payload : {isUpdated : data.isUpated, message : data.message}})
        dispatch(userLoad())


    }catch (error) {
        dispatch({type : actionType.UPDATE_PROFILE_FAIL,payload : error.response.data.error})
    }
}

export const updateUserEmail = (emailData) => async (dispatch) => {
    try {
        dispatch({type : actionType.UPDATE_EMAIL_REQUEST})

        const config = {headers : {"Content-Type":"application/json"}}
        const {email,password} = emailData

        const { data } = await axios.put('/api/v1/user/update/email',{
            currentPassword : password, newEmail : email            
        },config)

        dispatch({type : actionType.UPDATE_EMAIL_SUCCESS,payload : {isUpdated : data.isUpated, message : data.message}})
        dispatch(userLoad())


    }catch (error) {
        dispatch({type : actionType.UPDATE_EMAIL_FAIL,payload : error.response.data.error})
    }
}

export const updateUserPassword = (passwordData) => async (dispatch) => {
    try {
        dispatch({type : actionType.RESET_PASSWORD_REQUEST})

        const config = {headers : {"Content-Type":"application/json"}}
        const {oldPassword,newPassword} = passwordData

        const { data } = await axios.put('/api/v1/user/update/password',{
            oldPassword,newPassword            
        },config)

        dispatch({type : actionType.RESET_PASSWORD_SUCCESS,payload : {isUpdated : data.isUpated, message : data.message}})
        dispatch(userLoad())


    }catch (error) {
        dispatch({type : actionType.RESET_PASSWORD_FAIL,payload : error.response.data.error})
    }
}

export const userForgetPassword = (forgetPassdata) => async (dispatch) => {
    try {
        dispatch({type : actionType.FORGET_PASSWORD_REQUEST})

        const config = {headers : {"Content-Type":"application/json"}}
        const {email} = forgetPassdata

        const { data } = await axios.post('/api/v1/user/password/forgot',{
            email
        },config)

        dispatch({type : actionType.FORGET_PASSWORD_SUCCESS,payload : data.message})


    }catch (error) {
        dispatch({type : actionType.FORGET_PASSWORD_FAIL,payload : error.response.data.error})
    }
}

export const userResetPassword = (resetPassdata) => async (dispatch) => {
    try {
        dispatch({type : actionType.RESET_PASSWORD_REQUEST})

        const config = {headers : {"Content-Type":"application/json"}}
        const {token,newPassword,confirmPassword} = resetPassdata

        console.log(token);

        const { data } = await axios.put(`/api/v1/user/password/reset/${token}`,{
            password : newPassword,
            confPassword : confirmPassword
        },config)

        dispatch({type : actionType.RESET_PASSWORD_SUCCESS,payload : data.message})


    }catch (error) {
        dispatch({type : actionType.RESET_PASSWORD_FAIL,payload : error.response.data.error})
    }
}

export const clearErrors = () => async(dispatch) => {
    dispatch({
        type : actionType.CLEAR_ERRORS
    })
} 