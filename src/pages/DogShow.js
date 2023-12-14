import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import VerifiedLogo from '../assets/verifiedicon.jpg'

const DogShow = ({ dogs, destroyDog }) => {
  const { id } = useParams();
  let currentDog = dogs?.find((dog) => dog.id === +id);

  console.log("dogs:", dogs);
  return (
    <>
      {currentDog && (
        <>
          <Card
            style={{
              width: "28.5rem",
              margin: "0 auto",
              border: "", position: "static"
            }}
          >
            <img
              alt={`${currentDog.name}'s Profile`}
              src={currentDog.image}
              style={{ height: "375px", width: "100%" }}
            />
            <CardBody>
              
              <CardTitle tag="h5" style={{ fontSize:"35px" }}>{currentDog.name} {currentDog.age} <img src={VerifiedLogo} style={{ height: "20px", width: "auto", margin: "0 auto"}}/></CardTitle>
              <CardSubtitle className="mb-2 text-muted" tag="h6"style={{ fontSize:"15px" }}>
                {currentDog.location}
              </CardSubtitle>
              <CardText style={{ fontSize:"25px" }}>Enjoys: {currentDog.enjoys} </CardText>
              <div className="edit-container" style={{ fontSize:"25px" }}>
                <NavLink to={`/dogedit/${currentDog.id}`} className="nav-link">
                  <button>Edit Profile</button>  
                </NavLink>
                <NavLink to="/dogindex/" className="nav-link">
                  <button onClick={() => destroyDog(currentDog.id)}>
                    Delete Profile
                  </button>
                </NavLink>
              </div>
            </CardBody>
          </Card>
          <br/>
              <NavLink to="/dogindex" >
                <button style={{ fontSize:"25px" }}>Back</button>
              </NavLink>
        </>
      )}
    </>
  );
};
export default DogShow;
