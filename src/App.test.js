import { render, screen } from "@testing-library/react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";


const container = document.getElementById("root");

test("renders luck link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/luck/i);
  expect(linkElement).toBeInTheDocument();
});
