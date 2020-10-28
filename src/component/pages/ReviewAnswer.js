import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
import axios from "axios";

const memoryCard = memoryCards[3];

export default class ReviewAnswer extends React.Component {
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
               <Link to="/review-imagery" className="btn btn-primary ml-4">
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
}
