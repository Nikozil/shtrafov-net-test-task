import { render, waitFor } from '@testing-library/react';
import React from 'react';
import Home from '../pages';

describe('Home', () => {
  it('renders homepage unchanged', async () => {
    const home = render(<Home />);
    await waitFor(() => {
      expect(home).toMatchSnapshot();
    });
  });
});
