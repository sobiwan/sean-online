import React from "react";
import RootHeader from "../components/root-header";
import AboutMe from "../components/about-me";
import Accomplishments from "../components/accomplishments";
import "../styles";

function RootScreen() {
  return (
    <>
      <RootHeader />
      <AboutMe />
      <Accomplishments />
    </>
  );
}

export default RootScreen;
