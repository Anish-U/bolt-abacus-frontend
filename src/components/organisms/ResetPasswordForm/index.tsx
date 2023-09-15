'use client';

import { FieldValues, FormProvider, useForm } from 'react-hook-form';

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
        </form>
      </FormProvider>
    </div>
  );
};

export default ResetPasswordForm;
