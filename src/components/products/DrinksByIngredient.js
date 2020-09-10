import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as drinkDetail from "../../redux/actions/drinkDetail";

class DrinksByIngredient extends Component {
  selectDrink = (drink) => {
    this.props.actions.getDrink(drink.idDrink);
  };
  render() {
    //var newSize = 12;
    //this.props.drinks.length = newSize;
    const images = this.props.drinks.map((drink) => {
      return (
        <Link to={"/DrinkDetail"} style={{ textDecoration: "none",color:"GrayText" }}>
          <Card
            onClick={() => this.selectDrink(drink)}
            style={{ width: "24rem", padding: 3 }}
          >
            <CardImg variant="top" src={drink.strDrinkThumb} />
            <CardBody>
              <CardTitle className="text-center">
                <h4>{drink.strDrink}</h4>
              </CardTitle>
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
    drinks: state.drinksByIngredientReducer,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getDrink: bindActionCreators(drinkDetail.getDrinkDetail, dispatch),
    },
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(DrinksByIngredient);
