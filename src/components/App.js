import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";
import { useEffect, useState } from "react";


function App() {
  const [plants, setPlants] = useState([]); // handle state for plants data
  
  useEffect(() => {  // fetch request for plants data
    fetch("http://localhost:6001/plants")
    .then(r => r.json())
    .then(data => {
      console.log(data);
      setPlants(data);
  })
    .catch(error => console.error("Error fetching plants:", error));
  }, [])
  // passing down props
  return (
    <div className="app">
      <Header />
      <PlantPage plants={plants} setPlants={setPlants} />  
    </div>
  );
}

export default App;
