import {AUTH,LOGOUT} from "../constants/actionTypes";
import * as api from "../api/index";
export const signin=(form,navigator)=> async (dispatch)=>
{
    try {
        const data=api.signIn(form);
        dispatch({type:AUTH,data});
        navigator("/");
    } catch (error) {
        console.log(error);
    }
};
export const signup=(form,navigator)=> async (dispatch)=>
{
    try {
        const data=api.signUp(form);
        dispatch({type:AUTH,data});
        navigator("/");
    } catch (error) {
        console.log(error);
    }
};
