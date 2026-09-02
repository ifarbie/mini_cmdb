import { useFetcher } from 'react-router';
import DeleteLink from '~/components/ui/DeleteLink';

import type { Ip } from '~/types/Ip';

type GroupDetailIpSectionProps = {
  setIsAddIpOpen: (isTrue: boolean) => void;
  groupId: string | number | undefined;
  ips: Ip[];
};

type FetcherResponse = {
  success: boolean;
};

const GroupDetailIpSection = ({ groupId, setIsAddIpOpen, ips }: GroupDetailIpSectionProps) => {
  const removeIpFetcher = useFetcher<FetcherResponse>();
  console.log(ips, "disiniii");

  return (
    <section>
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <h2 className='text-lg font-semibold'>IP Addresses</h2>
          <p className='mt-1 text-sm text-gray-500'>IP addresses associated with this group.</p>
        </div>

        <button onClick={() => setIsAddIpOpen(true)} className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
          + Add IP
        </button>
      </div>

      {/* IP Table */}
      <div className='overflow-hidden rounded-xl border bg-white'>
        <table className='w-full text-left'>
          <thead className='border-b bg-gray-50'>
            <tr>
              <th className='px-6 py-4 text-sm font-medium text-gray-500'>IP Address</th>

              <th className='px-6 py-4 text-sm font-medium text-gray-500'>Hostname</th>

              <th className='px-6 py-4 text-sm font-medium text-gray-500'>Description</th>

              <th className='px-6 py-4 text-sm font-medium text-gray-500'>Action</th>
            </tr>
          </thead>

          <tbody>
            {ips.length > 0 ? (
              ips.map((ip) => (
                <tr key={ip.id} className='border-b last:border-0 hover:bg-gray-50'>
                  <td className='px-6 py-4'>
                    <span className='font-mono text-sm font-medium'>{ip.ipAddress}</span>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='font-mono text-sm font-medium'>{ip.hostname}</span>
                  </td>

                  <td className='px-6 py-4 text-sm text-gray-600'>{ip.description ? ip.description : '-'}</td>

                  <td className='px-6 py-4'>
                    <removeIpFetcher.Form method='delete'>
                      <input type='hidden' name='intent' value='remove-ip' />

                      <input type='hidden' name='groupId' value={groupId} />

                      <input type='hidden' name='ipId' value={ip.id} />

                      <DeleteLink isSubmitting={removeIpFetcher.state === 'submitting'} textSize='text-sm' />
                    </removeIpFetcher.Form>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className='px-6 py-14 text-center'>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6 text-gray-400'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5' />
                      </svg>
                    </div>

                    <p className='text-sm font-medium text-gray-900'>No IP addresses</p>

                    <p className='mt-1 text-sm text-gray-500'>This group doesn't have any IP addresses yet.</p>

                    <button onClick={() => setIsAddIpOpen(true)} className='cursor-pointer mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
                      + Add IP
                    </button>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default GroupDetailIpSection;
