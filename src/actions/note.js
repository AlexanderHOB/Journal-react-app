// import { db } from "../firebase/firebase-config"
import { loadNotes } from "../helpers/loadNotes"
import { types } from "../types/types";



export const startloadNotes = (uid)=>{
    return async(dispatch)=>{
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}
export const activeNotes = (id)=>({
    type:types.notesActive,
    payload:id
})
export const setNotes=(notes) =>({
    type:types.notesLoad,
    payload:notes
});