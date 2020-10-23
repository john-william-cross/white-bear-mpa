import React from "react";
import { Link } from "react-router-dom";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

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
         hasPasswordError: false,
      };
   }

   showInputs() {
      this.setState({
         isDisplayingInputs: true,
      });
   }

   setEmailState(emailInput) {
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

   checkHasLocalPart(passwordInput, emailInput) {
      const localPart = emailInput.split("@")[0];
      if (localPart === "") return false;
      else if (localPart.length < 4) return false;
      else return passwordInput.includes(localPart);
   }

   setPasswordState(passwordInput, emailInput) {
      console.log(passwordInput);

      const uniqChars = [...new Set(passwordInput)];
      console.log(uniqChars);

      if (passwordInput === "") {
         this.setState({
            passwordError: "Please create a password.",
            hasPasswordError: true,
         });
      } else if (passwordInput.length < 9) {
         this.setState({
            passwordError: "Your password must be at least 9 characters.",
            hasPasswordError: true,
         });
      } else if (this.checkHasLocalPart(passwordInput, emailInput)) {
         this.setState({
            passwordError:
               "For your safety, your password cannot contain your email address.",
            hasPasswordError: true,
         });
      } else if (uniqChars.length < 3) {
         this.setState({
            passwordError:
               "For your safety, your password must contain at least 3 unique characters.",
            hasPasswordError: true,
         });
      } else {
         this.setState({ passwordError: "", hasPasswordError: false });
      }
   }

   validateAndCreateUser() {
      const emailInput = document.getElementById("signup-email-input").value;
      const passwordInput = document.getElementById("signup-password-input")
         .value;
      this.setEmailState(emailInput);
      this.setPasswordState(passwordInput, emailInput);
      if (
         this.state.hasEmailError === false &&
         this.state.hasPasswordError === false
      ) {
         console.log("VALID!!");
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
                              to=""
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
                                 id="signup-email-input"
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

                              <input
                                 id="signup-password-input"
                                 className={classnames({
                                    "form-control": true,
                                    "is-invalid": this.state.hasPasswordError,
                                 })}
                                 type="password"
                              />
                              {this.state.hasPasswordError && (
                                 <p className="text-danger">
                                    {this.state.passwordError}
                                 </p>
                              )}

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
