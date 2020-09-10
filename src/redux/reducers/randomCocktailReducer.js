import * as actionTypes from "../actions/actionTypes"
import initialState from "./initialState"

export default function randomCocktailReducer(state=initialState.randomCocktail,action)
{
    switch (action.type) {
        case actionTypes.RANDOM_COCKTAIL:
            return action.payload
        default:
            return state;
    }
}