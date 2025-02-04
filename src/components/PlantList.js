import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {  // passed plants prop down from PlantPage.js
// iterate through the plants in jsx to display in browser
  return (
    <ul className="cards">
      {plants.map((plant) => (
        <PlantCard key={plant.id} plant={plant} />
      ))}</ul>
  );
}

export default PlantList;

