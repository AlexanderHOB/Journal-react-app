import React from 'react';
import { useSelector } from 'react-redux';
import {Note} from './Note';
export const ListNotes = () => {
    const {notes} = useSelector(state => state.notes)
    return (
        <div className="notes__list">
            <div  className="notes__list-header">
                <p> New Note</p>
            </div>
            <div className="notes__list-notes">
                {
                    notes.map(note=> <Note key={note.id} {...note}/>)
                }
            </div>
        </div>
    )
}
