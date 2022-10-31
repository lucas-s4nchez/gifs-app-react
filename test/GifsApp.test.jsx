import { fireEvent, render, screen } from "@testing-library/react";
import { GifsApp } from "../src/GifsApp";

describe("Pruebas en <GifsApp/>", () => {
  const result = "Pizza";

  test("Debe de hacer match con el snapshoot", () => {
    const { container } = render(<GifsApp />);
    expect(container).toMatchSnapshot();
  });

  test("Debe arrojar un resultado de busqueda al hacer submit", () => {
    render(<GifsApp />);
    const input = screen.getByRole("textbox");
    const form = screen.getByTestId("form");

    fireEvent.input(input, { target: { value: result } });
    fireEvent.submit(form);

    expect(screen.getByText(result)).toBeTruthy();
  });
});
