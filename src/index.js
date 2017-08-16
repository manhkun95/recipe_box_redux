import React from 'react';
import ReactDOM from 'react-dom';
import storeFactory from './store'
import 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Display from './components/Display';
import './recipe_box.css';
import {Provider} from 'react-redux'
import {addRecipe} from './actions'



const store = storeFactory(true)

window.React = React
window.store = store


store.subscribe(()=> console.log("store update",store.getState()));

store.dispatch(addRecipe("Manh", "54656"))


ReactDOM.render(
	<Provider store = {store}>
		<Display />
	</Provider>,
	document.getElementById('root')
)
