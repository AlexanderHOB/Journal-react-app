import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import validator from 'validator';
import {ShowImage} from '../../helpers/ShowImage';
import {useForm} from '../../hooks/useForm';
import { setError, setRemoveError } from '../../actions/uiAuth';
import { startLoginWithEmailAndPassword, startLoginWithGoogle } from '../../actions/auth';
import 'animate.css';

export const LoginScreen = ({width}) => {
    const dispatch= useDispatch();
    const {msgError,loading} = useSelector(state => state.uiAuth);
    const [{email,password},handleInputChange] = useForm(
            {email:'',password:''}
            );
    const handleLogin = (e) =>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startLoginWithEmailAndPassword(email,password));
        }
    }
    const handleGoogleLogin = () =>{
        dispatch(startLoginWithGoogle());
    }
    const isFormValid = ()=>{
        if( !validator.isEmail(email)){
            dispatch(setError(' Email is required'));
            return false;
        }else if( password.trim().length === 0 ){
            dispatch(setError('Email is required'))
            return false;
        }
        dispatch(setRemoveError());
        return true;
    }

    return (
        <div className='login__user signin'>
            <div className='login_container-img animate__animated animate__fadeInDownBig'>
                    <ShowImage path={'./login/login.jpg'} width={width}/>                
            </div>
            <div className='login__form animate__animated animate__fadeInUpBig'>
                <form onSubmit={handleLogin}>
                    <h2> Sign In</h2>
                    {msgError && (<div className='alert-danger'>
                        {msgError}
                    </div>)}
                    <input 
                        type='email' 
                        name='email'
                        placeholder='Email'
                        value={email}
                        requiered = 'true'
                        onChange={handleInputChange}
                        className='text-box'
                        />
                    <input 
                        type='password' 
                        name='password'
                        placeholder='Password'
                        value={password}
                        onChange={handleInputChange}
                        className='text-box'
                        requiered = 'true'
                        />
                    <input 
                        type='submit' 
                        value='Login'
                        className='btn btn-primary'
                        disabled={loading}
                        />
                    <div className='auth__social-networks'>
                    <p className='login__signup '>Login with social network</p>
                    <div 
                        className="google-btn"
                        onClick={handleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                    <p className='login__signup '> 
                        Don't have a account?
                        <Link to='/auth/register' className='login__register'> Sign Up.</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
