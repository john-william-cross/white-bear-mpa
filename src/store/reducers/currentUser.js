import actions from "../actions";

export default function currentUser(currentUser = {}, action) {
   //every action has an action.type and action.payload
   //let newCurrentUser = { ...currentUser };
   switch (action.type) {
      case actions.STORE_CURRENT_USER:
         return action.payload;
      default:
         return currentUser;
   }
}
