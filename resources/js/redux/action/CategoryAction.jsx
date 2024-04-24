import { GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, GET_SUBCATEGORY, ADD_SUBCATEGORY, DELETE_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../ActionType"

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


// SUBCATEGORY WORK

export const postSubCategory = (data) => {
    return {
        type: ADD_SUBCATEGORY,
        payload: data
    }
}
export const getSubCategory = (data) => {
    return {
        type: GET_SUBCATEGORY,
        payload: data
    }
    
}

export const deleteSubCategory = (data) => {
    return {
        type: DELETE_SUBCATEGORY,
        payload: data
    }
}
export const updateSubCategory = (data) => {
    return {
        type: UPDATE_SUBCATEGORY,
        payload: data
    }
}

