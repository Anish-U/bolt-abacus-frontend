import { render, screen } from '@testing-library/react';

import LoginPage from '@/app/(routes)/login/page';

describe('<LoginPage/> unit test suit', () => {
  it('should have a heading of Home Page', async () => {
    render(<LoginPage />);
    const ele = await screen.findByText('Login Page');
    expect(ele).toBeVisible();
  });
});
