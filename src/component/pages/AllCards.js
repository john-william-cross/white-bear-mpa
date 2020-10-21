import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";
import memoryCards from "../../mock-data/memory-cards";
const memoryCard = memoryCards[2];

export default function AllCards() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <div className="row my-4">
            <div className="col-8">
               <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Search for a word"
               />
            </div>
            <div className="col-4">
               <button className="btn btn-primary btn-block btn-sm">
                  Search
               </button>
            </div>
         </div>

         <div className="row my-4 no-gutters">
            <div className="col-4 text-muted mt-1">
               <p>Sort cards by</p>
            </div>
            <div className="col-8">
               <select className="form-control form-control-sm">
                  <option>Most recent</option>
                  <option>Oldest</option>
                  <option>Hardest</option>
                  <option>Easiest</option>
               </select>
            </div>
         </div>

         <div className="d-flex align-items-start mb-5">
            <div className="app-card">
               <div className="card">
                  <div className="card-body bg-primary">
                     {memoryCard.imagery}
                  </div>
               </div>

               <div className="card">
                  <div className="card-body bg-secondary">
                     {memoryCard.answer}
                  </div>
               </div>
            </div>

            <Link to="/edit" className="btn btn-link ml-4 d-flex mt-n2">
               <img
                  src={editIcon}
                  alt=""
                  className="d-inline"
                  style={{ marginTop: "2px", marginRight: "8px" }}
                  width="20px"
               />
               Edit
            </Link>
         </div>

         <div className="d-flex align-items-start mb-5">
            <div className="app-card">
               <div className="card">
                  <div className="card-body bg-primary">
                     The European languages are members of the same family.
                     Their separate existence is a myth. For science, music,
                     sport, etc, Europe uses the same vocabulary. The languages
                     only differ in their grammar, their pronunciation and their
                     most common words. Everyone realizes why a new common
                     language would b
                  </div>
               </div>

               <div className="card">
                  <div className="card-body bg-secondary">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could se
                  </div>
               </div>
            </div>

            <Link to="/edit" className="btn btn-link ml-4 d-flex mt-n2">
               <img
                  src={editIcon}
                  className="d-inline"
                  alt=""
                  style={{
                     marginTop: "2px",
                     marginRight: "8px",
                  }}
                  width="20px"
               />
               Edit
            </Link>
         </div>
      </AppTemplate>
   );
}
