import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import mockDogs from "../mockDogs";
import { BrowserRouter } from "react-router-dom";

// const renderHome = () => {
//   <BrowserRouter>
//     <Home />
//   </BrowserRouter>;
// };

const renderHome = () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
  );
};

describe("<Home />", () => {
  it("renders without crashing", () => {
    renderHome();
  });
  it("renders an image with a source", () => {
    renderHome();
    const HomeLogo = screen.getByRole("img");
    expect(HomeLogo).toHaveAttribute("src", "The Woof.png");
    expect(HomeLogo).toBeInTheDocument();
  });
});
