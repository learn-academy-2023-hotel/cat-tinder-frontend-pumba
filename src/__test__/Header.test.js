import { render, screen } from "@testing-library/react";
import Header from "../components/Header";
import { BrowserRouter } from "react-router-dom";
// import Logo from '../assets/DogTingerLogo.png'

const renderHeader = () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe("<Header />", () => {
  it("renders without crashing", () => {
    renderHeader();
  });
  it("renders a logo with a source", () => {
    renderHeader();

    const logo = screen.getByRole("img");
    expect(logo).toHaveAttribute("src", "DogTinderLogo.png");
  });
  it("renders three navigation links", () => {
    renderHeader();
    const homeLink = screen.getAllByRole("link");
    expect(homeLink.length).toEqual(3);
  });
  it("has some text", () => {
    renderHeader()
    const indexElement = screen.getByText(/Dog Tinder/i)
    expect(indexElement).toBeInTheDocument()
  })
});
