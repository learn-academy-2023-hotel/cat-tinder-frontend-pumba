import { render, screen } from '@testing-library/react'
import mockDogs from '../mockDogs'
import DogEdit from '../pages/DogEdit'
import { MemoryRouter, Routes, Route } from 'react-router-dom'

const renderEdit = () => {
    render(
      <MemoryRouter initialEntries={["/dogedit/1"]}>
        <Routes>
          <Route path="/dogedit/:id" element={<DogEdit dogs={mockDogs} />} />
        </Routes>
      </MemoryRouter>
    );
  };

  describe("<DogEdit />", () => {
    it("displays a form to update the dog profile information", () => {
        renderEdit()
        const nameInput = screen.getByRole("textbox", {
            name: /name/i,
        })
        expect(nameInput).toBeInTheDocument()

        const enjoysInput = screen.getByRole("textbox", {
            name: /enjoys/i,
        })
        expect(enjoysInput).toBeInTheDocument()
    })
  })