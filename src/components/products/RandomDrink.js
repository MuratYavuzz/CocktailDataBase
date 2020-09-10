import React, { Component } from "react";
import { connect } from "react-redux";
import * as randomCocktail from "../../redux/actions/randomCocktail";
import { bindActionCreators } from "redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
} from "reactstrap";

class RandomDrink extends Component {
  componentDidMount() {
    this.props.actions.getDrink();
  }
  renderIcon() {
    return (
      <svg
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        class="bi bi-caret-right"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M6 12.796L11.481 8 6 3.204v9.592zm.659.753l5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"
        />
      </svg>
    );
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Today's Random Cocktail</h1>
        {this.props.drink.map((drink) => (
          <Row>
            <Col>
              <Card>
                <Row className="no-gutters">
                  <Col md="4">
                    <CardImg
                      top
                      width="100%"
                      src={drink.strDrinkThumb}
                      alt="Card image cap"
                    />
                  </Col>
                  <Col md="8">
                    <CardBody className="mt-5">
                      <CardTitle className=" h2 mb-2 font-weight-bold">
                        {drink.strDrink}
                      </CardTitle>
                      <CardSubtitle></CardSubtitle>
                      <CardText>
                        <b>Description</b> <br></br>
                        {this.renderIcon()}
                        {drink.strInstructions}
                      </CardText>
                      <CardText>
                        <b>Alcoholic</b> <br></br>
                        {this.renderIcon()}
                        {drink.strAlcoholic}
                      </CardText>
                      <CardText>
                        <b>Category</b> <br></br>
                        {this.renderIcon()}
                        {drink.strCategory}
                      </CardText>
                      <CardText>
                        <b>Ingredients</b> <br></br>
                        <ul>
                          <li>{drink.strIngredient1}</li>
                          <li>{drink.strIngredient2}</li>
                          <li>{drink.strIngredient3}</li>
                        </ul>
                      </CardText>
                    </CardBody>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    drink: state.randomCocktailReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getDrink: bindActionCreators(randomCocktail.getRandomCocktail, dispatch),
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(RandomDrink);
