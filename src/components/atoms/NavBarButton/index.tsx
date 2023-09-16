import { FC } from 'react';

export interface NavBarButtonProps {
  text: string;
}

const NavBarButton: FC<NavBarButtonProps> = ({ text }) => {
  return (
    <div className="w-32">
      <button className="flex items-center justify-center min-w-full px-3 py-1 font-semibold text-center text-black rounded-lg bg-gold shadow-gold">
        {text}
      </button>
    </div>
  );
};

export default NavBarButton;
