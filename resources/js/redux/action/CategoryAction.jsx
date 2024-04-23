import { GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "../ActionType"

export const postCategory = (data) => {
    return {
        type: ADD_CATEGORY,
        payload: data
    }
}
export const getCategory = (data) => {
    return {
        type: GET_CATEGORY,
        payload: data
    }
    
}

export const deleteCategory = (data) => {
    return {
        type: DELETE_CATEGORY,
        payload: data
    }
}
export const updateCategory = (data) => {
    return {
        type: UPDATE_CATEGORY,
        payload: data
    }
}

