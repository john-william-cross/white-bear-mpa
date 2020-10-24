import React from "react";
import classnames from "classnames";
import hash from "object-hash";
import { v4 as getUuid } from "uuid";

export default class LogIn extends React.Component {
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

   async setEmailState(emailInput) {
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

   async validateUser() {
      // is it ok to accept blank password here?
      // should this function be called validateAndCreateUser still?
      const emailInput = document.getElementById("signup-email-input").value;

      await this.setEmailState(emailInput);

      if (this.state.hasEmailError === false) {
         const user = {
            id: getUuid(),
            email: emailInput,
            createdAt: Date.now(),
         };
         console.log(user);
      }
   }

   render() {
      return (
         <div className="col-12 col-md-6">
            <div className="card ml-md-8">
               <div className="card-body text-dark font-sans-serif">
                  <h2 className="font-serif">Welcome Back</h2>
                  <p>Log in with your email address and password.</p>
                  <p className="lead text-muted mt-2">Email address</p>
                  <input
                     id="signup-email-input"
                     className={classnames({
                        "form-control": true,
                        "mb-2": true,
                        lead: true,
                        "is-invalid": this.state.emailError,
                     })}
                     type="email"
                  />
                  {this.state.hasEmailError && (
                     <p className="text-danger">{this.state.emailError}</p>
                  )}
                  <p className="lead text-muted mt-2">Password</p>

                  <input
                     id="signup-password-input"
                     className={classnames({
                        "form-control": true,
                        "text-muted": true,
                        "mt-2": true,
                        lead: true,
                        "is-invalid": this.state.hasPasswordError,
                     })}
                     type="password"
                  />
                  <button
                     to="create-answer"
                     className="float-right btn btn-success btn-sm mt-2"
                     id="login-button"
                     onClick={() => {
                        this.validateUser();
                     }}
                  >
                     Log in
                  </button>
               </div>
            </div>
         </div>
      );
   }
}
