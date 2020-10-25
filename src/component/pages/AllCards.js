import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";

export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {};
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
                  <select className="form-control form-control-sm">
                     <option>Most recent</option>
                     <option>Oldest</option>
                     <option>Hardest</option>
                     <option>Easiest</option>
                     {/* <option>Hardest</option>
                  <option>Easiest</option> */}
                  </select>
               </div>
            </div>

            {memoryCards.map((memoryCard) => {
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
