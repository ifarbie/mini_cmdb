import { Fragment, useState } from 'react';
import { useFetcher } from 'react-router';
import type { Ip } from '~/types/Ip';
import NoDataTable from '../ui/NoDataTable';
import EditLink from '../ui/EditLink';
import DeleteLink from '../ui/DeleteLink';

type IpTableProps = {
  ips: Ip[];
};

const IpTable = ({ ips }: IpTableProps) => {
  const deleteFetcher = useFetcher();

  const [selectedIpIds, setSelectedIpIds] = useState<number[]>([]);

  const toggleGroups = (ipId: number) => {
    setSelectedIpIds((prev) => (prev.includes(ipId) ? prev.filter((id) => id !== ipId) : [...prev, ipId]));
  };

  return (
    <div className='overflow-hidden rounded-xl border bg-white'>
      <table className='w-full text-left'>
        <thead className='border-b bg-gray-50'>
          <tr>
            <th className='px-6 py-4 text-sm font-medium text-gray-500'> No </th> <th className='px-6 py-4 text-sm font-medium text-gray-500'> IP Address </th> <th className='px-6 py-4 text-sm font-medium text-gray-500'> Hostname </th>
            <th className='px-6 py-4 text-sm font-medium text-gray-500'> Groups Count </th> <th className='px-6 py-4 text-sm font-medium text-gray-500'> Actions </th>
          </tr>
        </thead>
        <tbody>
          {ips.length > 0 ? (
            ips.map((ip, index) => (
              <Fragment key={ip.id}>
                {/* Main IP Row */}
                <tr className='border-b last:border-0 hover:bg-gray-50'>
                  {/* No */} <td className='px-6 py-4 text-sm'> {index + 1} </td> {/* IP Address */}
                  <td className='px-6 py-4'>
                    <span className='font-mono text-sm font-medium'> {ip.ipAddress} </span>
                  </td>
                  {/* Hostname */} <td className='px-6 py-4 text-sm'> {ip.hostname} </td> {/* Groups */}
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <span className='text-sm text-gray-600'> {ip.groups.length} </span>
                      {ip.groups.length > 0 && (
                        <button type='button' onClick={() => toggleGroups(ip.id)} className='cursor-pointer text-xs font-medium text-blue-600 hover:text-blue-800 hover:underline'>
                          {selectedIpIds.includes(ip.id) ? 'Hide Groups' : 'View Groups'}
                        </button>
                      )}
                    </div>
                  </td>
                  {/* Actions */}
                  <td className='px-6 py-4'>
                    <div className='flex gap-3 text-sm'>
                      <EditLink to={`/ips/edit/${ip.id}`}> Edit </EditLink>
                      <deleteFetcher.Form method='delete'>
                        <input type='hidden' name='intent' value='delete-ip' /> <input type='hidden' name='ipId' value={ip.id} /> <DeleteLink isSubmitting={deleteFetcher.state === 'submitting'} />
                      </deleteFetcher.Form>
                    </div>
                  </td>
                </tr>
                {/* Groups Row */}
                {selectedIpIds.includes(ip.id) && (
                  <tr className='border-b bg-gray-50'>
                    <td colSpan={5} className='px-6 py-4'>
                      <div className='ml-8'>
                        <p className='mb-3 text-xs font-semibold text-gray-700'> Groups using this IP </p>
                        <div className='flex flex-wrap gap-2'>
                          {ip.groups.map((group) => (
                            <span key={group.id} className='rounded-lg border bg-white px-3 py-2 text-xs text-gray-700'>
                              {group.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </Fragment>
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
