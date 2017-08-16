import C from '../constants'

export const recipes  = (state = [], action) => {
  switch (action.type){
    case C.ADD_RECIPE:
      return [
        ...state, recipe({}, action)
      ]
    case C.EDIT_RECIPE:
      return state.map(
        c => recipe(c, action)
      )
    case C.REMOVE_RECIPE:
      return state.filter(
        c => c.id !== action.id
      )
    default:
      return state
  }
}

export const recipe = (state = {}, action) => {
  switch (action.type) {
    case C.ADD_RECIPE:
      return {
        id: action.id,
        name: action.name,
        ingredients: action.ingredients
      }
    case C.EDIT_RECIPE:
      return (state.id !== action.id) ?
          state:
          {
            ...state,
            name: action.name,
            ingredients: action.ingredients
          }
    default:
        return state
  }
}
