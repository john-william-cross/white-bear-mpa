import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="mb-5"></div>

         <div className="card mb-5">
            <div className="card-body bg-primary lead">
               Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts. Separated
               they live in Bookmarksgrove right at the coast of the Semantics,
               a large.
            </div>
         </div>

         <button className="btn btn-link">Previous card</button>
         <div className="float-right">
            <Link
               to="review-answer"
               //  onClick="location.href='review-imagery.html'"
               type="button"
               className="btn btn-outline-primary"
            >
               Show Answer
            </Link>
         </div>
      </AppTemplate>
   );
}
