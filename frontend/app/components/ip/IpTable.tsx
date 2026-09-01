import { useFetcher } from 'react-router';

import type { Ip } from '~/types/Ip';
import NoDataTable from '../ui/NoDataTable';
import EditLink from '../ui/EditLink';
import DeleteLink from '../ui/DeleteLink';

type IpTableProps = {
  ips: Ip[];
};

type DeleteIpResponse = {
  success: boolean;
  intent: string;
};

const IpTable = ({ ips }: IpTableProps) => {
  const deleteFetcher = useFetcher<DeleteIpResponse>();

  return (
    <div className='overflow-hidden rounded-xl border bg-white'>
      <table className='w-full text-left'>
        <thead className='border-b bg-gray-50'>
          <tr>
            <th className='px-6 py-4 text-sm font-medium text-gray-500'>No</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>IP Address</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Hostname</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Description</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Groups Count</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {ips.length > 0 ? (
            ips.map((ip, index) => (
              <tr key={ip.id} className='border-b last:border-0 hover:bg-gray-50'>
                <td className='px-6 py-4 text-sm'>{index + 1}</td>

                <td className='px-6 py-4'>
                  <span className='font-mono text-sm font-medium'>{ip.ipAddress}</span>
                </td>

                <td className='px-6 py-4 text-sm'>{ip.hostname}</td>

                <td className='px-6 py-4 text-sm text-gray-600'>{ip.description || '-'}</td>

                <td className='px-6 py-4 text-sm text-gray-600'>{ip.groups.length}</td>

                <td className='px-6 py-4'>
                  <div className='flex gap-3 text-sm'>
                    <EditLink to={`/ips/edit/${ip.id}`}>Edit</EditLink>

                    <deleteFetcher.Form method='delete'>
                      <input type='hidden' name='intent' value='delete-ip' />

                      <input type='hidden' name='ipId' value={ip.id} />

                      <DeleteLink isSubmitting={deleteFetcher.state === 'submitting'} />
                    </deleteFetcher.Form>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <NoDataTable colSpan={5} to='/ips/new' title='No ip address found' description='There are currently no ips to display.' linkText='+ Add Ip' />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default IpTable;
