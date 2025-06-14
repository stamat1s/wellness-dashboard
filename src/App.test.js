import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import * as api from './services/api';

jest.mock('./services/api');

describe('Wellness Dashboard App', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('renders login form', () => {
    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/login/i)).toBeInTheDocument();
  });

  test('logs in with correct credentials and redirects to dashboard', async () => {
    const fakeUser = {
      first_name: 'John',
      last_name: 'Doe',
      role: 'User',
      team_name: 'Marketing',
      department_name: 'Growth',
      wellness_score: 85,
      profile_picture: 'https://via.placeholder.com/150',
    };

    api.fetchUser.mockResolvedValue(fakeUser);
    api.fetchMetrics.mockResolvedValue([{ date: '2023-06-01', value: 30 }]);
    api.fetchTip.mockResolvedValue('Stay hydrated!');

    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'testuser' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'wellics123' },
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    await waitFor(() => {
      expect(screen.getByText(/wellness score/i)).toBeInTheDocument();
      expect(screen.getByText(/John Doe/)).toBeInTheDocument();
    });
  });

  test('shows alert for invalid credentials', () => {
    window.alert = jest.fn();

    render(
      <MemoryRouter initialEntries={['/login']}>
        <App />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByPlaceholderText(/username/i), {
      target: { value: 'wronguser' },
    });
    fireEvent.change(screen.getByPlaceholderText(/password/i), {
      target: { value: 'wrongpass' },
    });
    fireEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(window.alert).toHaveBeenCalledWith('Invalid credentials');
  });
});
