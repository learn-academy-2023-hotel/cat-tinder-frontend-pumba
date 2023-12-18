import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DogEdit from "./pages/DogEdit";
import DogIndex from "./pages/DogIndex";
import DogNew from "./pages/DogNew";
import DogShow from "./pages/DogShow";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

import "./App.css";


const App = () => {
  
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    readDog()
  }, [])
  
  const url = `https://dog-tinder-backend.onrender.com`

  const readDog = () => {
    fetch(`${url}/dogs`)
    .then((response) => response.json())
    .then((payload) => setDogs(payload))
    .catch((error) => console.log(error))
  }
  const createDog = (dog) => {
    fetch(`${url}/dogs`, {
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "POST"
    })
    .then((response) => response.json())
    .then(() => readDog())
    .catch((error) => console.log("Dog create errors:", error))
  }

  const updateDog = (dog, id) => {
    fetch(`${url}/dogs/${id}`, {
      body: JSON.stringify(dog),
      headers: {
        "Content-Type": "application/json"
      },
      method: "PATCH"
    })
    .then((response) => response.json())
    .then(() => readDog())
    .catch((error) => console.log("Dog update errors:", error)) 
  }

  const destroyDog = (id) => {
    fetch(`${url}/dogs/${id}`,{
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then((response) => response.json())
    .then(() => readDog())
    .catch((error) => console.log("Dog delete errors:", error))
  }



  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogedit/:id" element={<DogEdit dogs={dogs} updateDog={updateDog} />} />
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dognew" element={<DogNew createDog={createDog} />} />
        <Route path="/dogshow/:id" element={<DogShow  dogs={dogs} destroyDog={destroyDog} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
