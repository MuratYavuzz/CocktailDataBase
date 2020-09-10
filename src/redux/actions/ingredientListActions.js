import * as actionTypes from "./actionTypes";

export function getIngredient(ingredients) {
  return { type: actionTypes.GET_INGREDIENTS_SUCCESS, payload: ingredients };
}
export function getIngredientsList() {
  return function (dispatch) {
    fetch("https://the-cocktail-db.p.rapidapi.com/list.php?i=list", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394",
      },
    })
      .then((response) => response.json())
      .then((result) => dispatch(getIngredient(result.drinks)))

  };
}
