import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import * as drinksAction from "../../redux/actions/drinksActions";
import { ListGroup, ListGroupItem } from "reactstrap";
class CategoryList extends Component {
  componentDidMount() {
    this.props.actions.getCategories();
  }

  selectCategory = (category) => {
    this.props.actions.changeCategory(category);
    this.props.actions.getDrinks(category.strCategory);
  };

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem className="p-3 mb-1 bg-danger text-white text-center">
            <h4>Cocktail Categories</h4>
          </ListGroupItem>
        </ListGroup>

        <ListGroup >
          {this.props.categories.map((category) => (
            <ListGroupItem 
            active={category.strCategory === this.props.currentCategory.strCategory}
            onClick={() => this.selectCategory(category)}
            >
              {category.strCategory}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    categories: state.categoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
        changeCategory: bindActionCreators(
        categoryActions.changeCategory,
        dispatch
      ),
      getDrinks: bindActionCreators(drinksAction.getDrinks, dispatch), 
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);
