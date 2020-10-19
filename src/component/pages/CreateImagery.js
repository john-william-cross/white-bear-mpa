import React from "react";
import saveIcon from "../../icons/save.svg";
import Header from "../ui/Header";

export default function CreateImagery() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               {/* {<!-- in the line above, the  row has a width of 6; the offset of 3 puts 3 empty 
        columns on both sides of the content, effectively centering it//// mx-auto also 
        works-->} */}
               <Header />
               {/* {<!-- <div className
                  ="clearfix"></div> this is one option to clear floats-->} */}
               <div
                  className="btn-group d-flex mt-1"
                  role="navigation"
                  aria-label="navigation"
               >
                  {/* {           <!-- in div className
                      above, role and aria-label are for screen-readers --> */}

                  <a
                     href="/create-answer.html"
                     className="btn btn-secondary tab-active"
                  >
                     Create new
                  </a>
                  <a
                     href="/review-imagery.html"
                     className="btn btn-secondary tab-separator"
                  >
                     Review
                  </a>
                  <a
                     href="/all-cards.html"
                     className="btn btn-secondary tab-separator"
                  >
                     All cards
                  </a>
               </div>
               <p className="text-center lead text-muted my-2">
                  Add memorable imagery
               </p>
               <div className="card">
                  <div className="card-body bg-primary lead">
                     {/* { <!-- in the line below, "d-md-none" means that at a 
                 medium size screen, the 11 rows aren't displayed; once it 
                 gets to medium size, it will stop displaying 11 rows -->

              <!-- in the line below, "d-none d-md-block" means that it will
                 not disply the 6 rows unless it is smaller than a medium screen -->} */}
                     {/* <textarea
                        rows="11"
                        class="d-md-none"
                        autoFocus={true}
                     ></textarea> */}
                     <textarea
                        rows="6"
                        id="create-imagery-input"
                        autoFocus={true}
                     ></textarea>
                  </div>
               </div>
               <div className="card">
                  <div className="card-body bg-secondary lead">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could se
                  </div>
               </div>
               <p className="float-right mt-2 mb-5 text-muted">
                  <span className="text-danger" id="imagery-char-count">
                     0
                  </span>
                  /240
               </p>
               {/* {        <!-- clearfix can fix issues with back-to-back floats --> */}
               <div className="clearfix"></div>
               <button className="btn btn-link" id="back-to-answer-error">
                  Back to answer
               </button>
               <button
                  className="btn btn-primary btn-lg float-right"
                  disabled
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
               </button>
            </div>
         </div>
      </div>
   );
}
