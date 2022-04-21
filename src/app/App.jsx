import React from "react";
import { IngredientList } from "./components/IngredientList";

const mockRecipes = [
  {
    id: 1,
    name: "Apfelkuchen",
    showEditForm: false,
    ingredients: [
      {
        name: "Zucker",
        amount: 100,
        unit: "Gramm",
      },
      {
        name: "Eier",
        amount: 1,
        unit: "Stück",
      },
      {
        name: "Vanillinzucker",
        amount: 1,
        unit: "Stück",
      },
      {
        name: "Äpfel",
        amount: 6,
        unit: "Stück",
      },
      {
        name: "Puddingpulver",
        amount: 1,
        unit: "Stück",
      },
    ],
  },
  {
    id: 2,
    name: "Pudding",
    showEditForm: false,
    ingredients: [
      {
        name: "Zucker",
        amount: 50,
        unit: "Gramm",
      },
      {
        name: "Sahne",
        amount: 0.2,
        unit: "Liter",
      },
      {
        name: "Vanilleschote",
        amount: 1,
        unit: "Stück",
      },
    ],
  },
];

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Einkaufsliste</h1>
        <IngredientList ingredients={mockRecipes[0].ingredients} /> 
      </React.Fragment>
    );
  }
}
