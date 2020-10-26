import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";
import orderBy from "lodash/orderBy";
export default class AllCards extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         order: [["createdAt"], ["desc"]],
         displayedMemoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
         allMemoryCards: orderBy(memoryCards, ["createdAt"], ["desc"]),
      };
   }

   filterByInput() {
      const input = document.getElementById("search-input").value;
      const lowerCasedInput = input.toLowerCase();
      console.log(lowerCasedInput);
      const copyOfAllMemoryCards = [...this.state.allMemoryCards];
      const filteredMemoryCards = copyOfAllMemoryCards.filter((memoryCard) => {
         const lowerCasedImagery = memoryCard.imagery.toLowerCase();
         const lowerCasedAnswer = memoryCard.answer.toLowerCase();
         if (
            lowerCasedImagery.includes(lowerCasedInput) ||
            lowerCasedAnswer.includes(lowerCasedInput)
         ) {
            console.log(`match`);
            return true;
         } else return false;
      });
      this.setState({ displayedMemoryCards: filteredMemoryCards }, () => {
         this.setMemoryCards();
      });
   }

   // comment
   setOrder(e) {
      const newOrder = e.target.value;
      console.log(newOrder);
      this.setState({ order: newOrder }, () => {
         this.setMemoryCards();
      });
   }

   setMemoryCards() {
      console.log("setting memory cards");
      const copyOfDisplayedMemoryCards = [...this.state.displayedMemoryCards];
      const toJson = JSON.parse(this.state.order);
      console.log(...toJson);
      const orderedMemoryCards = orderBy(copyOfDisplayedMemoryCards, ...toJson);
      console.log(orderedMemoryCards);
      this.setState({ displayedMemoryCards: orderedMemoryCards });
   }

   // setMemoryCardsOrder(e) {
   //    console.log(`you've made a change!`); //41 minute mark is where things behave differently
   //    const newOrder = e.target.value;
   //    console.log(newOrder);
   //    const copyOfMemoryCards = [...this.state.memoryCards];
   //    const toJson = JSON.parse(newOrder);
   //    console.log(...toJson);
   //    const orderedMemoryCards = orderBy(copyOfMemoryCards, ...toJson);
   //    console.log(orderedMemoryCards);
   //    this.setState({ order: newOrder, memoryCards: orderedMemoryCards });
   // }

   render() {
      return (
         <AppTemplate>
            <div className="row my-4">
               <div className="col-8">
                  <input
                     className="form-control form-control-sm"
                     type="text"
                     placeholder="Search for a word"
                     id="search-input"
                  />
               </div>
               <div className="col-4">
                  <button
                     className="btn btn-primary btn-block btn-sm"
                     onClick={() => this.filterByInput()}
                  >
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
                     onChange={(e) => this.setOrder(e)}
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
                  </select>
               </div>
            </div>

            {this.state.displayedMemoryCards.map((memoryCard) => {
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
