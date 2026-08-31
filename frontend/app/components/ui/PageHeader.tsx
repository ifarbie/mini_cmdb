import { Link } from 'react-router';

type PageHeaderProps = {
  title: string;
  description: string;
  buttonText?: string;
  to?: string;
};

const PageHeader = ({ title, description, buttonText, to }: PageHeaderProps) => {
  return (
    <div className='mb-8 flex items-center justify-between'>
      <div>
        <h1 className='text-3xl font-bold'>{title}</h1>

        <p className='mt-2 text-sm text-gray-500'>{description}</p>
      </div>

      {buttonText && to && (
        <Link to={to} className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
          {buttonText}
        </Link>
      )}
    </div>
  );
};

export default PageHeader;
