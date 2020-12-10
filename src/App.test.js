// import { render, screen } from '@testing-library/react';
import { shallow } from "enzyme";
import App from './App';

test('renders Construction text', () => {
  render(<App />);
  const element = screen.getByText(/Construction/i);
  expect(element).toBeInTheDocument();
});

//always will pass test
test('will always pass', () => {
  expect(true).toBe(true);
});

//real example
const sum = (a, b) => a + b;

test ('sum func', () => {
  expect(sum(70,5)).toBe(75);
});
