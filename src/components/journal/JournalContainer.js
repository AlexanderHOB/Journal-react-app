import React from 'react'
import {  Route, Switch } from 'react-router-dom'
import { Dashboard } from '../dashboard/Dashboard'
import { NotesScreen } from '../notes/NotesScreen'

export const JournalContainer = () => {
    return (
        <section className="journal__container">
                
                <Switch>
                    <Route  exact path='/notes' component={NotesScreen}/>
                    <Route  exact path='/' component={Dashboard} />
                </Switch>

        </section>
    )
}
