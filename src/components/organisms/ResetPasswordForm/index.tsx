'use client';

import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import ErrorMessage from '@/components/atoms/ErrorMessage';
import { FC } from 'react';
import FormButton from '@/components/atoms/FormButton';
import FormInput from '@/components/atoms/FormInput';
import { resetPasswordSchema } from '@/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';

interface ResetPasswordFormProps {}

const ResetPasswordForm: FC<ResetPasswordFormProps> = ({}) => {
  const formMethods = useForm({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    // TODO: Server call

    // eslint-disable-next-line no-console
    console.log({ resetPassword: data });
    await new Promise((resolve) => setTimeout(resolve, 3000));

    formMethods.reset();
  };

  const isSubmitting: boolean = formMethods.formState.isSubmitting;

  return (
    <div className="flex flex-col gap-y-2">
      <h1 className="mb-4 text-2xl font-bold desktop:mb-2 desktop:text-xl tablet:mb-8 desktop:font-semibold">
        Reset Password
      </h1>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormInput
            type="password"
            name="password"
            placeholder="enter password"
            label="Password *"
            disabled={isSubmitting}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            label="Confirm Password *"
            disabled={isSubmitting}
          />
          <FormButton text="Reset Password" isLoading={isSubmitting} />
          <div className="flex justify-center text-center">
            <ErrorMessage
              errMessage="Invalid credentials"
              iconRequired={true}
            />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ResetPasswordForm;
