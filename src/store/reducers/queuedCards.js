import actions from "../actions";

export default function queuedCards(state = [], action) {
   //action has two things associate with it: action.payload, action.type
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         return action.payload; //
      default:
         return state;
   }
}
