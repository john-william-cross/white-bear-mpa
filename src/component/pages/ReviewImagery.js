import React from "react";

import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";

const memoryCard = memoryCards[3];

export default class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get("https://run.mocky.io/v3/50e1b224-e38f-4e5e-9a83-8764c4b9d77a")
         .then(function (response) {
            // handle success
            console.log(response);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         });
   }

   render() {
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
}
