import * as actionTypes from "./actionTypes";

export function RandomCocktail(drink) {
  return { type: actionTypes.RANDOM_COCKTAIL, payload: drink };
}
export function getRandomCocktail() {
  return function (dispatch) {
    fetch("https://the-cocktail-db.p.rapidapi.com/random.php", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
        "x-rapidapi-key": "253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394",
      },
    })
      .then((response) => response.json())
      .then((result) => dispatch(RandomCocktail(result.drinks)));
  };
}
