import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe("Pruebas en <GifItem/>", () => {
  const title = "Pizzas";
  const image = "https://pizza-especial.png/";
  test("Comprobar que los items se renderizan", () => {
    render(<GifItem title={title} image={image} />);
    const img = screen.getByRole("img");

    expect(img.src).toBe(image);
    expect(img.alt).toBe(title);
  });
});
