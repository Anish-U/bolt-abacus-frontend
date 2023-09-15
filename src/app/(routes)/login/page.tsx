import { FC } from 'react';
import LoginForm from '@/components/organisms/LoginForm';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <main className="flex flex-col items-center h-screen">
      <h1>LoginPage</h1>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
