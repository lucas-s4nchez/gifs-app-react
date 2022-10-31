import { getGifs } from "../../src/helpers/getGifs";

describe("Pruebas en la funcion getGifs", () => {
  test("Debe de retornar un array de objetos", async () => {
    const newGifs = await getGifs("Pizza");

    expect(newGifs.length).toBeGreaterThan(0);
    expect(newGifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      image: expect.any(String),
    });
  });
});
