import React from "react";
import AboutUs from "./AboutUs";
import Appartaments from "./Appartaments";
import DidYouFindYourDreamHome from "./DidYouFindYourDreamHome";
import Hero from "./Hero";
import OtherProjects from "./OtherProjects";

type Props = {};

const Main = (props: Props) => {
  return (
    <>
      <Hero />
      <Appartaments />
      <AboutUs />
      <OtherProjects />
      <DidYouFindYourDreamHome />
    </>
  );
};

export default Main;
