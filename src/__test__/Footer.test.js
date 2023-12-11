import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"
import { BrowserRouter } from "react-router-dom"

describe("<Footer />", () => {
  it("renders a Footer heading", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )

    const notFound = screen.getByText("&Copy;M and Dalton's|Dog Tinder")
    expect(notFound).toBeInTheDocument()
  })
})