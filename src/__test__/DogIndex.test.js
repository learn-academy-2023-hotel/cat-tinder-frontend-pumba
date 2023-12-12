import { render, screen } from "@testing-library/react";
import DogIndex from "../pages/DogIndex";
import { BrowserRouter } from "react-router-dom";
import mockDogs from "../mockDogs";

const renderIndex = () => {
  render(
    <BrowserRouter>
      <DogIndex dogs={mockDogs} />
    </BrowserRouter>
  )
}

describe("<DogIndex />", () => {
  it("renders without crashing", () => {
    renderIndex();
  });
  it("renders dog cards", () => {
    renderIndex();
    mockDogs.forEach((dog) => {
      const dogName = screen.getByText(dog.name);
      expect(dogName).toBeInTheDocument();
    })
  })
})
