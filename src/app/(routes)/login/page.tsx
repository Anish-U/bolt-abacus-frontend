import { FC } from 'react';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <main className="h-screen flex justify-around items-center">
      <h1 className="text-lg font-medium font-sans">Login Page</h1>
    </main>
  );
};

export default LoginPage;
