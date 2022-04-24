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

  handleNameChange(event){
      this.setState({
          name: event.target.value
      });
  }
  
  render() {
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
        <label>
          Zutaten
          <IngredientFormPart />
          <IngredientFormPart />
          <IngredientFormPart />
        </label>
      </form>
    );
  }
}
