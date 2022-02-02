import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {
  test("component renders correctly", () => {
    const { asFragment } = render(<SearchResults />);

    expect(asFragment()).toMatchSnapshot();
  });
});
