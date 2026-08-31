import { Link } from 'react-router';

const IpHeader = () => {
  return (
    <div className='mb-8 flex items-center justify-between'>
      <div>
        <h1 className='text-3xl font-bold'>IP Addresses</h1>

        <p className='mt-2 text-sm text-gray-500'>
          Manage IP addresses used in the system.
        </p>
      </div>

      <Link
        to='/ips/new'
        className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'
      >
        + Add IP
      </Link>
    </div>
  );
};

export default IpHeader;