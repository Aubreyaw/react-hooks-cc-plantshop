import React, { useState } from "react";


function PlantCard({ plant }) {  // passing down plant prop from PlantList note: using prop "plant" instead of "plants"
  const [isSoldOut, setIsSoldOut] = useState(plant.soldOut || false); // setting state for in stock button **

  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut)
  };
// adding plant data details to jsx to display in browser
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />  
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
        <button onClick={toggleSoldOut} className={isSoldOut ? "" : "primary"}>
          {isSoldOut ? "Out of Stock" : "In Stock"}
        </button>
    </li>
  );
}

export default PlantCard;

/* 
** Setting state locally Pros: Local state management makes the component self-contained.
Cons: State won't persist across re-renders or page refreshes unless handled globally or saved to the backend.
*/

/*
 "plants": [
    {
      "id": 1,
      "name": "Aloe",
      "image": "./images/aloe.jpg",
      "price": 15.99
    },
*/