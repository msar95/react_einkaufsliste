import React from "react";
import { IngredientFormPart } from "./IngredientFormPart";
import './RecipeForm.css';

export class RecipeForm extends React.Component {
    render() {
        return (
            <form>
                <label>
                    Name des Rezepts:
                    <input type='text' />
                </label>
                <label>
                    Zutaten
                    <IngredientFormPart/>
                </label>
            </form>
        )
    }
}