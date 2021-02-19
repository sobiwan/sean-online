import React from "react";
import "../../styles";

const SectionTitle = ({ intro, title }) => (
  <div className="font-center">
    <div className="satisfy font-size-27">{intro}</div>
    <div className="roboto font-size-38 uppercase bold">{title}</div>
  </div>
);

export default SectionTitle;
