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


// import mockDogs from "./mockDogs";

import "./App.css";

const App = () => {
  
  const [dogs, setDogs] = useState([]);
  useEffect(() => {
    readDog()
  }, [])

  const readDog = () => {
    fetch("http://localhost:3000/dogs")
    .then((response) => response.json())
    .then((payload) => setDogs(payload))
    .catch((error) => console.log(error))
  }
  const createDog = (dog) => {
    fetch("http://localhost:3000/dogs", {
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
    fetch(`http://localhost:3000/dogs/${id}`, {
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
    fetch(`http://localhost:3000/dogs/${id}`,{
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
        <Route path="/dogindex" element={<DogIndex dogs={dogs} />} />
        <Route path="/dogshow/:id" element={<DogShow  dogs={dogs} destroyDog={destroyDog} />} />
        <Route path="/dognew" element={<DogNew createDog={createDog} />} />
        <Route path="/dogedit/:id" element={<DogEdit dogs={dogs} updateDog={updateDog} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};
export default App;
