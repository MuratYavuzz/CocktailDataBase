import * as actionTypes from "./actionTypes";

export function getNonAlcoholicCocktailsSuccess(drinks_non_alcoholic) {
  return {
    type: actionTypes.NON_ALCOHOLIC_COCKTAILS,
    payload: drinks_non_alcoholic,
  };
}
export function getDrinksNonAlcoholic() {
  return function (dispatch) {
    fetch("https://the-cocktail-db.p.rapidapi.com/latest.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394",
      },
    })
      .then((response) => response.json())
      .then((result) =>
        dispatch(getNonAlcoholicCocktailsSuccess(result.drinks))
      )
      .then((result) => console.log(result));
    debugger;
  };
}
