import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button, FormFeedback } from "reactstrap";
import { useNavigate } from "react-router-dom";

const DogNew = ({ createDog }) => {
  const navigate = useNavigate();

  const [newDog, setNewDog] = useState({
    name: "",
    age: "",
    location: "",
    enjoys: "",
    image: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    age: false,
    location: false,
    enjoys: false,
    image: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDog({ ...newDog, [name]: value });
    setFormErrors({ ...formErrors, [name]: value.trim() === "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(formErrors).some((error) => error)) {
      console.log("Form has errors. Please fill in all required fields.");
      return;
    }

    createDog(newDog);
    navigate("/dogindex");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          onChange={handleChange}
          value={newDog.name}
          required
          invalid={formErrors.name}
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
          required
          invalid={formErrors.age}
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          id="location"
          name="location"
          type="text"
          onChange={handleChange}
          value={newDog.location}
          required
          invalid={formErrors.location}
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
          required
          invalid={formErrors.enjoys}
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
          required
          invalid={formErrors.image}
        />
      </FormGroup>
      <Button type="submit" className="new-button">
        Submit
      </Button>
    </Form>
  );
};

export default DogNew;
