import React from "react";

function Pet({ pet, onAdoptPet }) {
  const { age, gender, isAdopted, name, type, weight, id } = pet


  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {name}
          <br/>
          {gender === 'male' ? '♂' : '♀'}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {isAdopted ? (
          <button className="ui disabled button">Already adopted</button>
        ) : (
          <button onClick={() => onAdoptPet(id)} className="ui primary button">Adopt pet</button>
        )}
      </div>
    </div>
  );
}

export default Pet;