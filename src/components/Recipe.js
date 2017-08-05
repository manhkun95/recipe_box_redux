import React from 'react';

class Recipe extends React.Component {
  constructor(props){
    super(props);
  }
  deleteRecipe(){
    this.props.delete(this.props.id);
  }

  editRecipe(){
    this.props.edit(this.props.id, 'Edit Recipe');
  }

  toggle() {
    let recipeInfo = `recipeInfo${this.props.id}`
    var ul = document.getElementById(recipeInfo);
    let temp = ul.style.display;
    var classRecipeInfo = document.getElementsByClassName("recipeInfo");
    for(let i = 0; i < classRecipeInfo.length; i++){
      classRecipeInfo[i].style.display = "none"
    }
    ul.style.display = (temp == "initial") ? "none" : "initial";

  }

  render() {
    let list = this.props.ingredients;
    let items = list.split(",");
    let recipeInfo = `recipeInfo${this.props.id}`
    return (
    	<div>
        <h3 className = "padding text-success bg-info"><a id = "title" href = '#' onClick={this.toggle.bind(this)}>{this.props.recipeName}</a></h3>
        <div id = {recipeInfo} className = "recipeInfo">
          <ul className="list-group">
            {
              items.map(
                (item, id) =>
                <li className="list-group-item"  key = {id}>{item}</li>
              )
            }
          </ul>
          <button type="button" className = "btn btn-danger" onClick = {this.deleteRecipe.bind(this)}>Delete</button>
          &nbsp;<button type="button" className = "btn btn-default"  data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" onClick = {this.editRecipe.bind(this)} >Edit</button>
      	</div>
      </div>
    )
  }
}



export default Recipe
