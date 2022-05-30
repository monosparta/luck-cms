import { render, screen } from '@testing-library/react';
import App from './App';

test('renders luck link', () => {
  render(<App />);
  const linkElement = screen.getByText(/luck/i);
  expect(linkElement).toBeInTheDocument();
});
