'use client';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FC, useState } from 'react';

import BrandLogo from '@/components/atoms/BrandLogo';
import NavBarButton from '@/components/atoms/NavBarButton';
import NavBarLink from '@/components/atoms/NavBarLink';

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full h-24">
      <div className="flex items-center justify-between w-full h-full px-4 tablet:px-10 desktop:px-20">
        <BrandLogo />
        <div>
          <ul className="items-center hidden tablet:flex desktop:flex">
            <NavBarLink type="desktop" href="/about">
              About
            </NavBarLink>
            <NavBarLink type="desktop" href="/services">
              Our Services
            </NavBarLink>
            <NavBarLink type="desktop" href="/contact">
              Contact
            </NavBarLink>
            <NavBarLink type="desktop" href="/login">
              <NavBarButton text={'Sign In'} />
            </NavBarLink>
          </ul>
        </div>
        <div
          onClick={handleMenuClick}
          className={`cursor-pointer tablet:hidden desktop:hidden ${
            menuOpen ? 'hidden' : ''
          }`}
        >
          <AiOutlineMenu size={28} className="text-gold" />
        </div>
        <div
          className={`z-1 fixed w-[100%] h-screen p-10 top-0 tablet:hidden desktop:hidden bg-black ease-in duration-500
					${menuOpen ? 'left-0' : 'left-[100%] opacity-0'}`}
        >
          <div className="flex items-center justify-end w-full">
            <div onClick={handleMenuClick} className="cursor-pointer">
              <AiOutlineClose size={28} className="text-gold" />
            </div>
          </div>
          <div className="flex-col">
            <ul>
              <NavBarLink type="mobile" href="/" onClick={handleMenuClick}>
                Home
              </NavBarLink>
              <NavBarLink type="mobile" href="/about" onClick={handleMenuClick}>
                About
              </NavBarLink>
              <NavBarLink
                type="mobile"
                href="/services"
                onClick={handleMenuClick}
              >
                Our Services
              </NavBarLink>
              <NavBarLink
                type="mobile"
                href="/contact"
                onClick={handleMenuClick}
              >
                Contact
              </NavBarLink>
              <NavBarLink type="mobile" href="/login" onClick={handleMenuClick}>
                <NavBarButton text={'Sign In'} />
              </NavBarLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;