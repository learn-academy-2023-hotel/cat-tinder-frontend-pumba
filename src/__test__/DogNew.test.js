import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"

import DogNew from "../pages/DogNew"

describe("<DogNew />", () => {
  const renderNew = () => {
    render(
      <BrowserRouter>
        <DogNew />
      </BrowserRouter>
    )
  }
  it("renders a new dog form", () => {
    renderNew()
    screen.logTestingPlaygroundURL()

    const nameInput = screen.getByRole("textbox", {
      name: /name/i,
    })
    expect(nameInput).toBeInTheDocument()

    const enjoysInput = screen.getByRole("textbox", {
      name: /enjoys/i,
    })
    expect(enjoysInput).toBeInTheDocument()
  })

  it("has a form with entries for name, age, enjoys, image", () => {
    renderNew()
    const formName = screen.getByText(/name/i)
    expect(formName.getAttribute("For")).toEqual("name")
  })
})