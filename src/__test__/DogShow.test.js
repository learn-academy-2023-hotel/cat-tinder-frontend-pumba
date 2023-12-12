import { render, screen } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import DogShow from "../pages/DogShow";
import mockDogs from "../mockDogs";

const renderShow = () => {
  render(
    <MemoryRouter initialEntries={["/dogShow/1"]}>
      <Routes>
        <Route path="/dogshow/:id" element={<DogShow dogs={mockDogs} />} />
      </Routes>
    </MemoryRouter>
  );
};

describe("<DogShow />", () => {
  it("renders without crashing", () => {
    renderShow();
  });
  it("renders the object", () => {
    renderShow();
    expect(screen.getByText(mockDogs[0].enjoys, { exact: false })).toBeInTheDocument();
  });
});
