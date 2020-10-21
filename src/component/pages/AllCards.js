import React from "react";
import AppTemplate from "../ui/AppTemplate";
import memoryCards from "../../mock-data/memory-cards";
import MemoryCard from "../ui/MemoryCard";
const memoryCard = memoryCards[2];

export default function AllCards() {
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
               </select>
            </div>
         </div>

         <MemoryCard />
      </AppTemplate>
   );
}
