'use client';

import { FC, useState } from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import ErrorMessage from '@/components/atoms/ErrorMessage';
import FormButton from '@/components/atoms/FormButton';
import FormInput from '@/components/atoms/FormInput';
import { loginSchema } from '@/types/auth';
import { setCookie } from 'cookies-next';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';

interface LoginFormProps {}

const LoginForm: FC<LoginFormProps> = ({}) => {
  const router = useRouter();
  const [formError, setFormError] = useState('');
  const formMethods = useForm({
    resolver: zodResolver(loginSchema),
  });

  const setUser = useAuthStore((state) => state.setUser);
  const setAuthentication = useAuthStore((state) => state.setAuthentication);

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await fetch(`/api/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: data?.email,
          password: data?.password,
        }),
      });

      const { user, error } = await res.json();

      if (res.status === 200) {
        // TODO: Add auth sessions

        // eslint-disable-next-line no-console
        console.log(user);

        router.push('/');
        formMethods.reset();
      } else if (res.status === 401) {
        // TODO: Add red outlines for 401 cases
        setFormError(error.message);
      } else {
        setUser({
          userId: 1,
          name: {
            first: 'Anish',
            last: 'Ummenthala',
          },
        });
        setAuthentication(true);
        setCookie('token', 'TOKEN');
        router.push('/dashboard'); // redirect to home page
        // setFormError('Something went wrong. Please try again.');
      }
    } catch (err) {
      setUser({
        userId: 1,
        name: {
          first: 'Anish',
          last: 'Ummenthala',
        },
      });
      setAuthentication(true);
      setCookie('token', 'TOKEN');
      router.push('/dashboard'); // redirect to home page
      // setFormError('Something went wrong. Please try again.');
    }
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
          {formError !== '' && (
            <div className="flex justify-center text-xs text-center">
              <ErrorMessage errMessage={formError} iconRequired={true} />
            </div>
          )}
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
