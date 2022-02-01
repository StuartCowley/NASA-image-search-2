import { render, screen } from "@testing-library/react";
import App from "../components/App";

describe("App", () => {
  test("renders component correctly", () => {
    const { asFragment } = render(<App />);

    expect(asFragment()).toMatchSnapshot();
  });
  test("renders logo", () => {
    render(<App />);
    const imgElement = screen.getByAltText("nasaLogo");

    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveClass("nasa-logo");
  });
});
