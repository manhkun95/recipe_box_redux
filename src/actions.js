import C from "./constants"
import {v4} from 'uuid'

export const addRecipe = (name, ingredients) =>
      ({
        type: C.ADD_RECIPE,
        id: v4(),
        name,
        ingredients
      })

export const removeRecipe = (id) =>
      ({
        type: C.REMOVE_RECIPE,
        id
      })

export const editRecipe = (id, name, ingredients) =>
      ({
        type: C.EDIT_RECIPE,
        id,
        name,
        ingredients
      })
