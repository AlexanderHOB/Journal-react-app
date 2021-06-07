import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import {useWindowDimensions} from '../hooks/useWindowDimensions';

export const AuthRouter = () => {
    const {width} = useWindowDimensions();
    return (
        <section className='login__section'>
        <div className='login__container'>
            <div className='login__user signin'>
                <Switch>
                    <Route 
                        exact path='/auth/login'
                        component={(prop)=><LoginScreen {...prop} width={width}/>}
                    />
                    <Route 
                        exact path='/auth/register'
                        component={(prop)=> <RegisterScreen {...prop} width={width}/>}
                    />
                    <Redirect to='/auth/login' />
                </Switch>
            </div>
        </div>
        </section>
    )
}
