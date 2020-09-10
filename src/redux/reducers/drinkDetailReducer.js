import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function drinkDetailReducer(state=initialState.drink,action)
{
    switch (action.type) {
        case actionTypes.GET_DRINK_SUCCESS:
            return action.payload
        default:
            return state;
    }
}