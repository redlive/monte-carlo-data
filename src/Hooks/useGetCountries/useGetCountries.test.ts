import { renderHook } from '@testing-library/react-hooks';
import { useQuery } from '@apollo/client';

import { useGetCountries } from './useGetCountries';

// Mock the useQuery hook from Apollo Client
jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(),
}));

describe('useGetCountries', () => {
  it('should return loading true when query is loading', () => {
    // Mock the useQuery to simulate loading state
    (useQuery as jest.Mock).mockReturnValue({
      loading: true,
      error: undefined,
      data: [],
    });

    const { result } = renderHook(() => useGetCountries());

    expect(result.current.loading).toBe(true);
    expect(result.current.data).toEqual([]);
    expect(result.current.error).toBeUndefined();
  });

  it('should return error when query fails', () => {
    const mockError = new Error('Network Error');
    // Mock the useQuery to simulate error state
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: mockError,
      data: [],
    });

    const { result } = renderHook(() => useGetCountries());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(mockError);
    expect(result.current.data).toEqual([]);
  });

  it('should return data when query succeeds', () => {
    const mockData = {
      countries: [
        {
          capital: 'Washington, D.C.',
          code: 'US',
          currency: 'USD',
          name: 'United States',
          native: 'English',
        },
        { capital: 'Ottawa', code: 'CA', currency: 'CAD', name: null },
      ],
    };
    // Mock the useQuery to simulate successful query with data
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: mockData,
    });

    const { result } = renderHook(() => useGetCountries());

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeUndefined();
    expect(result.current.data).toEqual(mockData);
  });

  it('should return empty array if no countries are returned', () => {
    // Mock the useQuery to simulate no data case
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: undefined,
      data: { countries: [] },
    });

    const { result } = renderHook(() => useGetCountries());

    expect(result.current.data).toEqual({ countries: [] });
  });
});
