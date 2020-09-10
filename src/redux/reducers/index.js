import {combineReducers} from "redux"
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from "./categoryListRecuder"
import drinksListReducer from "./drinksListReducer"
import drinkDetailReducer from "./drinkDetailReducer"
import ingredientsReducer from "./ingredientsReducer"
import drinksByIngredientReducer from "./drinksByIngredientReducer"
import randomCocktailReducer from "./randomCocktailReducer"
import nonAlcoholicReducer from "./nonAlcoholicReducer"
const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    drinksListReducer,
    drinkDetailReducer,
    ingredientsReducer,
    drinksByIngredientReducer,
    randomCocktailReducer,
    nonAlcoholicReducer
})

export default rootReducer;