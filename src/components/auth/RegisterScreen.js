import React from 'react'
import {Link} from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux'
import validator from 'validator';
import {ShowImage} from '../../helpers/ShowImage'
import { useForm } from '../../hooks/useForm';
import { startRegisterWithEmailAndPassword } from '../../actions/auth';
import { setError, setRemoveError } from '../../actions/uiAuth';

import 'animate.css';

export const RegisterScreen = ({width}) => {
    const dispatch = useDispatch();
    const {msgError} = useSelector(state=>state.uiAuth);
    const [{username,email,password,confirm},handleInputChange]  = useForm(
        {
            username:'',
            email: '',
            password: '',
            confirm:''
        }
    );
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isFormValid()){
            dispatch(startRegisterWithEmailAndPassword(email,password,username))
        }
    }
    const isFormValid = ()=>{
        if( username.trim().length === 0){
            dispatch(setError(' Name is requiered'));
            return false;
        }else if( !validator.isEmail(email) ){
            dispatch(setError('Email is not valid'))
            return false;
        }else if (password!== confirm || password.length < 5){
            dispatch(setError('Password should be at least 6 characters and match each other'))
            return false;
        }
        dispatch(setRemoveError());
        return true;
    }
    return (
        <div className='login__user signin'>
            <div className='login__form animate__animated animate__fadeInUpBig'>
                <form onSubmit={handleSubmit}>
                    <h2> Create an account</h2>
                    {msgError && (<div className='alert-danger'>
                        {msgError}
                    </div>)}
                    <input 
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={username}
                        onChange={handleInputChange}
                        className='text-box'
                        />
                    <input 
                        type='text' 
                        name='email'
                        placeholder='Email Address'
                        value={email}
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
                        />
                    <input 
                        type='password' 
                        name='confirm'
                        placeholder='Confirm Password'
                        value={confirm}
                        onChange={handleInputChange}
                        className='text-box'
                        />
                    <input 
                        type='submit' 
                        placeholder='Sign Up'
                        className='btn btn-primary'
                        />
                    <p className='login__signup'> 
                        Already have an account
                        <Link to='/auth/login' className='login__register'> Sign in.</Link>
                    </p>
                </form>
            </div>
            <div className='login_container-img animate__animated animate__fadeInDownBig'>
                <ShowImage path={'./login/login.jpg'} width={width}/> 
            </div>
        </div>
        
    )
}
