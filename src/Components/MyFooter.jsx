import React from "react";
import { CFooter } from "@coreui/react";
import "./Footer.css";

function MyFooter() {
  return (
    <CFooter fixed={false} className="footer-container">
      <div>
        © 2024 My Company, Inc. All rights reserved.
      </div>
    </CFooter>
  );
}

export default MyFooter;
