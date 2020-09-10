import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function drinksByIngredientReducer(state=initialState.drinksByIngredient,action)
{
    switch (action.type) {
        case actionTypes.DRINKS_BY_INGREDIENTS:
            return action.payload
        default:
            return state;
    }
}