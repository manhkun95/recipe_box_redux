import React from 'react';
import {addRecipe, editRecipe} from '../actions';
import {connect} from 'react-redux';

class MyModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {recipeName: this.props.recipeName, ingredients: this.props.ingredients,checkOnchange: false}
    this.changeRecipe = this.changeRecipe.bind(this)
    this.changeIngredients = this.changeIngredients.bind(this)

  }

  componentDidMount(){
    this.state.checkOnchange = false;
    this.setState(this.state);
  }

  changeRecipe(event){

    this.state.ingredients = this.state.checkOnchange?this.state.ingredients:this.props.ingredients
    this.setState({recipeName: event.target.value,ingredients: this.state.ingredients,checkOnchange: true});

  }
  changeIngredients(event){

    this.state.recipeName = this.state.checkOnchange?this.state.recipeName:this.props.recipeName
    this.setState({recipeName: this.state.recipeName,ingredients: event.target.value,checkOnchange: true});
  }

  save(){
    if(this.state.checkOnchange){
      let recipe = {type: this.props.type, id: this.props.id, recipeName: this.state.recipeName, ingredients: this.state.ingredients}
      this.props.save(recipe);
      this.reset();
    }
  }

  reset(){
    this.setState({recipeName: this.props.recipeName, ingredients: this.props.ingredients,checkOnchange: false});
  }

  render() {

    return (
      <div className="modal fade" id="myModal" role="dialog">
        <div className="modal-dialog">

          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"  onClick = {this.reset.bind(this)}>&times;</button>
              <h4 className="modal-title">{this.props.type}</h4>
            </div>
            <div className="modal-body">
                <h4 className = "bg-default text-gray text-center">Ingredients</h4>
                <div className="form-group">
                  <label htmlFor="recipeName">Recipe:</label>
                  <input type="text" className="form-control" id="recipeName" value = {this.state.checkOnchange?this.state.recipeName:this.props.recipeName} onChange = {this.changeRecipe} />
                </div>
                <div className="form-group">
                  <label htmlFor="ingredients">Ingredients:</label>
                  <input type="text" className="form-control" id="ingredients" value = {this.state.checkOnchange?this.state.ingredients:this.props.ingredients} onChange= {this.changeIngredients}/>
                </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick = {this.save.bind(this)}>Save</button>
              <button type="button" className="btn btn-default" data-dismiss="modal" onClick = {this.reset.bind(this)}>Cancel</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addRecipe: (id) => dispatch(removeRecipe(id)),
    editRecipe:(id, name, ingredients) => dispatch(editRecipe(id, name, ingredients))
  }
}

export default connect(null, mapDispatchToProps)(MyModal)
