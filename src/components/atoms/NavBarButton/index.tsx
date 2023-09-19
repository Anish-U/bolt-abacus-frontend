import { FC } from 'react';

export interface NavBarButtonProps {
  text: string;
}

const NavBarButton: FC<NavBarButtonProps> = ({ text }) => {
  return (
    <div className="w-44">
      <button className="flex items-center justify-center min-w-full px-3.5 py-1.5 font-semibold text-center text-black rounded-lg bg-gold shadow-golden">
        {text}
      </button>
    </div>
  );
};

export default NavBarButton;
