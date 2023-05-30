import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useLocation } from 'react-router-dom';
import LearningModesPage from './LearningModesPage';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: jest.fn(),
}));

describe('LearningModesPage', () => {
  beforeEach(() => {
    useLocation.mockReturnValue({ state: { modeIndex: 0 } });
  });

  it('renderuje tryby uczenia się', () => {
    render(
      <MemoryRouter>
        <LearningModesPage />
      </MemoryRouter>
    );

    const modesTitle = screen.getByTestId('modes-title');
    expect(modesTitle).toBeInTheDocument();
    expect(modesTitle.textContent).toBe('Tryby nauki');

    const modeButtons = screen.getAllByTestId(/mode-button-/);
    expect(modeButtons).toHaveLength(6);

    const modeDescriptions = screen.getAllByTestId(/mode-description-/);
    expect(modeDescriptions).toHaveLength(1);

    const modeImages = screen.getAllByTestId(/mode-image-/);
    expect(modeImages).toHaveLength(1);
  });

  it('Rozwija i zwija opis trybu', () => {
    render(
      <MemoryRouter>
        <LearningModesPage />
      </MemoryRouter>
    );

    const modeButton = screen.getByTestId('mode-button-0');
    expect(modeButton).toBeInTheDocument();

    const modeDescription = screen.getByTestId('mode-description-0');
    expect(modeDescription).toBeInTheDocument();

    const modeImage = screen.getByTestId('mode-image-0');
    expect(modeImage).toBeInTheDocument();

    const modeButton2 = screen.getByTestId('mode-button-1');
   

    // Rozwiń opis trybu
   userEvent.click(modeButton2);
   const modeDescription2 = screen.getByTestId('mode-description-1');
   const modeImage2 = screen.getByTestId('mode-image-1');
   
    expect(modeDescription2).toBeInTheDocument();
    expect(modeImage2).toBeInTheDocument();

    
    // Zwinięcie opisu trybu
    userEvent.click(modeButton);

    expect(modeDescription2).not.toBeInTheDocument();
    expect(modeImage2).not.toBeInTheDocument();
    
    
  });
});
