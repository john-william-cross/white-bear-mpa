import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
   return (
      <div className="col-12 col-md-6 mb-8">
         <div className="card">
            <div className="card-body text-dark font-sans-serif">
               <div className="landing-page">
                  <div className="show-sign-up-info">
                     <h2 className="font-serif">Nice to meet you</h2>
                     <p className="mt-2 mb-2">
                        Sign up for White Bear. Free forever.
                     </p>

                     <Link className="sign-up-prompt btn btn-block btn-success btn-sm mt-4">
                        Sign up
                     </Link>
                  </div>
                  <div className="email-and-create-password ">
                     <h2 className="font-serif">Nice to meet you</h2>
                     <p className="mt-2 mb-2">
                        Sign up for White Bear. Free forever.
                     </p>
                     <p className="sign-up mt-1 mb-3">
                        Let's get you signed up.
                     </p>
                     <p className="lead text-muted mt-2">Email address</p>
                     <input
                        id="sign-up-email-input"
                        className="form-control"
                        type="text"
                     />
                     <p
                        className="text-danger mb-4"
                        id="sign-up-email-error"
                     ></p>
                     <p className="lead text-muted">Create a password</p>
                     <p className="lead text-muted"></p>
                     <input
                        id="sign-up-password-input"
                        className="form-control test"
                        type="password"
                     />
                     <p className="text-danger" id="sign-up-password-error"></p>

                     <button
                        className="btn btn-block btn-success btn-lg mt-4"
                        id="lets-go-button"
                     >
                        Let's go!
                     </button>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}
