'use client';

import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { FC } from 'react';
import FormButton from '@/components/atoms/FormButton';
import FormInput from '@/components/atoms/FormInput';
import { loginSchema } from '@/types/auth';
import { zodResolver } from '@hookform/resolvers/zod';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const formMethods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: FieldValues) => {
    // TODO: Server call

    // eslint-disable-next-line no-console
    console.log({ signUp: data });
    await new Promise((resolve) => setTimeout(resolve, 5000));

    formMethods.reset();
  };

  const isSubmitting: boolean = formMethods.formState.isSubmitting;

  return (
    <div className="flex flex-col w-fit gap-y-2">
      <h1 className="mb-4 text-2xl font-bold desktop:mb-2 desktop:text-xl tablet:mb-8 desktop:font-semibold">
        Sign In
      </h1>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormInput
            type="email"
            name="email"
            placeholder="enter email"
            label="Email Address *"
            disabled={isSubmitting}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="enter password"
            label="Password *"
            disabled={isSubmitting}
          />
          <FormButton text="Sign In" isLoading={isSubmitting} />
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
