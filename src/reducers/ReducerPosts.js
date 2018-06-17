import { FETCH_POSTS } from "../actions";
import _ from "lodash";

// Lodash actually transfers an array into an object taking in a prop as a key

export default function(state= {}, action) {
  
  switch (action.type) {
    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, "id"); 
    default:
      return state;
  }
}