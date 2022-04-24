import React from "react";


export class IngredientFormPart extends React.Component {
  render() {
    return (
      <div className="ingredient-form">
        <label>
          Name: <input type="text" />
        </label>
        <label>
          Menge: <input type="number" />
        </label>
        <label>
          <select>
            <option>Stück</option>
            <option>Gramm</option>
            <option>Liter</option>
          </select>
        </label>
      </div>
    );
  }
}
