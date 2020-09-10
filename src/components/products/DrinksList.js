import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import * as drinksActions from "../../redux/actions/drinksActions";
import { Link } from "react-router-dom";
import * as drinkDetail from "../../redux/actions/drinkDetail";
import { bindActionCreators } from "redux";

class DrinksList extends Component {
  componentDidMount() {
    this.props.actions.getDrinks();
  }
  selectDrink = (drink) => {
    this.props.actions.getDrink(drink.idDrink);
  };
  render() {
    var newSize = 9;
    this.props.drinks.length = newSize;
    const images = this.props.drinks.map((drink) => {
      return (
        <Link key={drink.idDrink} to={"/DrinkDetail"} style={{ textDecoration: 'none',color:'GrayText'}}>
        <Card onClick={() => this.selectDrink(drink)} key={drink.idDrink} style={{ width: "20.79rem", padding:3 }}>
          <CardImg variant="top" src={drink.strDrinkThumb} />
          <CardBody>
            <CardTitle className="text-center"><h4>{drink.strDrink}</h4></CardTitle>
          </CardBody>
        </Card>
        </Link>
      );
    });
    return (
      <div className="container">
        <footer className="row ">
          <div className="row"></div>
          <div className="row">{images}</div>
        </footer>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    //currentCategory: state.changeCategoryReducer,
    drinks: state.drinksListReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getDrinks: bindActionCreators(drinksActions.getDrinks, dispatch),
      getDrink: bindActionCreators(drinkDetail.getDrinkDetail, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(DrinksList);
