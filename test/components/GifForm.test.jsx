import { fireEvent, render, screen } from "@testing-library/react";
import { GifForm } from "../../src/components/GifForm";

describe("Pruebas en <GifForm/>", () => {
  const onNewValueMock = jest.fn();
  afterEach(() => jest.clearAllMocks());

  test("El input debe quedar en blanco cuando se haga el submit", () => {
    render(<GifForm onNewValue={onNewValueMock} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByTestId("form");

    fireEvent.input(input, { target: { value: "Milanesas" } });
    fireEvent.submit(form);

    expect(input.value).toBe("");
  });

  test("La funcion onNewVaue debe ser llamada al hacer submit", () => {
    render(<GifForm onNewValue={onNewValueMock} />);
    const input = screen.getByRole("textbox");
    const form = screen.getByTestId("form");

    fireEvent.input(input, { target: { value: "Milanesas" } });
    fireEvent.submit(form);

    expect(onNewValueMock).toHaveBeenCalledTimes(1);
    expect(onNewValueMock).toHaveBeenCalledWith("Milanesas");
  });
});
