import React from "react";

export class IngredientList extends React.Component {
  render() {
    const liElem = this.props.ingredients.map(
      (
        ingredient,
        index //Lambda
      ) => (
        <li key={`${index}-ingredient`}>
          {ingredient.amount} {ingredient.unit} {ingredient.name}
        </li>
      )
    );
    return <ul>{liElem}</ul>;
  }
}
