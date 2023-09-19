import { FC } from 'react';
import { ImSpinner8 } from 'react-icons/im';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'active';
  text: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ type, text, isLoading }) => {
  return (
    <div className="w-[120px] desktop:w-[187px]">
      <button
        className={`min-w-full px-3 py-2 font-semibold text-center rounded-lg
				${!isLoading && 'duration-150 ease-in-out hover:shadow-golden'}
				${type === 'primary' && 'bg-gold disabled:bg-gold/30 text-black'}
				${type === 'secondary' && 'bg-black text-white border border-gold'}
				${type === 'active' && 'bg-gold text-black shadow-golden'}
				`}
        disabled={isLoading}
      >
        {isLoading ? <ImSpinner8 className="animate-spin" size={24} /> : text}
      </button>
    </div>
  );
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
