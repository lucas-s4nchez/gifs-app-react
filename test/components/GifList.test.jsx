import { render, screen } from "@testing-library/react";
import { GifList } from "../../src/components/GifList";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("Pruebas en <GifList/>", () => {
  const searchValue = "Papas fritas";
  const gifs = [
    { id: 1, title: "papitas", image: "https:/papitas.png/" },
    { id: 2, title: "salchipapas", image: "https:/salchipapas.png/" },
  ];

  test("Debe mostrar el Spinner de carga antes de obtener resultados", () => {
    useFetchGifs.mockReturnValue({
      data: null,
      isLoading: true,
    });
    render(<GifList searchValue={searchValue} />);
    const spinner = screen.getByTestId("spinner");

    expect(spinner).toBeTruthy();
  });

  test("Debe mostrar los gifs sacados desde useFetchGifs", () => {
    useFetchGifs.mockReturnValue({
      data: gifs,
      isLoading: false,
    });
    render(<GifList searchValue={searchValue} />);

    expect(screen.getAllByRole("img").length).toBe(2);
  });
});
