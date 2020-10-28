import React from "react";

import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";

//comment for commit

const memoryCard = memoryCards[3];

export default class ReviewImagery extends React.Component {
   constructor(props) {
      super(props);
      axios
         .get(
            "https://raw.githubusercontent.com/john-william-cross/white-bear-mpa/b54bf16d605e58a8e356a74f939fc17e46537480/src/mock-data/memory-cards.json"
         )
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
