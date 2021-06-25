import { types } from "../types/types"

const initialState = {
    notes:[],
    activeNote:null
}

export const noteReducer = (state = initialState,action) =>{
    switch(action.type){
        case types.notesLoad:
            return{
                ...state,
                notes: [...action.payload]
            }
        case types.notesActive:
            return{
                ...state,
                activeNote: state.notes.filter(note => note.id === action.payload)[0]
            }
        case types.notesUpdated:
            return{
                ...state,
                notes: state.notes.map(note =>note.id === action.payload.id ? action.payload.note:note)
            }
        case types.notesDelete:
            return{
                ...state,
                notes: state.notes.filter(note=> note.id !== action.payload),
                activeNote:null
            }
        default:
            return initialState;

    }
}