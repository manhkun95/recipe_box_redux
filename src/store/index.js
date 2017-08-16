import { createStore, combineReducers, applyMiddleware } from 'redux'
import { recipe,recipes } from './reducers'

import { createLogger } from 'redux-logger'

let console = window.console
//
// const myLogger = (store) => (next) => (action) => {
//   console.log("Logged action: ", action);
//   next(action);
// };

let initState = {recipes:[{id: "b087ee4d-9232-4fd6-af61-6346f0debab2", name: "Recipe1", ingredients: "What, to, can, do, mine, you, i, make"}]}

const storeFactory = () =>
    applyMiddleware()(createStore)(
        combineReducers({recipes}), initState, applyMiddleware(createLogger())
    )

export default storeFactory
