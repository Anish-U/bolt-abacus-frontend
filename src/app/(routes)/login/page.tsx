import { FC } from 'react';
import LoginForm from '@/components/organisms/LoginForm';
import NavBar from '@/components/molecules/NavBar';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <main className="flex flex-col items-center h-screen">
      <NavBar />
      <h1>LoginPage</h1>
      <LoginForm />
    </main>
  );
};

export default LoginPage;
