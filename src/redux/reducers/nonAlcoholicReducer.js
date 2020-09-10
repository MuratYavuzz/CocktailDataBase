import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function nonAlcoholicReducer(state=initialState.nonAlcoholic,action)
{
    switch (action.type) {
        case actionTypes.NON_ALCOHOLIC_COCKTAILS:
            return action.payload
        default:
            return state;
    }
}