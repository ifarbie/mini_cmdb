import type React from 'react';
import { Link } from 'react-router';

type BackToButtonProps = {
    to: string
    children: React.ReactNode
}

const BackToButton = ({ to, children }: BackToButtonProps) => {
  return (
    <Link to={to} className='mb-6 inline-block text-sm text-gray-500 hover:text-gray-900'>
      ← Back to {children}
    </Link>
  );
};

export default BackToButton;
