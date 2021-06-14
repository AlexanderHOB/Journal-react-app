import {firebase, googleAuthProvider} from '../firebase/firebase-config';
import { types } from '../types/types';
import { setError } from './uiAuth';
import { finishLoading, startLoading } from "./uiAuth";

export const startLoginWithGoogle = () =>{
    return (dispatch)=>{
        dispatch(startLoading());
        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            // photoURL displayName
            dispatch(login(user.uid,user.displayName,user.photoURL))
        })
        .catch( console.log)
        .finally(() =>{
            dispatch(finishLoading());
        })
    }
    
}
export const startLoginWithEmailAndPassword=(email,password) =>{
    return(dispatch)=>{
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({user}) => {
                dispatch(login(user.uid,user.displayName))
            })
            .catch((error) => {
                const errorCode = error.code;
                if(errorCode === 'auth/wrong-password'){
                    dispatch(setError('Email or Password Incorrect!'))
                }
            });

    }
}
export const startRegisterWithEmailAndPassword=(email,password,username)=>{
    return(dispatch)=>{
        dispatch(startLoading());
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(async ({user}) => {
                await user.updateProfile({displayName:username});
                dispatch(login(user.uid, user.displayName));
            })
            .catch((error)=>{
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode + errorMessage)
            })
            .finally(()=>{
                dispatch(finishLoading());
            });
    }
}
export const startLogOut = ()=>{
    return (dispatch)=>{
        dispatch(startLoading());
        setTimeout(()=>{},1000)
        firebase.auth().signOut().then(() => {
            dispatch(logOut())
        }).catch((error) => {
            console.log(error);
        }).finally(()=>{
            dispatch(finishLoading());
        });
    }
}
export const login = (uid, displayName,photoURL="")=>({
    type: types.login,
    payload:{
        uid,
        displayName,
        photoURL,
    }
});
export const logOut = ()=>({
    type:types.logout
});