
import Swal from "sweetalert2"
import { GET_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY } from "../ActionType"

const initialState = {
    category: []
}


const CategoryReducer = (state = initialState, action) => {
    const updateCategory = state.category.filter(item => item.id != action.payload.id)

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

        default:
            return state
    }
}

export default CategoryReducer