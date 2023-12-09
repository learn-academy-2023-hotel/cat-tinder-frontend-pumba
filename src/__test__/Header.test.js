import { render, screen } from "@testing-library/react"
import Header from "../components/Header"
import { BrowserRouter } from 'react-router-dom'
// import Logo from '../assets/DogTingerLogo.png'

describe("<Header />", () => {
    it("renders without crashing", () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )
    })
    it('renders a logo with a source', () => {
        render(
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        )    
    
    const logo = screen.getByRole("img")
    expect(logo).toHaveAttribute("src", "DogTinderLogo.png")
    })
})



  