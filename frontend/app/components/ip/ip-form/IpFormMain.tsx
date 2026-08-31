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

  const isEdit = Boolean(ip);

  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      <BackToButton to='/ips'>IP Addresses</BackToButton>

      <div className='mb-8'>
        <h1 className='text-3xl font-bold'>{isEdit ? 'Edit IP Address' : 'Add IP Address'}</h1>

        <p className='mt-2 text-sm text-gray-500'>{isEdit ? 'Update IP address information.' : 'Add a new IP address.'}</p>
      </div>

      <fetcher.Form method={isEdit ? 'put' : 'post'} className='max-w-3xl rounded-xl border bg-white p-6'>
        {isEdit && <input type='hidden' name='ipId' value={ip?.id} />}

        {/* IP Address */}
        <div className='mb-6'>
          <label htmlFor='ipAddress' className='mb-2 block text-sm font-medium'>
            IP Address
          </label>

          <input
            id='ipAddress'
            name='ipAddress'
            type='text'
            defaultValue={ip?.ipAddress ?? ''}
            placeholder='e.g. 192.168.1.10'
            required
            className='w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
          />
        </div>

        {/* Hostname */}
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

        {/* Description */}
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

        {/* Actions */}
        <div className='flex justify-end gap-3 border-t pt-6'>
          <Link to='/ips' className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
            Cancel
          </Link>

          <button type='submit' disabled={fetcher.state === 'submitting'} className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50'>
            {fetcher.state === 'submitting' ? (isEdit ? 'Updating...' : 'Adding...') : isEdit ? 'Update IP' : 'Add IP'}
          </button>
        </div>
      </fetcher.Form>
    </main>
  );
};

export default IpFormMain;
