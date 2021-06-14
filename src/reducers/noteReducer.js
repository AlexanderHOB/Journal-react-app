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
                activeNote: state.notes.filter(note => note.id == action.payload)[0]
            }
        default:
            return initialState;

    }
}