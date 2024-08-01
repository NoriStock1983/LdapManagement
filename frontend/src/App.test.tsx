import React from 'react';
import { render, screen } from '@testing-library/react';
//import App from './App';
import { SearchList } from './function/searchlist/searchlist';

test('renders learn react link', () => {
  render(<SearchList />);
  const linkElement = screen.getByText("SearchList");
  expect(linkElement).toBeInTheDocument();
});
