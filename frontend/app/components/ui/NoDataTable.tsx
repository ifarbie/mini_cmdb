import { NavLink } from 'react-router';

type NoDataTableProps = {
  colSpan: number;
  title: string;
  description: string;
  to: string;
  linkText: string;
};

const NoDataTable = ({ colSpan, title, description, to, linkText }: NoDataTableProps) => {
  return (
    <tr>
      <td colSpan={colSpan} className='px-6 py-14 text-center'>
        <div className='flex flex-col items-center justify-center'>
          <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6 text-gray-400'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 7.5l-8.25-4.5-8.25 4.5m16.5 0v9l-8.25 4.5m8.25-13.5l-8.25 4.5m0 0L3.75 7.5m8.25 4.5v9' />
            </svg>
          </div>

          <p className='text-sm font-medium text-gray-900'>{title}</p>

          <p className='mt-1 text-sm text-gray-500'>{description}</p>

          <NavLink to={to} className='mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
            {linkText}
          </NavLink>
        </div>
      </td>
    </tr>
  );
};

export default NoDataTable;
