import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavBar from './NavBar';
import { BrowserRouter } from 'react-router-dom';

describe('NavBar', () => {
  it('renders the NavBar component', () => {
    render(
        <BrowserRouter>
        <NavBar />
        </BrowserRouter>
    );
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });
});
