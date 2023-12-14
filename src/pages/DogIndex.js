import React from "react";
import { Card, CardTitle, CardSubtitle, CardText, CardBody } from "reactstrap";
import { NavLink } from "react-router-dom";

const DogIndex = ({ dogs }) => {
  return (
    <>
      <div className="card-index">
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
                <CardTitle tag="h5">{dog.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {dog.age}
                </CardSubtitle>
                <NavLink to={`/dogshow/${dog.id}`} className='nav-link'>
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
