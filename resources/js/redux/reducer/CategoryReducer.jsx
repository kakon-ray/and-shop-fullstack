
import Swal from "sweetalert2"
import { GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY, GET_SUBCATEGORY, ADD_SUBCATEGORY, DELETE_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../ActionType"

const initialState = {
    category: [],
    subcategory: []
}


const CategoryReducer = (state = initialState, action) => {
    const updateCategory = state.category.filter(item => item.id != action.payload.id)
    const updateSubCategory = state.subcategory.filter(item => item.id != action.payload.id)

    switch (action.type) {

        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            }

        case ADD_CATEGORY:
            return {
                ...state,
                category: [...state.category, action.payload]
            }

        case DELETE_CATEGORY:
            return {
                ...state,
                category: state.category.filter(
                    (item) => item.id !== action.payload
                ),
            }

        case UPDATE_CATEGORY:
            return {
                ...state,
                category: [...updateCategory, action.payload]

            }

            case GET_SUBCATEGORY:
            return {
                ...state,
                subcategory: action.payload
            }

        case ADD_SUBCATEGORY:
            return {
                ...state,
                subcategory: [...state.subcategory, action.payload]
            }

        case DELETE_SUBCATEGORY:
            return {
                ...state,
                subcategory: state.subcategory.filter(
                    (item) => item.id !== action.payload
                ),
            }

        case UPDATE_SUBCATEGORY:
            return {
                ...state,
                subcategory: [...updateSubCategory, action.payload]

            }

        default:
            return state
    }
}

export default CategoryReducer