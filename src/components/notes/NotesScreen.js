import React from 'react';
import {useSelector} from 'react-redux';
import {ListNotes} from './ListNotes';
import {NoteSelected} from './NoteSelected';
import {JournalNothing} from '../journal/JournalNothing';

export const NotesScreen = () => {
    const {activeNote} = useSelector(state =>state.notes);
    return (
        <section className="notes__screen">
            <ListNotes/>
            {
                (activeNote) 
                    ?(<NoteSelected/>)
                    :(<JournalNothing/>)
            }
            
        </section>
    )
}
