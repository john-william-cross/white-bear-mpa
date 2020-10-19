import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewImagery() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="mb-5"></div>

         <div class="card mb-5">
            <div class="card-body bg-primary lead">
               Far far away, behind the word mountains, far from the countries
               Vokalia and Consonantia, there live the blind texts. Separated
               they live in Bookmarksgrove right at the coast of the Semantics,
               a large.
            </div>
         </div>

         <button class="btn btn-link">Previous card</button>
         <div class="float-right">
            <a
               onclick="location.href='review-answer.html'"
               type="button"
               class="btn btn-outline-primary"
            >
               Show Answer
            </a>
         </div>
      </AppTemplate>
   );
}
