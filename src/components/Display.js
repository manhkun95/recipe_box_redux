import React from 'react';
import Recipe from './Recipe'
import MyModal from './MyModal'

class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {listRecipe: [{recipeName: "title", ingredients:"cokk, keer"},{recipeName: "title2", ingredients:"df, asd"}]
                  ,currentModal: {type: 'Edit', id: -1,recipeName:'',ingredients:''}
                };
    this.editRecipeModal = this.editRecipeModal.bind(this)
  }
  deleteRecipe(id){
    this.state.listRecipe.splice(id, 1);
    this.setState(this.state);
  }

  editRecipeModal(id, type){
    if(id != -1){
      let state = this.state.listRecipe[id];
      this.state.currentModal = {...state, type: type, id: id}
    }else{
      this.state.currentModal = {recipeName:'', ingredients:'', type: type, id: id}
    }
    this.setState(this.state)
  }

  addRecipe(name, ingredients){
    this.state.listRecipe.push({recipeName: name, ingredients: ingredients});
    this.setState(this.state)
  }

  editRecipe(id, name, ingredients){
    console.log("ID"+ name);
    this.state.listRecipe[id].recipeName = name;
    this.state.listRecipe[id].ingredients = ingredients ;
    this.setState(this.state)
  }

  save(recipe){
      if(recipe.type == 'Add a Recipe'){
        this.addRecipe(recipe.recipeName, recipe.ingredients)
      }else{
        console.log("ID"+ recipe.id);
        this.editRecipe(recipe.id, recipe.recipeName, recipe.ingredients)
      }
  }



  render() {
    return (
    	<div className = "container">
        <ul className="list-group">
          {
            this.state.listRecipe.map((recipe, id)=>
              <li className="list-group-item"  key = {id}><Recipe edit = {this.editRecipeModal} delete = {this.deleteRecipe.bind(this)} id = {id} {...recipe} /></li>
            )
          }
        </ul>
        <button type="button" className="btn btn-success" data-toggle="modal" data-target="#myModal" data-backdrop="static" data-keyboard="false" onClick = {()=>this.editRecipeModal(-1, 'Add a Recipe')}>Add New Recipe</button>
        <MyModal save = {this.save.bind(this)} type = {this.state.currentModal.type} id = {this.state.currentModal.id} recipeName = {this.state.currentModal.recipeName} ingredients = {this.state.currentModal.ingredients} />
    	</div>
    )
  }
}

export default Display
