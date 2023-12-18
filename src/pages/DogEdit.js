import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const DogEdit = ({ dogs, updateDog }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  let currentDog = dogs?.find((dog) => dog.id === +id);

  const [editDog, setEditDog] = useState({
    id: currentDog?.id,
    name: currentDog?.name,
    age: currentDog?.age,
    location: currentDog?.location,
    enjoys: currentDog?.enjoys,
    image: currentDog?.image,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    setEditDog({ ...editDog, [e.target.name]: e.target.value });
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleConfirmSubmit = () => {
    console.log("Delete button clicked")
    updateDog(editDog, currentDog.id);
    navigate("/dogindex");
    toggleModal();
  };

  const handleSubmit = () => {
    toggleModal();
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
          value={editDog.name}
        />
      </FormGroup>
      <FormGroup>
        <Label for="age">Age</Label>
        <Input
          id="age"
          name="age"
          type="text"
          onChange={handleChange}
          value={editDog.age}
        />
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          id="location"
          name="location"
          type="text"
          onChange={handleChange}
          value={editDog.location}
        />
      </FormGroup>
      <FormGroup>
        <Label for="enjoys">Enjoys</Label>
        <Input
          id="enjoys"
          name="enjoys"
          type="text"
          onChange={handleChange}
          value={editDog.enjoys}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <Input
          id="image"
          name="image"
          type="text"
          onChange={handleChange}
          value={editDog.image}
        />
      </FormGroup>
      <Button onClick={toggleModal}>Submit</Button>

      <Modal isOpen={isModalOpen} toggle={toggleModal} centered>
        <ModalBody>Are you sure you want to submit the changes?</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleConfirmSubmit} style={{ margin: "auto" }}>
            Yes
          </Button>{" "}
          <Button color="secondary" onClick={handleSubmit} style={{ margin: "auto" }}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Form>
  );
};

export default DogEdit;
