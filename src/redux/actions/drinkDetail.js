import * as actionTypes from "./actionTypes";

export function getDrinkSuccess(drink) {
    return { type: actionTypes.GET_DRINK_SUCCESS, payload: drink };
  }
export function getDrinkDetail(drinkId) {
  return function (dispatch) {
    fetch("https://the-cocktail-db.p.rapidapi.com/lookup.php?i=" + drinkId, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394",
      },
    })
      .then((response) => response.json())
      .then((result) => dispatch(getDrinkSuccess(result.drinks)))
  };
}
