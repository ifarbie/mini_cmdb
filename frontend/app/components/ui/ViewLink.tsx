import { NavLink } from 'react-router';

type ViewLinkProps = {
  to: string;
  children: React.ReactNode;
};

const ViewLink = ({ to, children }: ViewLinkProps) => {
  return (
    <NavLink to={to} className='cursor-pointer font-medium hover:underline'>
      {children}
    </NavLink>
  );
};

export default ViewLink;
