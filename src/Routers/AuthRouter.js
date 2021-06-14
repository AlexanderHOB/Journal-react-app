import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import {
    CSSTransition,
    TransitionGroup,
} from 'react-transition-group';
import { LoginScreen } from '../components/auth/LoginScreen'
import { RegisterScreen } from '../components/auth/RegisterScreen'
import {useWindowDimensions} from '../hooks/useWindowDimensions';
import 'animate.css';

export const AuthRouter = ({location}) => {
    const {width} = useWindowDimensions();
    return (
        <section className='login__section'>
        <div className='login__container'>
            
            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key} 
                    classNames="item" 
                    timeout={500}
                >
                    <Switch location={location}>
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
                </CSSTransition>
            </TransitionGroup>
            
        </div>
        </section>
    )
}
