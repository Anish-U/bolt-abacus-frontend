import Button from '@/components/atoms/Button';
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ErrorBoxProps {
  errorMessage: string;
  link: string;
  buttonText: string;
}

const ErrorBox: FC<ErrorBoxProps> = ({ errorMessage, link, buttonText }) => {
  return (
    <div className="p-12 mt-10 flex justify-center flex-col gap-6 items-center">
      <Image src={'/icon.png'} alt={'loading'} height={100} width={100} />
      <h1 className="text-lg font-medium font-sans">{errorMessage}</h1>
      <div className="min-w-[150px]">
        <Link href={link}>
          <Button type={'primary'} text={buttonText} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorBox;
