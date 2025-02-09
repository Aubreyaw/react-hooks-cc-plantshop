import React, { useState } from "react";

function PlantCard({ plant, onDelete, onPriceChange }) { 
  const [isSoldOut, setIsSoldOut] = useState(plant.soldOut || false);
  const [isEditing, setIsEditing] = useState(false);
  const [newPrice, setNewPrice] = useState(plant.price);

  const toggleSoldOut = () => {
    setIsSoldOut(!isSoldOut);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    onPriceChange(plant.id, newPrice);
  };
 
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />  
      <h4>{plant.name}</h4>
      <div>
        <strong>Price: </strong>
        {isEditing ? (
          <div>
            <input
              type="text"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)} 
            />
            <button onClick={() => handleSaveClick(plant.id)}>Save</button>
          </div>
        ) : (
          <>
            <span onClick={() => handleEditClick(plant.price)}>{plant.price}</span>
            <button onClick={() => handleEditClick(plant.price)} className="price-edit-button">Edit</button>
          </>
        )}
      </div>
      
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