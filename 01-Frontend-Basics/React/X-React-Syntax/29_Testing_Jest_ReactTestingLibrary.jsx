// Example test file: Counter.test.jsx
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

test("increments counter", () => {
  render(<Counter />);
  const button = screen.getByText("+");
  fireEvent.click(button);
  expect(screen.getByText("1")).toBeInTheDocument();
});
