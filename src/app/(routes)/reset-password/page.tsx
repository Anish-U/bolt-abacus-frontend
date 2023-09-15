import { FC } from 'react';
import ResetPasswordForm from '@/components/organisms/ResetPasswordForm';

interface ResetPasswordPageProps {}

const ResetPasswordPage: FC<ResetPasswordPageProps> = ({}) => {
  return (
    <main className="flex flex-col items-center h-screen">
      <h1>Reset Password Page</h1>
      <ResetPasswordForm />
    </main>
  );
};

export default ResetPasswordPage;
