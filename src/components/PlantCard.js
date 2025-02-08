import React, { useState } from "react";

function PlantCard({ plant, onDelete }) { 
  const [isSoldOut, setIsSoldOut] = useState(plant.soldOut || false);

  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut)
  };
 
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />  
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
        <button onClick={toggleSoldOut} className={isSoldOut ? "" : "primary"}>
          {isSoldOut ? "Out of Stock" : "In Stock"}
        </button>
          
        <button onClick={() => onDelete(plant.id)} className="delete-button">
          Delete
        </button>
    </li>
  );
}

export default PlantCard;