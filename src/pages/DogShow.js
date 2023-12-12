import React from "react";
import { useParams, NavLink } from "react-router-dom";

const DogShow = ({ dogs }) => {
  const { id } = useParams();
  let selectedDog = dogs?.find((dog) => dog.id === +id);

  return (
    <>
      {selectedDog && (
        <>
          <img alt={`${selectedDog.name}'s Profile`} src={selectedDog.image} />
          <h1>{selectedDog.name}</h1>
          <h2>{selectedDog.age}</h2>
          <h3>{selectedDog.enjoys}</h3>
          <NavLink to='/dogindex'>Back</NavLink>
        </>
      )}
    </>
  );
};
export default DogShow;
