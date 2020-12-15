import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('a and b', () => {
  const a = 1;
  const b = 1;
  expect(a + b).toBe(2);
});

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
