'use client';

import ErrorBox from '@/components/molecules/ErrorBox';
import React from 'react';
import { getCookie } from 'cookies-next';

function IsAuthStudent<T>(Component: React.ComponentType<T>) {
  // eslint-disable-next-line react/display-name
  return (props: T) => {
    if (typeof window !== 'undefined') {
      const authToken = getCookie('token');
      const userToken = getCookie('user');

      if (!authToken || !userToken) {
        return (
          <ErrorBox
            errorMessage={'Please Login to view this page'}
            link={'/login'}
            buttonText={'Sign In'}
          />
        );
      }

      return <Component {...props!} />;
    }

    return null;
  };
}

export default IsAuthStudent;
