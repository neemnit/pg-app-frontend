import React from "react";
import { useSelector } from "react-redux";
import BuildingItem from "./BuildingItem";
const BuildingList = (props) => {
 

  const buildings = useSelector((state) => {
    return state.buildings;
  });

  return (
    <div>
      <h2>NO. of Buildings-{buildings.length}</h2>

      {buildings.map((building) => {
        return <BuildingItem key={building._id} {...building} />;
      })}
    </div>
  );
};
export default BuildingList;
