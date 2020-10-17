import React from "react";

export default function ReviewAnswer() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-12 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2 col-md-10 offset-md-1">
               {/* in the line above, the  row has a width of 6; the offset of 3 puts 3 empty columns
          on both sides of the content, effectively centering it//// mx-auto also works--> */}
               <img
                  src="/icons/logo-app.svg"
                  width="32px"
                  alt="White Bear logo"
               />
               <h3 className="d-inline text-brand text-dark">White Bear</h3>
               <a href="/index.html" className="btn btn-link float-right">
                  Log out
               </a>
               <div className="clearfix"></div>
               {/* <!-- <div className="clearfix"></div> this is one option to clear floats--> */}

               <div
                  className="btn-group d-flex mt-1 mb-5"
                  role="navigation"
                  aria-label="navigation"
               >
                  {/* <!-- in div className above, role and aria-label are for screen-readers --> */}
                  <a href="/create-answer.html" className="btn btn-secondary">
                     Create new
                  </a>

                  <a
                     href="/review-imagery.html"
                     className="btn btn-secondary tab-separator tab-active"
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

               <div className="card">
                  <div className="card-body bg-primary lead">
                     Far far away, behind the word mountains, far from the
                     countries Vokalia and Consonantia, there live the blind
                     texts. Separated they live in Bookmarksgrove right at the
                     coast of the Semantics, a large.
                  </div>
               </div>

               <div className="card mb-5">
                  <div className="card-body bg-secondary lead">
                     One morning, when Gregor Samsa woke from troubled dreams,
                     he found himself transformed in his bed into a horrible
                     vermin. He lay on his armour-like back, and if he lifted
                     his head a little he could se
                  </div>
               </div>

               <a href="/edit.html" className="btn btn-link">
                  Edit
               </a>
               <div className="float-right">
                  <a
                     href="/review-empty.html"
                     className="btn btn-outline-primary"
                  >
                     Needs work
                  </a>
                  <a href="/review-empty.html" className="btn btn-primary ml-4">
                     <img
                        src="icons/thumbs-up.svg"
                        width="20px"
                        style={{ marginBottom: "5px", marginRight: "4px" }}
                        alt=""
                     />
                     Got it
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
}
