import React from "react";

function NewPlantForm({ newPlant = {}, onFormChange, onFormSubmit }) { 
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={onFormSubmit}> 
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={onFormChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newPlant.image}
          onChange={onFormChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlant.price}
          onChange={onFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
