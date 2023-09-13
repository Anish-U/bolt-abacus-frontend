import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

it('sss', () => {
  render(<Home />);

  const ele = screen.getByText('Docs');

  expect(ele).toBeInTheDocument();
});
