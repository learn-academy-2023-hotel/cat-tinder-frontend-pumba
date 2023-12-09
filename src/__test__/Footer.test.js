import { render, screen } from "@testing-library/react"
import Footer from "../components/Footer"

describe("<Footer />", () => {
  it("renders without crashing", () => {
    render(
        <Footer />
    )

    const div = screen.getByText("&copy;M and Dalton's|Dog Tinder")
    expect(div).toBeInTheDocument()
  })
})