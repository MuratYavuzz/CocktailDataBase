import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function ingredientsReducer(state=initialState.ingredients,action)
{
    switch (action.type) {
        case actionTypes.GET_INGREDIENTS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}