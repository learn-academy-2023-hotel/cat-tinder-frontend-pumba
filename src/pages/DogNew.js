import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const DogNew = ({ createDog }) => {
  const navigate = useNavigate();

  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: "",
  });

  const handleChange = (e) => {
    setNewDog({ ...newDog, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    createDog(newDog);
    navigate("/dogindex");
  };

  return (
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={handleChange}
            value={newDog.name}
          />
        </FormGroup>
        <FormGroup>
          <Label for="age">Age</Label>
          <Input
            id="age"
            name="age"
            type="text"
            onChange={handleChange}
            value={newDog.age}
          />
        </FormGroup>
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input
            id="enjoys"
            name="enjoys"
            type="text"
            onChange={handleChange}
            value={newDog.enjoys}
          />
        </FormGroup>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            id="image"
            name="image"
            type="text"
            onChange={handleChange}
            value={newDog.image}
          />
        </FormGroup>
        <Button onClick={handleSubmit} className="new-button">Submit</Button>
      </Form>
  );
};
export default DogNew;
