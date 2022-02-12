import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  const validProps = {
    setSearchResults: jest.fn(),
  };
  test("Search component renders correctly", () => {
    const { asFragment } = render(
      <Search setSearchResults={validProps.setSearchResults} />
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test("Search bar renders correctly", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const inputElement = screen.getByPlaceholderText("moon");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("search__input");
  });

  test("Submit button renders correctly", () => {
    render(<Search setSearchResults={validProps.setSearchResults} />);
    const buttonElement = screen.getByText("Go!");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("search__button");
  });
});
