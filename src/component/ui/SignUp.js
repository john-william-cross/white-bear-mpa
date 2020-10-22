import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";

//functions go in react classes
export default class SignUp extends React.Component {
   //we can set the state in constructor
   constructor(props) {
      super(props);
      console.log("In a new class component!");
      this.state = {
         isDisplayingInputs: false,
         emailError: "",
         passwordError: "",
         hasEmailError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   validateAndCreateUser() {
      console.log(`validate me`);
      const emailInput = document.getElementById("email-input").value;
      console.log(emailInput);
      const lowerCasedEmailInput = emailInput.toLowerCase();
      console.log(lowerCasedEmailInput);

      // eslint-disable-next-line
      const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (emailInput === "")
         this.setState({
            emailError: "Please enter your email address.",
            hasEmailError: true,
         });
      else if (emailRegex.test(lowerCasedEmailInput) === false) {
         console.log("not a valid email");
         this.setState({
            emailError: "Please enter a valid email address.",
            hasEmailError: true,
         });
      } else {
         this.setState({ emailError: "", hasEmailError: false });
      }
   }

   render() {
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

                        {!this.state.isDisplayingInputs && (
                           <Link
                              className="sign-up-prompt btn btn-block btn-success btn-sm mt-4"
                              onClick={() => {
                                 this.showInputs();
                              }}
                           >
                              Sign up
                           </Link>
                        )}
                     </div>
                     <div className="email-and-create-password ">
                        {this.state.isDisplayingInputs && (
                           <>
                              <p className="sign-up mt-1 mb-3">
                                 Let's get you signed up.
                              </p>
                              <p className="lead text-muted mt-2">
                                 Email address
                              </p>

                              <input
                                 id="email-input"
                                 className={classnames({
                                    "form-control": true,
                                    "mb-2": true,
                                    "is-invalid": this.state.emailError,
                                 })}
                                 type="email"
                              />
                              {this.state.hasEmailError && (
                                 <p className="text-danger">
                                    {this.state.emailError}
                                 </p>
                              )}
                              <p
                                 className="text-danger mb-4"
                                 id="sign-up-email-error"
                              ></p>
                              <p className="lead text-muted">
                                 Create a password
                              </p>
                              <p className="lead text-muted"></p>
                              <input
                                 id="password-input"
                                 className="form-control test"
                                 type="password"
                              />
                              <p
                                 className="text-danger"
                                 id="sign-up-password-error"
                              ></p>

                              <button
                                 to="create-answer"
                                 className="btn btn-block btn-success btn-lg mt-4"
                                 onClick={() => {
                                    this.validateAndCreateUser();
                                 }}
                                 id="lets-go-button"
                              >
                                 Let's go!
                              </button>
                           </>
                        )}
                     </div>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
