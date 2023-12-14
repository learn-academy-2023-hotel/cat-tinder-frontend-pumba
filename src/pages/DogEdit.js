import React, { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { Button, Form, FormGroup, Input, Label } from "reactstrap"


const DogEdit = ({ dogs, updateDog }) => {
  const { id } = useParams()
  const navigate = useNavigate()
  let currentDog = dogs?.find((dog) => dog.id === +id)

  const [editDog, setEditDog] = useState({
    id: currentDog.id,
    name: currentDog.name,
    age: currentDog.age,
    location: currentDog.location,
    enjoys: currentDog.enjoys,
    image: currentDog.image
  })
  
  const handleChange = (e) => {
    setEditDog({ ...editDog, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    updateDog(editDog, currentDog.id)
    navigate(`/dogshow/${id}`)
  }

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
        <Label for="age">Location</Label>
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
      <Button onClick={handleSubmit}>Submit</Button>
    </Form>
  )
}

export default DogEdit