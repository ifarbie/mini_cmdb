import { useEffect, useState } from 'react';
import { Link, useFetcher } from 'react-router';

import BackToButton from '~/components/ui/BackToButton';

type IpFormMainProps = {
  ip?: {
    id: number;
    ipAddress: string;
    hostname: string;
    description: string;
  };
};

const IpFormMain = ({ ip }: IpFormMainProps) => {
  const fetcher = useFetcher();
  const ipsFetcher = useFetcher();

  const isEdit = Boolean(ip);
  const isSubmitting = fetcher.state === 'submitting';

  const [ipAddress, setIpAddress] = useState(ip?.ipAddress ?? '');

  const [ipError, setIpError] = useState('');

  useEffect(() => {
    ipsFetcher.load('/ips');
  }, []);

  const ips = ipsFetcher.data?.ips ?? [];

  const validateIp = (value: string) => {
    const existingIp = ips.find((item: { id: number; ipAddress: string }) => item.ipAddress === value.trim() && item.id !== ip?.id);

    setIpError(existingIp ? 'IP address already exists.' : '');
  };

  const handleIpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    setIpAddress(value);
    validateIp(value);
  };

  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      <BackToButton to='/ips'>IP Addresses</BackToButton>

      <div className='mb-8'>
        <h1 className='cursor-pointer text-3xl font-bold'>{isEdit ? 'Edit IP Address' : 'Add IP Address'}</h1>

        <p className='mt-2 text-sm text-gray-500'>{isEdit ? 'Update IP address information.' : 'Add a new IP address.'}</p>
      </div>

      <fetcher.Form method={isEdit ? 'put' : 'post'} className='max-w-3xl rounded-xl border bg-white p-6'>
        {isEdit && <input type='hidden' name='ipId' value={ip?.id} />}

        <div className='mb-6'>
          <label htmlFor='ipAddress' className='mb-2 block text-sm font-medium'>
            IP Address
          </label>

          <input
            id='ipAddress'
            name='ipAddress'
            type='text'
            value={ipAddress}
            onChange={handleIpChange}
            placeholder='e.g. 192.168.1.10'
            required
            className={`w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 ${ipError ? 'border-red-500' : 'focus:ring-gray-300'}`}
          />

          {ipError && <p className='mt-2 text-sm text-red-600'>{ipError}</p>}
        </div>

        <div className='mb-6'>
          <label htmlFor='hostname' className='mb-2 block text-sm font-medium'>
            Hostname
          </label>

          <input
            id='hostname'
            name='hostname'
            type='text'
            defaultValue={ip?.hostname ?? ''}
            placeholder='e.g. server-production-01'
            required
            className='w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
          />
        </div>

        <div className='mb-8'>
          <label htmlFor='description' className='mb-2 block text-sm font-medium'>
            Description
          </label>

          <textarea
            id='description'
            name='description'
            defaultValue={ip?.description ?? ''}
            placeholder='Enter IP description'
            rows={5}
            className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
          />
        </div>

        <div className='flex justify-end gap-3 border-t pt-6'>
          <Link to='/ips' className='rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
            Cancel
          </Link>

          <button type='submit' disabled={isSubmitting || Boolean(ipError)} className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50'>
            {isSubmitting ? (isEdit ? 'Updating...' : 'Adding...') : isEdit ? 'Update IP' : 'Add IP'}
          </button>
        </div>
      </fetcher.Form>
    </main>
  );
};

export default IpFormMain;
