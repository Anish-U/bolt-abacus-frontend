import { FC } from 'react';
import { ImSpinner8 } from 'react-icons/im';

export interface ButtonProps {
  type: 'primary' | 'secondary' | 'active' | 'purple' | 'blue' | 'black';
  text: string;
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({ type, text, isLoading }) => {
  return (
    <button
      className={`w-full px-3 py-2 font-semibold text-center rounded-lg text-md
				${!isLoading && 'duration-150 ease-in-out hover:shadow-golden'}
				${type === 'primary' && 'bg-gold disabled:bg-gold/30 text-black'}
				${type === 'secondary' && 'bg-black text-white border border-gold'}
				${type === 'active' && 'bg-gold text-black shadow-golden'}
				${type === 'purple' && 'bg-purple text-white hover:shadow-purpled'}
				${type === 'blue' && 'bg-blue text-white hover:shadow-blued'}
				${type === 'black' && 'text-gold border-2 border-gold'}
				`}
      disabled={isLoading}
    >
      {isLoading ? <ImSpinner8 className="animate-spin" size={24} /> : text}
    </button>
  );
};

Button.defaultProps = {
  isLoading: false,
};

export default Button;
