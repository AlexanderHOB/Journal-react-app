import React from 'react'
import {Link} from 'react-router-dom';
import {ShowImage} from '../../helpers/ShowImage'
import 'animate.css';

export const LoginScreen = ({width}) => {
    return (
        <>
            <div className='login_container-img animate__animated animate__fadeInDownBig'>
                    <ShowImage path={'./login/login.jpg'} width={width}/>                
                </div>
                <div className='login__form animate__animated animate__fadeInUpBig'>
                    <form>
                        <h2> Sign In</h2>
                        <input 
                            type='text' 
                            className='login__text'
                            placeholder='Username'
                            />
                        <input 
                            type='password' 
                            className='login__text'
                            placeholder='Password'
                            />
                        <input 
                            type='submit' 
                            className='login__text'
                            placeholder='Login'
                            />
                        <p className='login__signup '> 
                            Don't have a account?
                            <Link to='/auth/register' className='login__register'> Sign Up.</Link>
                        </p>
                    </form>
                </div>
        </>
        // <section className='login__section'>
        // <div className='login__container'>
        //     <div className='login__user signin'>
        //         <div className='login_container-img animate__animated animate__fadeInDownBig'>
        //             <ShowImage path={'./login/login.jpg'} width={width}/>                
        //         </div>
        //         <div className='login__form animate__animated animate__fadeInUpBig'>
        //             <form>
        //                 <h2> Sign In</h2>
        //                 <input 
        //                     type='text' 
        //                     className='login__text'
        //                     placeholder='Username'
        //                     />
        //                 <input 
        //                     type='password' 
        //                     className='login__text'
        //                     placeholder='Password'
        //                     />
        //                 <input 
        //                     type='submit' 
        //                     className='login__text'
        //                     placeholder='Login'
        //                     />
        //                 <p className='login__signup '> 
        //                     Don't have a account?
        //                     <Link to='/auth/register' className='login__register'> Sign Up.</Link>
        //                 </p>
        //             </form>
        //         </div>
        //     </div>
        // </div>
        // </section>
    )
}
