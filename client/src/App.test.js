import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {render} from '@testing-library/react';

test('renders without crashing', () => {
  render(<App />)
})

test('displays if there are multiple buttons', () => {
  const container = render(<App />)
  container.getByRole('button')
})

test('displays the element type for Orange', () => {
  const container = render(<App />)
  container.getByText('Orange')
})
