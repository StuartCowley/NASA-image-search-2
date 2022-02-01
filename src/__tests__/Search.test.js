import { render, screen } from "@testing-library/react";
import Search from "../components/Search";

describe("Search", () => {
  test("Search component renders correctly", () => {
    const { asFragment } = render(<Search />);

    expect(asFragment()).toMatchSnapshot();
  });
  test("Search bar renders correctly", () => {
    render(<Search />);
    const inputElement = screen.getByPlaceholderText("moon");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("search__input");
  });
});
