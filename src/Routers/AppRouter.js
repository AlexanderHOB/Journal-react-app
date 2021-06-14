import React,{useState,useEffect} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from "react-router-dom";
import {useDispatch} from 'react-redux';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { login } from '../actions/auth';
import {firebase} from '../firebase/firebase-config';
import { Loading } from '../components/helpers/Loading';
import { startloadNotes } from '../actions/note';
export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                dispatch(login(user.uid,user.displayName,user.photoURL))
                setIsLoggedIn(true);
                dispatch(startloadNotes(user.uid));
            } else {
                setIsLoggedIn(false);   
            }
            setChecking(false);
        });
    },[dispatch,setIsLoggedIn]);
    if(checking){
        return (
            <Loading/>
        );
    }
    return (
        <>
            <Router>
                <Switch>
                    <PublicRoute 
                        path="/auth" 
                        component={AuthRouter} 
                        isAuthenticated={isLoggedIn}
                    />
                    <PrivateRoute 
                        path='/'
                        component={JournalScreen}
                        isAuthenticated={isLoggedIn}
                    />
                    <Redirect to='/auth/login' />
                </Switch>
            </Router>
        </>
    )
}
