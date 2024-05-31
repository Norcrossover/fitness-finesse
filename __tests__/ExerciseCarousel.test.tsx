// _tests_/ExerciseCarousel.test.tsx
import React from "react";
import { fireEvent, render } from "@testing-library/react";
import ExerciseCarousel from "@/components/features/workout/exercises/ExerciseCarousel";
import useFetchExercises from "@/hooks/useFetchExercises";

// Mock the useFetchExercises hook
jest.mock("@/hooks/useFetchExercises", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("ExerciseCarousel", () => {
  const mockData = [
    {
      id: 1,
      name: "Exercise 1",
      description: "Description 1",
      category: 1,
      equipment: [],
      muscles: [],
      muscles_secondary: [],
      license_author: "",
    },
    {
      id: 2,
      name: "Exercise 2",
      description: "Description 2",
      category: 2,
      equipment: [],
      muscles: [],
      muscles_secondary: [],
      license_author: "",
    },
  ];

  beforeEach(() => {
    (useFetchExercises as jest.Mock).mockReturnValue({
      data: mockData,
      loading: false,
      error: null,
    });
  });

  test("renders without crashing", () => {
    const { getByPlaceholderText } = render(<ExerciseCarousel />);
    expect(getByPlaceholderText("Search exercises...")).toBeTruthy();
  });

  test("displays loading state", () => {
    (useFetchExercises as jest.Mock).mockReturnValue({
      data: [],
      loading: true,
      error: null,
    });
    const { getByText } = render(<ExerciseCarousel />);
    expect(getByText("Loading...")).toBeTruthy();
  });

  test("displays error state", () => {
    (useFetchExercises as jest.Mock).mockReturnValue({
      data: [],
      loading: false,
      error: new Error("Failed to fetch data"),
    });
    const { getByText } = render(<ExerciseCarousel />);
    expect(
      getByText("Error loading exercises: Failed to fetch data"),
    ).toBeTruthy();
  });

  test("displays exercises", () => {
    const { getByText } = render(<ExerciseCarousel />);
    expect(getByText("Exercise 1")).toBeTruthy();
    expect(getByText("Exercise 2")).toBeTruthy();
  });

  test("filters exercises based on search query", () => {
    const { getByPlaceholderText, queryByText } = render(<ExerciseCarousel />);
    const searchInput = getByPlaceholderText("Search exercises...");
    fireEvent.change(searchInput, { target: { value: "Exercise 1" } });
    expect(queryByText("Exercise 1")).toBeTruthy();
    expect(queryByText("Exercise 2")).toBeNull();
  });
});
