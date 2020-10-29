import actions from "../actions";

export default function queue(queue = {}, action) {
   //action has two things associate with it: action.payload, action.type
   let newQueue = { ...queue };

   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         newQueue.cards = action.payload;
         return newQueue; //what's the action payload in ReviewImagery.js? res.data, which is our array of data
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         newQueue.index += 1;
         return newQueue;
      default:
         return queue;
   }
}
