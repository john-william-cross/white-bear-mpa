import actions from "../actions";

export default function queue(queue = [], action) {
   //action has two things associate with it: action.payload, action.type
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         console.log("FIRED STORED QUEUED CARDS");
         queue.cards = action.payload;
         return queue; //what's the action payload in ReviewImagery.js? res.data, which is our array of data
      case actions.UPDATE_INDEX_OF_CURRENT_CARD:
         queue.index = queue.index + 1;
         return queue;
      default:
         return queue;
   }
}
