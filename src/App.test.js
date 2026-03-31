import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Quick Hunt/i);
  expect(titleElement).toBeInTheDocument();
});

test('nightmare mode caps selection to two evidences', () => {
  render(<App />);

  const nightmareButton = screen.getByRole('button', { name: /nightmare mode/i });
  const fingerprintsButton = screen.getByLabelText(/toggle fingerprints/i);
  const freezingButton = screen.getByLabelText(/toggle freezing temperatures/i);
  const ghostOrbsButton = screen.getByLabelText(/toggle ghost orbs/i);

  fireEvent.click(nightmareButton);
  fireEvent.click(fingerprintsButton);
  fireEvent.click(freezingButton);
  fireEvent.click(ghostOrbsButton);

  expect(fingerprintsButton).toHaveAttribute('aria-pressed', 'true');
  expect(freezingButton).toHaveAttribute('aria-pressed', 'true');
  expect(ghostOrbsButton).toHaveAttribute('aria-pressed', 'false');
});

test('restart clears selected evidence without reloading page', () => {
  render(<App />);

  const fingerprintsButton = screen.getByLabelText(/toggle fingerprints/i);
  const restartButton = screen.getByRole('button', { name: /restart/i });

  fireEvent.click(fingerprintsButton);
  expect(fingerprintsButton).toHaveAttribute('aria-pressed', 'true');

  fireEvent.click(restartButton);
  expect(fingerprintsButton).toHaveAttribute('aria-pressed', 'false');
});
