import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

describe("Pruebas en el hook useFetchGifs", () => {
  test("Debe de retornar el estado inicial ", () => {
    const { result } = renderHook(() => useFetchGifs("Pizza"));
    const { data, isLoading } = result.current;

    expect(data).toBeFalsy();
    expect(isLoading).toBeTruthy();
  });
  test("Debe retornar el estado luego de obtener una respuesta del fetch", async () => {
    const { result } = renderHook(() => useFetchGifs("Pizza"));

    await waitFor(() => {
      expect(result.current.data.length).toBeGreaterThan(0);
    });
    const { data, isLoading } = result.current;

    expect(isLoading).toBeFalsy();
    expect(data).toBeTruthy();
  });
});
