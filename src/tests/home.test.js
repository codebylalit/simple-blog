import { render, screen } from "@testing-library/react";
import Home from "../pages/home";

test("renders the homepage", () => {
  render(<Home />);
  const headingElement = screen.getByText(/Blog Posts/i);
  expect(headingElement).toBeInTheDocument();
});
