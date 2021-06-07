import React from 'react'
import {Link} from 'react-router-dom';
import {ShowImage} from '../../helpers/ShowImage'

import 'animate.css';

export const RegisterScreen = ({width}) => {
    return (
        <>
            <div className='login__form animate__animated animate__fadeInUpBig'>
                <form>
                    <h2> Create an account</h2>
                    <input 
                        type='text' 
                        placeholder='Username'
                        />
                    <input 
                        type='text' 
                        placeholder='Email Address'
                        />
                    <input 
                        type='password' 
                        placeholder='Password'
                        />
                    <input 
                        type='password' 
                        placeholder='Confirm Password'
                        />
                    <input 
                        type='submit' 
                        className='login__text'
                        placeholder='Sign Up'
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
        </>
        // <section className='login__section'>
        // <div className='login__container'>
        //     <div className='login__user signin '>
                    
        //             <div className='login__form animate__animated animate__fadeInUpBig'>
        //                 <form>
        //                     <h2> Create an account</h2>
        //                     <input 
        //                         type='text' 
        //                         placeholder='Username'
        //                         />
        //                     <input 
        //                         type='text' 
        //                         placeholder='Email Address'
        //                         />
        //                     <input 
        //                         type='password' 
        //                         placeholder='Password'
        //                         />
        //                     <input 
        //                         type='password' 
        //                         placeholder='Confirm Password'
        //                         />
        //                     <input 
        //                         type='submit' 
        //                         className='login__text'
        //                         placeholder='Sign Up'
        //                         />
        //                     <p className='login__signup'> 
        //                         Already have an account
        //                         <Link to='/auth/login' className='login__register'> Sign in.</Link>
        //                     </p>
        //                 </form>
        //             </div>
        //             <div className='login_container-img animate__animated animate__fadeInDownBig'>
        //                 <img src={defaultImages("./login/login.jpg").default} alt='cerrojo' />
        //             </div>
        //         </div>
        //     </div>
        // </section>
    )
}
