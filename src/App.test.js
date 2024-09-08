import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Cadastro de CLientes link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Cadastro de Clientes/i);
  expect(linkElement).toBeInTheDocument();
});
