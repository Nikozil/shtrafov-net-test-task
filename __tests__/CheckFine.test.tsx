import { render, waitFor } from '@testing-library/react';
import React from 'react';
import CheckFine from '../components/Fine/CheckFine';

describe('CheckFine', () => {
  it('renders unchanged', async () => {
    const finecomp = render(<CheckFine />);
    await waitFor(() => {
      expect(finecomp).toMatchSnapshot();
    });
  });
});
