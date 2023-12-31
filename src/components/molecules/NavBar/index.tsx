'use client';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FC, useState } from 'react';

import BrandLogo from '@/components/atoms/BrandLogo';
import Button from '@/components/atoms/Button';
import NavBarLink from '@/components/atoms/NavBarLink';
import ProfileIcon from '@/components/atoms/ProfileIcon';
import { deleteCookie } from 'cookies-next';
import { useAuthStore } from '@/store/authStore';

export interface NavBarProps {}

const NavBar: FC<NavBarProps> = ({}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const logOutUser = async () => {
    await logout();
    deleteCookie('token');
    deleteCookie('user');
  };

  return (
    <nav className="w-full h-24 max-h-24">
      <div className="flex items-center justify-between w-full h-full px-4 tablet:px-10 desktop:px-20">
        <BrandLogo />
        <div>
          <ul className="items-center hidden tablet:flex desktop:flex">
            <NavBarLink type="desktop" href="/#about">
              About
            </NavBarLink>
            <NavBarLink type="desktop" href="/#pricing">
              Services
            </NavBarLink>
            {!user ? (
              <NavBarLink type="desktop" href="/login">
                <div className="w-[120px] desktop:w-[187px]">
                  <Button type="active" text="Sign In" />
                </div>
              </NavBarLink>
            ) : (
              <>
                <NavBarLink type="desktop" href="/login" onclick={logOutUser}>
                  Log out
                </NavBarLink>
                <NavBarLink type="desktop" href="/profile">
                  <ProfileIcon
                    text={user.name.first.charAt(0) + user.name.last.charAt(0)}
                  />
                </NavBarLink>
              </>
            )}
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
          className={`fixed z-[99] w-[100%] h-screen overflow-hidden p-10 top-0 tablet:hidden desktop:hidden bg-black ease-in duration-500
					${menuOpen ? 'left-0' : 'left-[100%] opacity-0'}`}
        >
          <div className="flex items-center justify-end w-full">
            <div onClick={handleMenuClick} className="cursor-pointer">
              <AiOutlineClose size={28} className="text-gold" />
            </div>
          </div>
          <div className="flex-col">
            <ul>
              <NavBarLink type="mobile" href="/" onclick={handleMenuClick}>
                Home
              </NavBarLink>
              {!user ? (
                <NavBarLink
                  type="mobile"
                  href="/login"
                  onclick={handleMenuClick}
                >
                  <div className="w-[120px] desktop:w-[187px]">
                    <Button type="active" text="Sign In" />
                  </div>
                </NavBarLink>
              ) : (
                <>
                  <NavBarLink type="mobile" href="/login" onclick={logOutUser}>
                    Log out
                  </NavBarLink>
                  <NavBarLink type="mobile" href="/profile">
                    <ProfileIcon
                      text={
                        user.name.first.charAt(0) + user.name.last.charAt(0)
                      }
                    />
                  </NavBarLink>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
