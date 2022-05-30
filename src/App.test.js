import { render, screen } from "@testing-library/react";
import App from "./App";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/index";


const container = document.getElementById("root");
const root = createRoot(container);

test("renders learn react link", () => {
  root.render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
