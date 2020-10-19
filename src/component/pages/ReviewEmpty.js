import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <p className="text-center lead text-muted my-2">Outs of cards</p>
         <div className="mt-4"></div>
         <a href="/review-answer.html" className="btn btn-link">
            Previous card
         </a>
         <div className="float-right">
            <a href="/review-imagery.html" className="btn btn-outline-primary">
               Get more cards
            </a>
         </div>
      </AppTemplate>
   );
}
