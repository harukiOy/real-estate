import React from "react";
import AppartamentsCard from "./AppartamentsCard";

type Props = {};

const Appartaments = (props: Props) => {
  return (
    <div className="custom-padding">
      <div className="grid grid-cols-2 gap-4">
        <AppartamentsCard />
        <AppartamentsCard />
        <AppartamentsCard />
        <AppartamentsCard />
        <AppartamentsCard />
        <AppartamentsCard />
      </div>
    </div>
  );
};

export default Appartaments;