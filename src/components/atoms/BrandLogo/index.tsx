import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/logo.png';

export interface BrandLogoProps {}

const BrandLogo: FC<BrandLogoProps> = ({}) => {
  return (
    <Link href="/">
      <Image
        src={Logo}
        alt="boltAbacus logo"
        width={200}
        height={50}
        className="cursor-pointer"
      />
    </Link>
  );
};

export default BrandLogo;
