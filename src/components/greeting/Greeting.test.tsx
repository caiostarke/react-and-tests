import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"

test('Greet renders correctly', () => {
    render(<Greeting />)
    const textElement = screen.getByText(/hello/i)
    expect(textElement).toBeInTheDocument();
})

test('Greet renders props if exists', () => {
    render(<Greeting name="John" />)
    const textElement = screen.getByText(/hello john/i)
    expect(textElement).toBeInTheDocument();
})