import React from "react";
import { Container } from "reactstrap";
import Navi from "../navi/Navi"
import Dashboard from "./Dashboard";
import {Route,Switch} from "react-router-dom"
import DrinkDetail from "../products/DrinkDetail"
import DrinksByIngredient from "../products/DrinksByIngredient";
import RandomDrink from "../products/RandomDrink";
import NonAlcoholicDrinks from "../products/NonAlcoholicDrinks"
import NotFound from "../common/NotFound"
function App() {
  return (
    <Container fluid={true}>
      <Navi />
      <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/DrinkDetail" exact component={DrinkDetail} />
        <Route path="/DrinksByIngredient" exact component={DrinksByIngredient} />
        <Route path="/RandomCocktail" exact component={RandomDrink} />
        <Route path="/MostLatest" exact component={NonAlcoholicDrinks} />
        <Route path='*' exact component={NotFound} />
      </Switch>
    </Container>
  );
}

export default App;
