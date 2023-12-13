import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

const DogShow = ({ dogs }) => {
  const { id } = useParams();
  let selectedDog = dogs?.find((dog) => dog.id === +id);

  return (
    <>
      {selectedDog && (
        <>
          <img alt={`${selectedDog.name}'s Profile`} src={selectedDog.image} />
          <div className="selected-dogs">
            <h1>{selectedDog.name}</h1>
            <h2>{selectedDog.age}</h2>
            <p>Enjoys: {selectedDog.enjoys}</p>
            <NavLink to="/dogindex">Back</NavLink>
          </div>
        </>
      )}
    </>
  );
};
export default DogShow;
