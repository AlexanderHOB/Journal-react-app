// import { db } from "../firebase/firebase-config"
import { db } from "../firebase/firebase-config";
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types";



export const startloadNotes = (uid)=>{
    return async(dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
export const startUpdateNotes = (note)=>{
    return async(dispatch,getState)=>{
        const {uid} = getState().auth;
        if(!note.url){
            delete note.url;
        }
        const noteUpdateToFirebase = {...note}
        delete noteUpdateToFirebase.id
        db.doc(`/${uid}/journal/notes/${note.id}`).update(noteUpdateToFirebase)
        dispatch(refreshNote(note.id, noteUpdateToFirebase))
    }
}
export const startDeleteNotes = (id)=>{
    return async (dispatch,getState)=>{
        const {uid} = getState().auth;
        db.doc(`/${uid}/journal/notes/${id}`).delete().then(()=>{
            dispatch(deleteNote(id));
        });
        
    }
}
export const deleteNote=(id)=>({
    type: types.notesDelete,
    payload:id
})
export const refreshNote = (id,note)=>({
    type:types.notesUpdated,
    payload:{
        id,
        note:{id,...note}
    }
})
export const activeNotes = (id)=>({
    type:types.notesActive,
    payload:id
})
export const setNotes=(notes) =>({
    type:types.notesLoad,
    payload:notes
});