import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Form from '../components/Fine/Form';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

const handleSubmit = jest.fn((e) => e.preventDefault());
const handleChange = jest.fn();
const handleHelpClick = jest.fn();

describe('Form tests', () => {
  it('rendering', async () => {
    render(
      <Form
        uin={'18810136191111001035'}
        helperUin={null}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleHelpClick={handleHelpClick}
      />
    );
    expect(
      screen.getByDisplayValue(/18810136191111001035/i)
    ).toBeInTheDocument();
  });
  it('enter uin and submiting', async () => {
    render(
      <Form
        uin={''}
        helperUin={null}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleHelpClick={handleHelpClick}
      />
    );
    userEvent.type(
      screen.getByLabelText(/Введите УИН/i),
      '18810136191111001035'
    );

    userEvent.click(screen.getByRole('button', { name: /Найти/i }));

    await waitFor(() => {
      expect(handleChange).toHaveBeenCalledTimes(20);
      expect(handleSubmit).toHaveBeenCalled();
    });
  });

  it('getHelp', async () => {
    render(
      <Form
        uin={'1881013619111100103'}
        helperUin={'18810136191111001035'}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        handleHelpClick={handleHelpClick}
      />
    );
    userEvent.click(screen.getByText(/18810136191111001035/i));

    await waitFor(() => {
      expect(handleHelpClick).toHaveBeenCalled();
    });
  });
});
