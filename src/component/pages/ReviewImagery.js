import React from "react";

import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[3];

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>

         <div className="card mb-5">
            <div className="card-body bg-primary lead">
               {memoryCard.imagery}
            </div>
         </div>

         <Link to="review-answer" className="btn btn-link">
            Previous card
         </Link>
         <div className="float-right">
            <Link
               to="review-answer"
               type="button"
               className="btn btn-outline-primary"
            >
               Show Answer
            </Link>
         </div>
      </AppTemplate>
   );
}
