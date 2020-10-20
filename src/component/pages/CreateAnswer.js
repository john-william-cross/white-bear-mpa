import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import { Link } from "react-router-dom";

export default function CreateAnswer() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <p className="text-center lead text-muted my-2">Add an answer</p>
         <div className="card">
            <div className="card-body bg-primary lead" id="create-answer-input">
               <textarea rows="11" className="d-md-none" autoFocus></textarea>

               {/* <!-- in the line below, "d-none d-md-block" means that it will
                        not disply the 6 rows unless it is smaller than a medium screen --> */}
               <textarea
                  rows="6"
                  id="create-answer-input"
                  className="d-none d-md-block"
                  autoFocus
               ></textarea>
            </div>
         </div>

         <p className="float-right mt-2 mb-5 text-muted">
            <span className="text-danger" id="create-answer-char-count">
               0
            </span>
            /240
         </p>
         <div className="clearfix"></div>

         <Link
            to="/create-imagery"
            id="click-next"
            className="disabled btn btn-lg btn-outline-primary float-right"
         >
            Next
         </Link>
      </AppTemplate>
   );
}
