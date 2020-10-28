import actions from "../actions";

export default function currentUser(state = {}, action) {
   //every action has an action.type and action.payload
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return {};
      default:
         return state;
   }
}
