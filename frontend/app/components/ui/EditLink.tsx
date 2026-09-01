import React from 'react';
import { NavLink } from 'react-router';

type EditLinkProps = {
  to: string;
  children: React.ReactNode;
};

const EditLink = ({ to, children }: EditLinkProps) => {
  return (
    <NavLink to={to} className='cursor-pointer text-gray-500 hover:text-black hover:underline'>
      {children}
    </NavLink>
  );
};

export default EditLink;
