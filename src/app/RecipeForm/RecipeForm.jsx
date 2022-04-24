import React from "react";
import { IngredientFormPart } from "./IngredientFormPart";
import "./RecipeForm.css";

const createEmtpyIngredient = () => ({
  name: "",
  amount: "",
  unit: "Stück",
});

const emptyRecipe = {
  name: "",
  ingredients: [createEmtpyIngredient()],
};

export class RecipeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = emptyRecipe;

    this.handleNameChange = this.handleNameChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleAddIngredient() {
    this.setState((currentState) => {
      return {
        ...currentState, // Best Practice
        ingredients: [
          // Adds another empty ingredient to the ingredients
          ...currentState.ingredients,
          createEmtpyIngredient(),
        ],
      };
    });
  }

  handleIngredientChange(event, ingredientName) {
    const { value, name } = event.target;
    console.log(`Name: ${name}, Value: ${value}`);
    this.setState((currentState) => ({
      ...currentState,
      ingredients: currentState.ingredients.map((ingredient) => {
          if(ingredient.name === ingredientName) {
              return {
                  ...ingredient,
                  [name] : value // Computed-Properties -> dynamically passing object props
              }
          }
          return ingredient;
      }),
    }));
  }

  render() {
    const ingredientFormParts = this.state.ingredients.map(
      (ingredient, index) => {
        return (
          <IngredientFormPart
            key={`ingredient-${index}`}
            ingredient={ingredient}
            onChange={(event) =>
              this.handleIngredientChange(event, ingredient.name)
            }
          />
        );
      }
    );

    return (
      <form>
        <label>
          Name des Rezepts:
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleNameChange}
          />
        </label>
        <article>
          <label>
            Zutaten
            {ingredientFormParts}
          </label>
          <button type="button" onClick={() => this.handleAddIngredient()}>
            Zutat hinzufügen
          </button>
        </article>
        <button type="button">Speichern</button>
      </form>
    );
  }
}
