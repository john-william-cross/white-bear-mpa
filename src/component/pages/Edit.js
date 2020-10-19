import React from "react";
import Header from "../ui/Header";

export default function Edit() {
   return (
      <>
         <Header />;
         <div class="container">
            <div class="row">
               <div class="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
                  <div
                     class="btn-group d-flex mt-1"
                     role="navigation"
                     aria-label="navigation"
                  >
                     {/* <!-- in div class above, role and aria-label are for screen-readers --> */}
                     <a href="/create-answer.html" class="btn btn-secondary">
                        Create new
                     </a>

                     <a
                        href="/review-imagery.html"
                        class="btn btn-secondary tab-separator"
                     >
                        Review
                     </a>

                     <a
                        href="/all-cards.html"
                        class="btn btn-secondary tab-separator tab-active"
                     >
                        All cards
                     </a>
                  </div>

                  <p class="text-center lead text-muted my-2">Edit card</p>
                  <div class="align-items-start mb-5">
                     <div class="app-card">
                        <div class="card">
                           <div
                              class="card-body bg-primary"
                              id="edit-card-char-count-top-of-card"
                           >
                              <textarea
                                 rows="6"
                                 id="edit-input-top-card"
                                 autofocus
                              ></textarea>
                           </div>
                        </div>

                        <div class="card">
                           <div
                              class="card-body bg-secondary"
                              id="edit-card-char-count-bottom-of-card"
                           >
                              <textarea
                                 rows="6"
                                 id="edit-input-bottom-card"
                                 autofocus
                              ></textarea>
                           </div>
                        </div>

                        <p class="float-right mt-2 mb-5 text-muted">
                           Top:&nbsp;
                           <span id="edit-top-card-char-count">0</span>/240
                           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Bottom:&nbsp;
                           <span id="edit-bottom-card-char-count">0</span>/240
                        </p>

                        <div class="clearfix"></div>
                     </div>
                  </div>

                  <div class="mt-n5">
                     <a href="/all-cards.html" class="btn btn-link mb-5">
                        Discard changes
                     </a>
                     <a
                        href="/all-cards.html"
                        class="disabled btn btn-primary btn-lg float-right"
                        id="save-card"
                     >
                        <img
                           src="icons/save.svg"
                           width="20px"
                           style="
                           margin-bottom: 3px;
                           margin-right: 4px;
                           margin-left: -5px;
                        "
                        />
                        Save
                     </a>
                  </div>
                  <p class="text-center lead text-muted my-2 mb-4">
                     Card properties
                  </p>

                  <div class="row mb-1">
                     <div class="col-4">
                        <p class="text-muted">Created on:</p>
                     </div>
                     <div class="col-4">
                        <p>Dec. 12, 2019</p>
                     </div>
                  </div>
                  <div class="row mb-1">
                     <div class="col-4">
                        <p class="text-muted">Last attempt:</p>
                     </div>
                     <div class="col-4">
                        <p>Dec. 12, 2019</p>
                     </div>
                  </div>
                  <div class="row mb-1">
                     <div class="col-4">
                        <p class="text-muted">Next attempt:</p>
                     </div>
                     <div class="col-4">
                        <p>Dec. 12, 2019</p>
                     </div>
                  </div>
                  <div class="row mb-1">
                     <div class="col-4">
                        <p class="text-muted">Consecutives:</p>
                     </div>
                     <div class="col-4">
                        <p>8</p>
                     </div>
                  </div>

                  <div class="custom-control custom-checkbox mt-4">
                     <input
                        type="checkbox"
                        class="custom-control-input"
                        id="show-delete-button"
                     />
                     <label
                        class="custom-control-label text-muted"
                        for="show-delete-button"
                     >
                        Show delete button
                     </label>
                  </div>
                  <button
                     class="btn btn-lg btn-outline-danger mt-3 d-none"
                     id="delete-this-card"
                  >
                     Delete this card
                  </button>
               </div>
            </div>
         </div>
      </>
   );
}
