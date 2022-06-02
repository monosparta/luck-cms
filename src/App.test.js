import { render, screen } from "@testing-library/react";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/index";

test("renders luck link", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/會員置物櫃管理系統/i);
  expect(linkElement).toBeInTheDocument();
});
