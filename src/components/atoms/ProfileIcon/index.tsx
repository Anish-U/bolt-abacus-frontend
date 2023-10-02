import { FC } from 'react';

export interface ProfileIconProps {
  text: string;
}

const ProfileIcon: FC<ProfileIconProps> = ({ text }) => {
  return (
    <div className="rounded-full bg-lightBlue h-11 w-11 flex items-center justify-center">
      <p className="text-black font-medium uppercase">{text}</p>
    </div>
  );
};

export default ProfileIcon;
