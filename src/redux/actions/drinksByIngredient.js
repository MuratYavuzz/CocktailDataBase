import * as actionTypes from "./actionTypes";

export function getDrinksByIngredientSuccess(drinks_by_ingredient) {
  return {
    type: actionTypes.DRINKS_BY_INGREDIENTS,
    payload: drinks_by_ingredient
  };
}
export function getDrinksByIngredient(ingredientName) {
  return function (dispatch) {
    fetch("https://the-cocktail-db.p.rapidapi.com/filter.php?i="+ ingredientName, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394",
      },
    })
      .then((response) => response.json())
      .then((result) => dispatch(getDrinksByIngredientSuccess(result.drinks)))
  };
}
