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

        const textElement = screen.getByRole('textbox', {
            name: 'Name'
        })
        expect(textElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: 'Bio',
        })
        expect(bioElement).toBeInTheDocument();
        
        const jobLocationElement = screen.getByRole('combobox')
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox')
        expect(termsElement).toBeInTheDocument();

        const buttonElement = screen.getByRole('button')
        expect(buttonElement).toBeInTheDocument();
    })
})