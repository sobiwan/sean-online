import React from "react";
import "../../styles";

const ScreenWrapper = (props) => (
  <div
    className={`max-width-outer 
    ${props.rootBackground && "root-header-background"} 
    ${props.accomplishments && "accomplishments-background"}`}
  >
    <div className="max-width-inner flex-center flex-column">
      {props.children}
    </div>
  </div>
);

export default ScreenWrapper;
