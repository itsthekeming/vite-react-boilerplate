import { render } from "@testing-library/react";
import React from "react";
import App from "app";

test("it renders the component", () => {
  const { getByText } = render(<App />);

  expect(getByText("Hello World")).toBeInTheDocument();
});
