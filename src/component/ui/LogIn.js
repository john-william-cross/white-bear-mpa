import React from "react";
import { Link } from "react-router-dom";

export default function LogIn() {
   return (
      <div className="col-12 col-md-6">
         <div className="card ml-md-8">
            <div className="card-body text-dark font-sans-serif">
               <h2 className="font-serif">Welcome Back</h2>
               <p>Log in with your email address and password.</p>
               <p className="lead text-muted mt-2">Email address</p>
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
   );
}
