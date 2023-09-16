import { FC } from 'react';
import ResetPasswordForm from '@/components/organisms/ResetPasswordForm';

interface ResetPasswordPageProps {}

const ResetPasswordPage: FC<ResetPasswordPageProps> = ({}) => {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <ResetPasswordForm />
    </main>
  );
};

export default ResetPasswordPage;
