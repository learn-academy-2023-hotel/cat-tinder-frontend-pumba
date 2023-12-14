import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const DogShow = ({ dogs, destroyDog }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let currentDog = dogs?.find((dog) => dog.id === +id);

 console.log("dogs:", dogs)
  return (
    <>
      {currentDog && (
        <>
          <img alt={`${currentDog.name}'s Profile`} src={currentDog.image} style={{height:"450px", width:"450px"}} />
          <div className="selected-dogs">
            <h1>{currentDog.name}</h1>
            <h2>{currentDog.age}</h2>
            <p>Enjoys: {currentDog.enjoys}</p>
            <NavLink to={`/dogedit/${currentDog.id}`} className="nav-link">
              Edit Profile
            </NavLink>
            <NavLink to="/dogindex/" className="nav-link">
            <button onClick={() => destroyDog(currentDog.id)} >Delete Dog Profile</button>
            </NavLink>
            <NavLink to="/dogindex">Back</NavLink>
          </div>
        </>
      )}
    </>
  );
};
export default DogShow;
