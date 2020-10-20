import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function ReviewEmpty() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <p className="text-center lead text-muted my-2">Outs of cards</p>
         <div className="mt-4"></div>
         <Link to="/review-answer" className="btn btn-link">
            Previous card
         </Link>
         <div className="float-right">
            <Link to="/review-imagery" className="btn btn-outline-primary">
               Get more cards
            </Link>
         </div>
      </AppTemplate>
   );
}
