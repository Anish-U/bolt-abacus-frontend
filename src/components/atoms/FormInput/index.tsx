'use client';

import ErrorMessage from '../ErrorMessage';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

export interface FormInputProps {
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder: string;
  label: string;
  disabled?: boolean;
}

const FormInput: FC<FormInputProps> = ({ name, label, ...props }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[name]?.message as string | undefined;

  return (
    <div className="flex flex-col max-w-md py-1 my-3 gap-y-1 w-80">
      <label className="font-semibold text-white text-md" htmlFor={label}>
        {label}
      </label>
      <input
        className={`min-w-fit px-3 py-2 text-lg focus:outline-none placeholder:text-grey border border-solid rounded-lg text-white bg-black
        ${
          error
            ? 'border-red/50 focus:border-red'
            : 'border-gold/50 focus:border-gold'
        }`}
        {...register(name)}
        {...props}
        id={label}
      />
      {error ? <ErrorMessage errMessage={error} iconRequired /> : null}
    </div>
  );
};

export default FormInput;
