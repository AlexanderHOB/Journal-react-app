import React,{useEffect,useRef} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { startDeleteNotes, startUpdateNotes } from '../../actions/note';
import {useForm} from '../../hooks/useForm'
export const NoteSelected = () => {
    const dispatch = useDispatch();
    const {activeNote} = useSelector(state =>state.notes);
    const [values, handleInputChange,reset] = useForm(activeNote)
    const  {title,body}= values;
    const activeId = useRef(activeNote.id)
    useEffect(() => {
        if(activeId.current !== activeNote.id){
            reset(activeNote)
            activeId.current = activeNote.id
    }
    },[reset,activeNote])
    const handleSaveNote=(e)=>{
        e.preventDefault()
        dispatch(startUpdateNotes(values));
    }
    const handleDeleteNote=(e)=>{
        e.preventDefault()
        dispatch(startDeleteNotes(activeNote.id))
    }
    return (
        <div className="note__new-note">
            <form>
                <div className="note__actions">
                    <input
                        className=" btn btn-primary"
                        type="submit"
                        value="Guardar"
                        onClick={handleSaveNote}
                    />
                    <input
                        className=" btn btn-primary"
                        type="submit"
                        value="Eliminar"
                        onClick={handleDeleteNote}
                    />
                </div>
                <input
                    type="text"
                    className="note__new-title"
                    value={title}
                    name="title"
                    onChange={handleInputChange}
                />
                <textarea
                    className="note__new-body"
                    value={body}
                    name="body"
                    onChange={handleInputChange}
                >

                </textarea>

                
            </form>
        </div>
    )
}
