import React from "react";
import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import AppTemplate from "../ui/AppTemplate";
import saveIcon from "../../icons/save.svg";
import { Link } from "react-router-dom";

export default function Edit() {
   return (
      <AppTemplate>
         <Header />
         <Navigation />
         <p className="text-center lead text-muted my-2">Edit card</p>
         <div className="align-items-start mb-5">
            <div className="app-card">
               <div className="card">
                  <div
                     className="card-body bg-primary"
                     id="edit-card-char-count-top-of-card"
                  >
                     <textarea
                        rows="6"
                        id="edit-input-top-card"
                        autoFocus
                     ></textarea>
                  </div>
               </div>

               <div className="card">
                  <div
                     className="card-body bg-secondary"
                     id="edit-card-char-count-bottom-of-card"
                  >
                     <textarea
                        rows="6"
                        id="edit-input-bottom-card"
                        autoFocus
                     ></textarea>
                  </div>
               </div>

               <p className="float-right mt-2 mb-5 text-muted">
                  Top:&nbsp;
                  <span id="edit-top-card-char-count">0</span>/240
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bottom:&nbsp;
                  <span id="edit-bottom-card-char-count">0</span>/240
               </p>

               <div className="clearfix"></div>
            </div>
         </div>
         <div className="mt-n5">
            <Link to="/all-cards" className="btn btn-link mb-5">
               Discard changes
            </Link>
            <Link
               to="/all-cards"
               className="disabled btn btn-primary btn-lg float-right"
               id="save-card"
            >
               <img
                  src={saveIcon}
                  alt=""
                  width="20px"
                  style={{
                     marginBottom: "3px",
                     marginRight: "4px",
                     marginLeft: "-5px",
                  }}
               />
               Save
            </Link>
         </div>
         <p className="text-center lead text-muted my-2 mb-4">
            Card properties
         </p>
         <div className="row mb-1">
            <div className="col-4">
               <p className="text-muted">Created on:</p>
            </div>
            <div className="col-4">
               <p>Dec. 12, 2019</p>
            </div>
         </div>
         <div className="row mb-1">
            <div className="col-4">
               <p className="text-muted">Last attempt:</p>
            </div>
            <div className="col-4">
               <p>Dec. 12, 2019</p>
            </div>
         </div>
         <div className="row mb-1">
            <div className="col-4">
               <p className="text-muted">Next attempt:</p>
            </div>
            <div className="col-4">
               <p>Dec. 12, 2019</p>
            </div>
         </div>
         <div className="row mb-1">
            <div className="col-4">
               <p className="text-muted">Consecutives:</p>
            </div>
            <div className="col-4">
               <p>8</p>
            </div>
         </div>
         <div className="custom-control custom-checkbox mt-4">
            <input
               type="checkbox"
               className="custom-control-input"
               id="show-delete-button"
            />
            <label
               className="custom-control-label text-muted"
               htmlFor="show-delete-button"
            >
               Show delete button
            </label>
         </div>
         <button
            className="btn btn-lg btn-outline-danger mt-3 d-none"
            id="delete-this-card"
         >
            Delete this card
         </button>
      </AppTemplate>
   );
}
