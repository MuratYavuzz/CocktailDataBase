import React, { Component } from "react";
import { connect } from "react-redux";
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import * as ingredientListActions from "../../redux/actions/ingredientListActions";
import * as drinksByIngredient from "../../redux/actions/drinksByIngredient";
import alertify from "alertifyjs"

class Ingredients extends Component {
  componentDidMount() {
    this.props.actions.getIngredients();
  }
  selectIngredient = (ingredient) => {
    this.props.actions.getDrinksByIngredient(ingredient.strIngredient1);
    alertify.success( "Displaying " + ingredient.strIngredient1 +" Based Cocktails");
  }
  render() {
    var newSize = 5;
    this.props.ingredients.length = newSize;
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Ingredients
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.ingredients.map((ingredient) => (
            <Link to={"/DrinksByIngredient"} style={{ textDecoration: 'none'}} >
              <DropdownItem onClick={() => this.selectIngredient(ingredient)} >{ingredient.strIngredient1}</DropdownItem>
            </Link>
          ))}
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
}
function mapStateToProps(state) {
  return {
    ingredients: state.ingredientsReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getIngredients: bindActionCreators(
        ingredientListActions.getIngredientsList,
        dispatch
      ),
      getDrinksByIngredient: bindActionCreators(drinksByIngredient.getDrinksByIngredient, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
