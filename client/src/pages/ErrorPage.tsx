// client/src/pages/ErrorPage.tsx
import { useRouteError } from 'react-router-dom';

interface ErrorPageProps {
  message?: string;
}

const ErrorPage = ({ message }: ErrorPageProps) => {
  const error = useRouteError();
  const errorMessage = message || (error instanceof Error ? error.message : 'An unexpected error occurred');

  return (
    <div className="error-page">
      <h1>Oops!</h1>
      <p>{errorMessage}</p>
    </div>
  );
};

export default ErrorPage;