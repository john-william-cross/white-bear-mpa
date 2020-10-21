import React from "react";
import thumbsUpIcon from "../../icons/thumbs-up.svg";

import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewAnswer() {
   return (
      <AppTemplate>
         <div className="mb-5"></div>
         <div className="card">
            <div className="card-body bg-primary lead">
               Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts. Separated
               they live in Bookmarksgrove right at the coast of the Semantics,
               a large.
            </div>
         </div>

         <div className="card mb-5">
            <div className="card-body bg-secondary lead">
               One morning, when Gregor Samsa woke from troubled dreams, he
               found himself transformed in his bed into a horrible vermin. He
               lay on his armour-like back, and if he lifted his head a little
               he could se
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
