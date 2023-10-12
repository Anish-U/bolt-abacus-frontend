import Button from '@/components/atoms/Button';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BoltAbacus | Page Not Found',
  description: 'The perfect app to learn and master abacus!',
};

const Custom404Page = () => {
  return (
    <main className="h-screen flex justify-around items-center flex-col">
      <div className="text-center">
        <h1 className="text-xxl gap-3 font-bold flex items-center">
          <span>4</span>
          <span>
            <Image src={'/icon.png'} alt={''} height={100} width={100} />
          </span>
          <span>4</span>
        </h1>
        <h1 className="text-lg font-bold p-4">Page Not Found</h1>
        <Link href="/">
          <Button type={'primary'} text={'Back to Home Page'} />
        </Link>
      </div>
    </main>
  );
};

export default Custom404Page;
