import React from 'react';
import {removeRecipe} from '../actions'
import {connect} from 'react-redux'

class Recipe extends React.Component {
  constructor(props){
    super(props);
  }

  toggle() {
    let recipeInfo = `recipeInfo${this.props.recipe.id}`
    var ul = document.getElementById(recipeInfo);
    let temp = ul.style.display;
    var classRecipeInfo = document.getElementsByClassName("recipeInfo");
    for(let i = 0; i < classRecipeInfo.length; i++){
      classRecipeInfo[i].style.display = "none"
    }
    ul.style.display = (temp == "initial") ? "none" : "initial";

  }

  render() {
    let list = this.props.recipe.ingredients;
    let items = list.split(",");
    let recipeInfo = `recipeInfo${this.props.recipe.id}`
    return (
    	<div>
        <h3 className = "padding text-success bg-info"><a id = "title" href = '#' onClick={this.toggle.bind(this)}>{this.props.recipe.name}</a></h3>
        <div id = {recipeInfo} className = "recipeInfo">
          <ul className="list-group">
            {
              items.map(
                (item, id) =>
                <li className="list-group-item"  key = {id}>{item}</li>
              )
            }
          </ul>
          <button type="button" className = "btn btn-danger" onClick = {()=>this.props.deleteRecipe(this.props.recipe.id)}>Delete</button>
          &nbsp;<button type="button" className = "btn btn-default"  data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false">Edit</button>
      	</div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteRecipe: (id) => dispatch(removeRecipe(id))
  }
}

export default connect(null,mapDispatchToProps)(Recipe)
