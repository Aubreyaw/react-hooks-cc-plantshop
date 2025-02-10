import React, { useState } from "react";

function NewPlantForm({ setPlants }) { 
   const [newPlant, setNewPlant] = useState({ 
      name: "",
      image: "",
      price: "",
    });

    const handleFormChange = (event) => {
      const { name, value } = event.target;
      setNewPlant((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    const handleFormSubmit = (event) => {
      event.preventDefault();
      fetch("http://localhost:6001/plants", {
        method: "POST",
        headers: {
          "Content-Type": "Application/JSON",
        },
        body: JSON.stringify(newPlant),
      })
        .then((r) => r.json())
        .then((addedPlant) => {
          setPlants((prevPlants) => [...prevPlants, addedPlant]);
          setNewPlant({ name: "", image: "", price: "" });
        })
        .catch((error) => {
          console.error("Error adding plant:", error);
        });
    };
  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}> 
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={newPlant.name}
          onChange={handleFormChange}
        />
        <input
          type="text"
          name="image"  
          placeholder="Image URL"
          value={newPlant.image}
          onChange={handleFormChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={newPlant.price}
          onChange={handleFormChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
