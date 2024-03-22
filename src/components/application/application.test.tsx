import { render, screen } from "@testing-library/react";
import Application from "./application";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />)
        const textElement = screen.getByRole('textbox')
        expect(textElement).toBeInTheDocument();
  
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument();
    })
})