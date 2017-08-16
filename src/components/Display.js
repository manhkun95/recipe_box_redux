import React from 'react';
import Recipe from './Recipe'
import MyModal from './MyModal'
import {v4} from 'uuid'
import {addRecipe} from '../actions'
import {connect} from 'react-redux'

class Display extends React.Component {
  render() {
    return (
    	<div className = "container">
        <ul className="list-group">
          {
            this.props.recipes.map((recipe)=>
              <li className="list-group-item"  key = {recipe.id}><Recipe recipe = {recipe} /></li>
            )
          }
        </ul>
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" onClick = {()=>this.editRecipeModal(-1, 'Add a Recipe')}>Add New Recipe</button>
        <MyModal />
    	</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: (name, ingredients) => {
      dispatch(addRecipe(name, ingredients));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Display)
