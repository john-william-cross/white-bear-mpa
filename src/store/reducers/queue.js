import actions from "../actions";

export default function queue(queue = [], action) {
   //action has two things associate with it: action.payload, action.type
   switch (action.type) {
      case actions.STORE_QUEUED_CARDS:
         queue.cards = action.payload;
         return queue; //what's the action payload in ReviewImagery.js? res.data, which is our array of data
      default:
         return queue;
   }
}
