import React from "react";
import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {

  const petsArr = pets.map((pet) => {
    return <Pet key={pet.id} pet={pet} onAdoptPet={onAdoptPet} />
  })

  return <div className="ui cards">{petsArr}</div>;
}

export default PetBrowser;