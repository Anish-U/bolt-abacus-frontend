import { FC } from 'react';
import { ImSpinner8 } from 'react-icons/im';

export interface FormButtonProps {
  text: string;
  isLoading: boolean;
}

const FormButton: FC<FormButtonProps> = ({ text, isLoading }) => {
  return (
    <div className="max-w-md pt-1 w-80">
      <button
        className={`flex items-center justify-center min-w-full px-3 py-2 my-3 font-semibold text-center text-black rounded-lg bg-gold disabled:bg-gold/30
				${!isLoading && 'duration-150 ease-in-out hover:shadow-gold'}`}
        disabled={isLoading}
      >
        {isLoading ? <ImSpinner8 className="animate-spin" size={24} /> : text}
      </button>
    </div>
  );
};

export default FormButton;
