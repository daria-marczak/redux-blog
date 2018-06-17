import { FETCH_POSTS, CREATE_POST, FETCH_POST, DELETE_POST } from "../actions";
import _ from "lodash";

// Lodash actually transfers an array into an object taking in a prop as a key

export default function(state= {}, action) {
  
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); 
    case FETCH_POST:
      return { ...state, [action.payload.data.id]: action.payload.data} 
    case DELETE_POST:
      return _.omit(state, action.payload);
    default:
      return state;
  }
}