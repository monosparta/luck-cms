import { render, screen } from '@testing-library/react';
import App from './App';

test('renders luck link', () => {
  render(<App />);
  const linkElement = screen.getByText(/立即登入/i);
  expect(linkElement).toBeInTheDocument();
});
