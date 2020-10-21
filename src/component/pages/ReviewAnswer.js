import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";

const memoryCard = memoryCards[3];

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         <div className="card">
            <div className="card-body bg-primary lead">
               {memoryCard.imagery}
            </div>
         </div>

         <div className="card mb-5">
            <div className="card-body bg-secondary lead">
               {memoryCard.answer}
            </div>
         </div>

         <Link to="/edit" className="btn btn-link">
            Edit
         </Link>
         <div className="float-right">
            <Link to="/review-empty" className="btn btn-outline-primary">
               Needs work
            </Link>
            <Link to="/review-empty" className="btn btn-primary ml-4">
               <img
                  src={thumbsUpIcon}
                  width="20px"
                  style={{ marginBottom: "5px", marginRight: "8px" }}
                  alt=""
               />
               Got it
            </Link>
         </div>
      </AppTemplate>
   );
}
