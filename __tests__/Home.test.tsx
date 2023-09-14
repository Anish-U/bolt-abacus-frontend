import { render, screen } from '@testing-library/react';

import Home from '@/app/page';

it('should have a heading of Abacus', async () => {
  render(<Home />);
  const ele = await screen.findByText('Abacus');
  expect(ele).toBeVisible();
});
