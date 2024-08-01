import Search from "../Components/HeaderTop";
import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Search', () => {
  test('Should toggle search form visibility', () => {
    render(
      <BrowserRouter>
        <Search />
      </BrowserRouter>
    );

    // Check that the search form is not visible initially
    expect(screen.queryByTestId('search-form')).not.toBeVisible();

    // Find the button to display the search form and click it
    const searchBoxOpener = screen.getByTestId('display-search-box');
    fireEvent.click(searchBoxOpener);

    // Check that the search form is now visible
    expect(screen.getByTestId('search-form')).not.toHaveStyle('display: none;');

    // Interact with the search input
    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'test search' } });
    expect(input.value).toBe('test search');

    // Check that the submit button is enabled
    const submitButton = screen.getByTestId('search-btn');
    expect(submitButton).toBeEnabled();

    // Click the submit button and verify the input is cleared
    fireEvent.click(submitButton);
    expect(input.value).toBe('');
  });
});
