import { render, screen } from "@testing-library/react";
import Application from "./application";

describe('Application', () => {
    test('renders correctly', () => {
        render(<Application />)

        const pageHeading = screen.getByRole('heading', {
            level: 1
        })
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole('heading', {
            level: 2
        })
        expect(sectionHeading).toBeInTheDocument();

        const paragraphElement = screen.getByText('All fields are required')
        expect(paragraphElement).toBeInTheDocument()

        const closeElement = screen.getByTitle('close')
        expect(closeElement).toBeInTheDocument();

        const imageElement = screen.getByAltText('a person with a laptop')
        expect(imageElement).toBeInTheDocument();

        const textElement = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(textElement).toBeInTheDocument();

        const textElement2 = screen.getByLabelText('Name',{
            selector: 'input'
        })
        expect(textElement2).toBeInTheDocument();

        const displayValue = screen.getByDisplayValue('Kaer')
        expect(displayValue).toBeInTheDocument();

        const nameElement = screen.getByPlaceholderText('Full Name')
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        })
        expect(bioElement).toBeInTheDocument();
        
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();

        const termsElement2 = screen.getByLabelText('I agree to the terms and conditions')
        expect(termsElement2).toBeInTheDocument();

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument();
    })
})