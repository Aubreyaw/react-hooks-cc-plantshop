import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {  
  const [plants, setPlants] = useState([]); 
  const [searchFilter, setSearchFilter] = useState(""); 
  const [newPlant, setNewPlant] = useState({ 
    name: "",
    image: "",
    price: "",
  });

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((r) => r.json())
      .then((data) => {
        setPlants(data);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
      });
  }, []);
 
  const handleSearchChange = (event) => {  
    setSearchFilter(event.target.value.toLowerCase());
  };
  
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

      const handleDelete = (id) => {
        fetch(`http://localhost:6001/plants/${id}`, {
          method: "DELETE",
        })
          .then(() => {
            setPlants(plants.filter((plant) => plant.id !== id));
          })
          .catch((error) => {
            console.error("Error deleting plant:", error);
          });
      };

      
      const filteredPlants = plants.filter((plant) =>
        plant.name.toLowerCase().includes(searchFilter.toLowerCase())
      );

      const handlePriceChange = (id, newPrice) => {
        fetch(`http://localhost:6001/plants/${id}`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ price: newPrice }),
        })
          .then((response) => response.json()) 
          .then((updatedPlant) => {
            setPlants((prevPlants) =>
              prevPlants.map((plant) =>
                plant.id === id ? { ...plant, price: updatedPlant.price } : plant
              )
            );
          })
          .catch((error) => console.error("Error updating plant:", error));
      };

  return (
    <main>
      <NewPlantForm newPlant={newPlant} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
      <Search searchFilter={searchFilter} onSearchChange={handleSearchChange} />
      <PlantList plants={filteredPlants} onDelete={handleDelete} onPriceChange={handlePriceChange} />
    </main>
  );
}

export default PlantPage;

// PlantPage -> PlantList -> PlantCard