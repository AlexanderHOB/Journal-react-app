import { types } from "../types/types";


export const setError = (error) =>({
    type:types.uiAuthSetError,
    payload: error
})
export const setRemoveError = () =>({
    type:types.uiAuthRemoveError
})

export const startLoading = () =>({
    type:types.uiStartLoading
})
export const finishLoading = () =>({
    type:types.uiFinishLoading
})