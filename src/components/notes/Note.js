import React from 'react';
import {useDispatch} from 'react-redux';
import { activeNotes } from '../../actions/note';
export const Note = ({id,title,body,url}) => {
    const dispatch = useDispatch();
    const handleActiveNote = ()=>{
        dispatch(activeNotes(id))
    }
    return (
        <div className="notes__card-note" onClick={handleActiveNote}>
            <div className="notes__card-title">
                <h4>{title}</h4>
            </div>
            <div className="notes__card-body">
                {
                    (body.length > 20) 
                        ? (<p>{body.slice(0,20) + '...'}</p>)
                        : (<p>{body}</p>)
                }
                
            </div>
        </div>
    )
}
