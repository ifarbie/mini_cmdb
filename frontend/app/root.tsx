import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration } from 'react-router';

import type { Route } from './+types/root';
import './app.css';
import Header from './components/ui/Header';
import Sidebar from './components/ui/Sidebar';

export const links: Route.LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap',
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <div className='min-h-screen bg-gray-50'>
          <Header />
          <div className='flex'>
            <Sidebar />
            {children}
          </div>
          <ScrollRestoration />
          <Scripts />
        </div>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = 'Oops!';
  let details = 'An unexpected error occurred.';
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      message = '404';
      details = 'The page you are looking for could not be found.';
    } else {
      message = `Error ${error.status}`;
      details = error.statusText || details;
    }
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className='flex min-h-[calc(100vh-64px)] flex-1 items-center justify-center bg-gray-50 px-6 py-12'>
      <div className='w-full max-w-lg text-center'>
        {/* Icon */}
        <div className='mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-10 w-10 text-gray-500'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M9.75 9.75 14.25 14.25M14.25 9.75 9.75 14.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z' />
          </svg>
        </div>

        {/* Content */}
        <p className='mb-2 text-sm font-medium uppercase tracking-widest text-gray-500'>Page Not Found</p>

        <h1 className='text-7xl font-bold tracking-tight text-gray-900'>{message}</h1>

        <p className='mx-auto mt-4 max-w-md text-base leading-7 text-gray-500'>{details}</p>

        {/* Actions */}
        {isRouteErrorResponse(error) && error.status === 404 && (
          <div className='mt-8 flex flex-col justify-center gap-3 sm:flex-row'>
            <button type='button' onClick={() => window.history.back()} className='rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100'>
              Go Back
            </button>

            <a href='/' className='rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-gray-800'>
              Go to Dashboard
            </a>
          </div>
        )}

        {/* Development Error */}
        {stack && (
          <details className='mt-10 rounded-lg border border-gray-300 bg-white p-4 text-left'>
            <summary className='cursor-pointer text-sm font-medium text-gray-700'>Error details</summary>

            <pre className='mt-3 max-h-64 overflow-auto text-xs text-gray-600'>
              <code>{stack}</code>
            </pre>
          </details>
        )}
      </div>
    </main>
  );
}
