import React from "react";
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";
import VerifiedLogo from '../assets/verifiedicon.jpg'


const DogIndex = ({ dogs }) => {
  return (
    <>
      <div className="card-index" style={{ position: "static"}}>
        {dogs?.map((dog, index) => {
          return (
            <Card
              style={{
                width: "18rem",
              }}
              key={index}
            >
              <img alt="dog profile" src={dog.image} style={{ height:"300px", width:"100%", margin:"0 auto"}}/>
              <CardBody>
                <CardTitle tag="h5" style={{ fontSize:"30px"}}>{dog.name} <img src={VerifiedLogo} style={{ height: "20px", width: "auto"}}/></CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6" style={{ fontSize:"25px"}}>
                  {dog.age}
                </CardSubtitle >
                <CardSubtitle className="mb-2 text-muted" tag="h6" >
                  {dog.location}
                </CardSubtitle>
                <NavLink to={`/dogshow/${dog.id}`} className='nav-link' style={{ fontSize:"25px"}}>
                    <button className="button-index">Check me out!</button>
                </NavLink>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </>
  );
};

export default DogIndex;
