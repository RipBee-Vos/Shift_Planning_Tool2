import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BackButton from '../../components/BackButton';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('BackButton', () => {
  it('calls router.back on click', () => {
    const back = jest.fn();
    useRouter.mockReturnValue({ back });

    render(<BackButton />);
    fireEvent.click(screen.getByRole('button'));

    expect(back).toHaveBeenCalled();
  });
});
