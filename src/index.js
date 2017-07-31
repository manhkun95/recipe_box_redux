import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

import MyComponent from './components/MyComponent';
import {Menu, Recipe, IngredientsList, Ingredient, Instruction} from "./components/Menu/Menu";
import AddColorForm from "./components/AddColorForm/AddColorForm";
import {Server, Client} from "./components/Server-Client";
import MemberList from "./components/MemberList";

const data = [
  {
    "name": "Baked Salmon",
    "ingredients": [
      { "name": "Salmon", "amount": 1, "measurement": "l lb" },
      { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
      { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
      { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
      { "name": "Garlic", "amount": 3, "measurement": "cloves" }
    ],
    "steps": [
      "Preheat the oven to 350 degrees.",
      "Spread the olive oil around a glass baking dish.",
      "Add the salmon, Garlic, and pine nuts to the dish",
      "Bake for 15 minutes.",
      "Add the Butternut Squash and put back in the oven for 30 mins.",
      "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
    ]
  },
  {
    "name": "Fish Tacos",
    "ingredients": [{ "name": "Whitefish", "amount": 1, "measurement": "l lb" },
      { "name": "cheese", "amount": 1, "measurement": "cup" },
      { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
      { "name": "Tomatoes", "amount": 2, "measurement": "large"},
      { "name": "Tortillas", "amount": 3, "measurement": "med" }
    ],
    "steps": [
      "Cook the Fish on the Grill until Hot",
      "Place the fish on the 3 tortillas",
      "Top them with lettuce, tomatoes, and cheese"
    ]
  }
]


ReactDOM.render(
	<MyComponent />,
	document.getElementById('root')
)

// ReactDOM.render(
//   <Menu title="ABC" recipes={data} />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <AddColorForm />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <Server />,
//   document.getElementById('root')
// )

// ReactDOM.render(
//   <MemberList count={5}/>,
//   document.getElementById('root')
// )
