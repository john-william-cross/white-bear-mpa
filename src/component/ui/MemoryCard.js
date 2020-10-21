import React from "react";
import editIcon from "../../icons/edit.svg";
import { Link } from "react-router-dom";

export default function MemoryCard() {
   return (
      <div className="d-flex align-items-start mb-5">
         <div className="app-card">
            <div className="card">
               <div className="card-body bg-primary">Hello</div>
            </div>

            <div className="card">
               <div className="card-body bg-secondary">World</div>
            </div>
         </div>

         <Link to="/edit" className="btn btn-link ml-4 d-flex mt-n2">
            <img
               src={editIcon}
               className="d-inline"
               alt=""
               style={{
                  marginTop: "2px",
                  marginRight: "8px",
               }}
               width="20px"
            />
            Edit
         </Link>
      </div>
   );
}
