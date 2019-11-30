import * as ActionTypes from "../actionTypes";
/**Based on Action Types and Payload we are changing the reducer state */
const initialState = {
  searchResultList: []
}

export default function launchReducer(state = initialState, action) {
  switch (action.type) {

    case ActionTypes.LAUNCH_ACTION:
    console.log(action.payload.launches);
      return {
        ...state,
        searchResultList: action.payload.launches
      };
    default:
      return state;
  }
}
