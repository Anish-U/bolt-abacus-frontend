import { render, screen } from '@testing-library/react';

import HomePage from '@/app/page';

describe('<HomePage/> unit test suit', () => {
  it('should have a heading of Home Page', async () => {
    render(<HomePage />);
    const ele = await screen.findByText('Home Page');
    expect(ele).toBeVisible();
  });
});
