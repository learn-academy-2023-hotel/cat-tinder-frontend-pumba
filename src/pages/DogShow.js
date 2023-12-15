import React from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import VerifiedLogo from "../assets/verifiedicon.jpg";
import DestroyDog from "../components/DestroyDog";

const DogShow = ({ dogs, destroyDog }) => {
  const { id } = useParams();
  let currentDog = dogs?.find((dog) => dog.id === +id);

  return (
    <>
      {currentDog && (
        <>
          <Card
            style={{
              width: "28.5rem",
              margin: "0 auto",
              border: "",
              position: "static",
              height: "31.5rem",
              marginTop: "-15px",
              // overflow: "hidden"

            }}
          >
            <img
              alt={`${currentDog.name}'s Profile`}
              src={currentDog.image}
              style={{ height: "375px", width: "100%" }}
            />
            <CardBody>
              <CardTitle
                tag="h5"
                style={{
                  fontSize: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {currentDog.name}
                <span style={{ margin: "0 5px" }}>|</span> {currentDog.age}{" "}
                <img
                  src={VerifiedLogo}
                  style={{ height: "30px", width: "auto", marginLeft: "10px" }}
                />
              </CardTitle>

              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
                style={{ fontSize: "15px" }}
              >
                {currentDog.location}
              </CardSubtitle>
              <CardText style={{ fontSize: "25px" }}>
                Enjoys: {currentDog.enjoys}{" "}
              </CardText>
              <div className="edit-container" style={{ marginTop:"-15px"}}>
                <NavLink to={`/dogedit/${currentDog.id}`}>
                  <button style={{ fontSize: "25px" }}>Edit Profile</button>
                </NavLink>
                <br/>
                <DestroyDog destroyDog={destroyDog} />
              </div>
            </CardBody>
          </Card>
          <br />
          <NavLink to="/dogindex">
            <button style={{ fontSize: "20px" }}>Back</button>
          </NavLink>
        </>
      )}
    </>
    
  );
};
export default DogShow;

