import React, { useState } from "react";
import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  let URL = 'http://localhost:3001/pets'

  const handleAdopt = (id) => {
    const adoptedPet = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
    setPets(adoptedPet)
  }
  
  const handleChange = (newType) => {
    setFilters({
      ...filters,
      type: newType
    })
  }
  
  if (filters.type !== 'all') {
    URL += `/?type=${filters.type}`
  } 
  
  const findPets = () => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPets(data))
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={handleChange} 
            onFindPetsClick={findPets}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdopt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;