import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage({ plants, setPlants }) {  // Add setPlants prop to update plants
  const [searchFilter, setSearchFilter] = useState(""); // handle state for search filter
  const [newPlant, setNewPlant] = useState({ // handle state for new plant form
    name: "",
    image: "",
    price: "",
  });

  // Handle search input change
  const handleSearchChange = (event) => {  
    setSearchFilter(event.target.value);
  };

  // Handle form input changes
  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setNewPlant((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission to add a new plant
  const handleFormSubmit = (event) => {
    event.preventDefault();
  // POST request to add new plants
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(newPlant),
    })
    .then((r) => r.json())
    .then((addedPlant) => {
      // Update the plant list with the newly added plant
      setPlants((prevPlants) => [...prevPlants, addedPlant]);
      // Reset the form
      setNewPlant({ name: "", image: "", price: "" });
    })
    .catch((error) => console.error("Error adding plant:", error));
  };
  // non-case sensitive search filter
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchFilter.toLowerCase())
  );
  // passing down props
  return (
    <main>
      <NewPlantForm 
        newPlant={newPlant}
        onFormChange={handleFormChange}
        onFormSubmit={handleFormSubmit}
      />
      <Search searchFilter={searchFilter} onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
