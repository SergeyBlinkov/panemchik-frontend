import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './app/App';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    console.log(linkElement);
    expect(linkElement).toBeInTheDocument();
});
