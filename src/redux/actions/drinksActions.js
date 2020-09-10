import * as actionTypes from "./actionTypes";

export function getDrinksSuccess(drinks) {
  return { type: actionTypes.GET_DRINKS_SUCCESS, payload: drinks };
}

export function getDrinks(categoryName) {
  return function (dispatch) {
    if (categoryName) {
      fetch(
        "https://the-cocktail-db.p.rapidapi.com/filter.php?c=" + categoryName,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
            "x-rapidapi-key":
              "253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394",
          },
        }
      )
        .then((response) => response.json())
        .then((result) => dispatch(getDrinksSuccess(result.drinks)));
    } else {
      fetch("https://the-cocktail-db.p.rapidapi.com/popular.php", {
        method: "GET",
        headers: {
          "x-rapidapi-host": "the-cocktail-db.p.rapidapi.com",
          "x-rapidapi-key":
            "253d9de424mshcce2e29a6e54991p11f660jsn9852ee16d394",
        },
      })
        .then((response) => response.json())
        .then((result) => dispatch(getDrinksSuccess(result.drinks)));
    }
  };
}
