import { renderHook } from "@testing-library/react-hooks";

import { useQuery } from "@apollo/client";
import { useGetCountry } from "./useGetCountry";

// Mock the useQuery hook from Apollo Client
jest.mock("@apollo/client", () => ({
  useQuery: jest.fn(),
}));

describe("useGetCountry", () => {
  it("should return loading true when query is loading", () => {
    (useQuery as jest.Mock).mockReturnValue({ loading: true, error: undefined, data: [] });

    const { result } = renderHook(() => useGetCountry("US"));

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeUndefined();
  });

  it("should return data when query is successful", () => {
    const mockData = { country: { name: "United States", capital: "Washington, D.C." } };
    (useQuery as jest.Mock).mockReturnValue({ loading: false, error: undefined, data: mockData });

    const { result } = renderHook(() => useGetCountry("US"));

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual(mockData);
    expect(result.current.error).toBeUndefined();
  });

  it("should return error when query fails", () => {
    const mockError = new Error("Something went wrong");
    (useQuery as jest.Mock).mockReturnValue({ loading: false, error: mockError, data: [] });

    const { result } = renderHook(() => useGetCountry("US"));

    expect(result.current.loading).toBe(false);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toEqual(mockError);
  });
});
