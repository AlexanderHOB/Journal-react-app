import React from 'react'
import { useSelector } from 'react-redux';
export const NoteSelected = () => {
    const {activeNote} = useSelector(state =>state.notes);
    const {id,body,date,title,url} = activeNote;
    return (
        <div className="note__new-note">
            <form>
                <div className="note__actions">
                    <input
                        className=" btn btn-primary"
                        type="submit"
                        value="Guardar"
                    />
                    <input
                        className=" btn btn-primary"
                        type="submit"
                        value="Eliminar"
                    />
                </div>
                <input
                    type="text"
                    className="note__new-title"
                    value={title}
                />
                <textarea
                    className="note__new-body"
                    value={body}
                >

                </textarea>

                
            </form>
        </div>
    )
}
