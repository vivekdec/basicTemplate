import { CONTACT_US, CONTACT_US_SUCCESS, CONTACT_US_ERROR } from "../actions/type"

const defaultState = {
  load: false,
  data: {},
  error: null,
}

export const contactUs = (state = defaultState, action: any) => {
  const response = action.data;
  switch (action.type) {
    case CONTACT_US:
      return {
        ...state,
        load: true
      }
    case CONTACT_US_SUCCESS:
      return { 
        ...state, 
        data: response,
        load: false
      }
    case CONTACT_US_ERROR:
      return { 
        ...state, 
        error: response,
        load: false,
      }
    default:
      return state
  }
}


