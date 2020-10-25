import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";
import orderBy from "lodash/orderBy";
export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: '[["createdAt"], ["desc"]]',
         memoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };
   }

   /* 

EASY: 
orderBy([totalSuccessfulAttempts, createdAt], [descending, descending])

HARD: 
orderBy([totalSuccessfulAttempts, createdAt], [ascending, ascending])

MOST RECENT
orderBy(createdAt, descending)

OLDEST
orderBy(createdAt, ascending)
*/

   setMemoryCardsOrder(e) {
      console.log(`you've made a change!`); //41 minute mark is where things behave differently
      const newOrder = e.target.value;
      console.log(newOrder);
      const copyOfMemoryCards = [...this.state.memoryCards];
      const toJson = JSON.parse(newOrder);
      console.log(...toJson);
      const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
      console.log(orderedMemoryCards);
      this.setState({ order: newOrder, memoryCards: orderedMemoryCards });
   }

   render() {
      return (
         <AppTemplate>
            <div className="row my-4">
               <div className="col-8">
                  <input
                     className="form-control form-control-sm"
                     type="text"
                     placeholder="Search for a word"
                  />
               </div>
               <div className="col-4">
                  <button className="btn btn-primary btn-block btn-sm">
                     Search
                  </button>
               </div>
            </div>

            <div className="row my-4 no-gutters">
               <div className="col-4 text-muted mt-1">
                  <p>Sort cards by</p>
               </div>
               <div className="col-8">
                  <select
                     value={this.state.order}
                     className="form-control form-control-sm"
                     onChange={(e) => this.setMemoryCardsOrder(e)}
                  >
                     <option value='[["createdAt"], ["desc"]]'>
                        Most recent
                     </option>
                     <option value='[["createdAt"], ["asc"]]'>Oldest</option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["asc", "asc"]]'>
                        Hardest
                     </option>
                     <option value='[["totalSuccessfulAttempts", "createdAt"], ["desc", "desc"]]'>
                        Easiest
                     </option>
                     {/* <option>Hardest</option>
                  <option>Easiest</option> */}
                  </select>
               </div>
            </div>

            {this.state.memoryCards.map((memoryCard) => {
               return (
                  <MemoryCard
                     answer={memoryCard.answer}
                     imagery={memoryCard.imagery}
                     key={memoryCard.id}
                  />
               );
            })}
         </AppTemplate>
      );
   }
}
