import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import Login from '../src/Components/Pages/LoginAndRegistration/LoginAndRegistration';

describe('Login', () => {
  it('should display an error message when the form is submitted with no username or password', () => {
    const { getByRole, getByText } = render(<Login />);
    const submitButton = getByRole('button', { name: 'Login' });
    fireEvent.click(submitButton);
    const errorMessage = getByText('email or password should not be empty');
    expect(errorMessage).toBeInTheDocument();
  });
});
