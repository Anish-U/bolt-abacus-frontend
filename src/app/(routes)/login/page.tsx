import { FC } from 'react';
import HeroImage from '@/components/molecules/HeroImage';
import LoginForm from '@/components/organisms/LoginForm';
import NavBar from '@/components/molecules/NavBar';
import styles from './index.module.css';

interface LoginPageProps {}

const LoginPage: FC<LoginPageProps> = ({}) => {
  return (
    <main className="tablet:h-[80vh] tablet:overflow-hidden desktop:h-auto desktop:overflow-auto">
      <NavBar />
      <div
        className={`${styles.formSection} flex items-center justify-center px-2 desktop:pt-3`}
      >
        <div className="desktop:ml-6 tablet:h-full desktop:w-[30%] desktop:px-20 desktop:pt-12 tablet:flex tablet:items-center">
          <LoginForm />
        </div>
        <div className="hidden pl-10 pt-10 items-center justify-center tablet:hidden desktop:w-[70%] desktop:flex">
          <HeroImage />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
