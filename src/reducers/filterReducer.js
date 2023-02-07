export const StatusFilters = {
  All: 'all',
  Active: 'active',
  Completed: 'completed'
}

const initialState = {
  status: StatusFilters.All,
  colors: []
}

export default function filterReducer (state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged' : {
      return {
        ...state,
        status: action.payload
      }
    }
    case 'filters/colorFilterChanged' : {
      const { color, changeAction } = action.payload
      const { colors } = state

      switch (changeAction) {
        case 'checked': {
          // If color is already on filter don't change the state
          if (colors.includes(color)) {
            return state
          }
          return {
            ...state,
            colors: state.colors.concat(color)
          }
        }
        case 'unchecked':{
          return {
            ...state,
            colors: state.colors.filter((colors) => colors !== color)
          }
        }
      }
    }
    default: return state
  }
}

// ACTION CREATOR
export const statusFilterChanged = (status) => {
  return {
    type: 'filters/statusFilterChanged',
    payload: status
  }
}

export const colorFilterChanged = (color, changeAction) => {
  return {
    type: 'filters/colorFilterChanged',
    payload: { color, changeAction }
  }
}
