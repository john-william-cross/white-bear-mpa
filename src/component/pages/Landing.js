import React from "react";
import appLogo from "../../img/logo-landing.png";
import { Link } from "react-router-dom";

export default function Landing() {
   return (
      <>
         <div className="background-image">
            <div className="container">
               <div className="row">
                  <div className="col-12 col-xl-6 col-lg-8 col-md-10 mt-7 mb-7">
                     <img
                        className="landing-page-logo mt-n6"
                        src={appLogo}
                        alt="White Bear Logo"
                     />
                     <h1 className="landing-page-title d-inline">White Bear</h1>
                  </div>

                  <div className="row mx-auto">
                     <div className="col-12 col-md-6 mb-8">
                        <div className="card">
                           <div className="card-body text-dark font-sans-serif">
                              <div className="landing-page">
                                 <div className="show-sign-up-info">
                                    <h2 className="font-serif">
                                       Nice to meet you
                                    </h2>
                                    <p className="mt-2 mb-2">
                                       Sign up for White Bear. Free forever.
                                    </p>

                                    <Link className="sign-up-prompt btn btn-block btn-success btn-sm mt-4">
                                       Sign up
                                    </Link>
                                 </div>
                                 <div className="email-and-create-password ">
                                    <h2 className="font-serif">
                                       Nice to meet you
                                    </h2>
                                    <p className="mt-2 mb-2">
                                       Sign up for White Bear. Free forever.
                                    </p>
                                    <p className="sign-up mt-1 mb-3">
                                       Let's get you signed up.
                                    </p>
                                    <p className="lead text-muted mt-2">
                                       Email address
                                    </p>
                                    <input
                                       id="sign-up-email-input"
                                       className="form-control"
                                       type="text"
                                    />
                                    <p
                                       className="text-danger mb-4"
                                       id="sign-up-email-error"
                                    ></p>
                                    <p className="lead text-muted">
                                       Create a password
                                    </p>
                                    <p className="lead text-muted"></p>
                                    <input
                                       id="sign-up-password-input"
                                       className="form-control test"
                                       type="password"
                                    />
                                    <p
                                       className="text-danger"
                                       id="sign-up-password-error"
                                    ></p>

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

                     <div className="col-12 col-md-6">
                        <div className="card ml-md-8">
                           <div className="card-body text-dark font-sans-serif">
                              <h2 className="font-serif">Welcome Back</h2>
                              <p>
                                 Log in with your email address and password.
                              </p>
                              <p className="lead text-muted mt-2">
                                 Email address
                              </p>
                              <input
                                 className="form-control"
                                 id="return-user-email"
                                 type="text"
                                 placeholder=""
                              />
                              <p className="lead text-muted mt-2">Password</p>
                              <input
                                 className="form-control"
                                 id="return-user-password"
                                 type="password"
                                 placeholder=""
                              />

                              <Link
                                 to="create-answer"
                                 id="login-button"
                                 className="float-right btn btn-success btn-sm mt-2"
                              >
                                 Log in
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
