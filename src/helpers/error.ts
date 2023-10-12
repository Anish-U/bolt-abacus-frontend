export const getErrorMessage = (error: unknown) => {
  if (!error) return 'Something went wrong';
  if (error instanceof Error) return String(error.message);
  return String(error);
};
