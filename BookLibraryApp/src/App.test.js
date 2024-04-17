import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders search page with input fields and button", () => {
  render(<App />);
  const searchByLabel = screen.getByText(/Search By:/i);
  const searchValueLabel = screen.getByText(/Search Value:/i);
  const searchButton = screen.getByText(/Search/i);

  expect(searchByLabel).toBeInTheDocument();
  expect(searchValueLabel).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();

  const searchBySelect = screen.getByLabelText(/Search By:/i);
  const searchValueInput = screen.getByLabelText(/Search Value:/i);

  expect(searchBySelect).toHaveValue("firstName");
  expect(searchValueInput).toHaveValue("");
});

test("fetches and displays search results correctly", async () => {
  jest.spyOn(global, "fetch").mockResolvedValueOnce({
    json: async () => [
      {
        bookId: 1,
        title: "Test Book",
        firstName: "John",
        lastName: "Doe",
        type: "Fiction",
        isbn: "1234567890",
        category: "Adventure",
        copiesInUse: 5,
        totalCopies: 10,
      },
    ],
  });

  render(<App />);
  const searchValueInput = screen.getByLabelText(/Search Value:/i);
  const searchButton = screen.getByText(/Search/i);

  fireEvent.change(searchValueInput, { target: { value: "Test Value" } });
  fireEvent.click(searchButton);

  await waitFor(() => {
    const bookTitle = screen.getByText("Test Book");
    expect(bookTitle).toBeInTheDocument();
  });
});