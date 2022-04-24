import React from "react";

export class IngredientFormPart extends React.Component {
  render() {
    const { ingredient, onChange } = this.props; // Object-Destructuring -> accessing props that are defined in recipeForm
    return (
      <div className="ingredient-form">
        <label>
          Name:{" "}
          <input
            type="text"
            value={ingredient.name}
            name='name'
            onChange={(event) => onChange(event, ingredient)}
          />
        </label>
        <label>
          Menge:{" "}
          <input
            type="number"
            name='amount'
            value={ingredient.amount}
            onChange={(event) => onChange(event, ingredient)}
          />
        </label>
        <label>
          <select
            value={ingredient.unit}
            name='unit'
            onChange={(event) => onChange(event, ingredient)}
          >
            <option>Stück</option>
            <option>Gramm</option>
            <option>Liter</option>
          </select>
        </label>
      </div>
    );
  }
}
