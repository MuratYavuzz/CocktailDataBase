import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function drinksListReducer(state=initialState.drinks,action)
{
    switch (action.type) {
        case actionTypes.GET_DRINKS_SUCCESS:
            return action.payload
        default:
            return state;
    }
}