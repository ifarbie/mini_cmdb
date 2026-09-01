import { useFetcher, useParams } from 'react-router';

import DeleteLink from '~/components/ui/DeleteLink';
import ViewLink from '~/components/ui/ViewLink';

import type { ApplicationGroup } from '~/types/ApplicationGroup';

type ApplicationDetailGroupsProps = {
  handleOpenAddGroup: () => void;
  handleOpenEditGroup: (group: ApplicationGroup) => void;
  groups: ApplicationGroup[];
};

const ApplicationDetailGroups = ({ handleOpenAddGroup, handleOpenEditGroup, groups }: ApplicationDetailGroupsProps) => {
  const { id } = useParams();

  const deleteGroupFetcher = useFetcher();

  return (
    <section>
      {/* Header */}
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <h2 className='text-lg font-semibold'>Application Groups</h2>

          <p className='mt-1 text-sm text-gray-500'>Groups associated with this application.</p>
        </div>

        <button type='button' onClick={handleOpenAddGroup} className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
          + Add Group
        </button>
      </div>

      {/* Groups Table */}
      <div className='overflow-hidden rounded-xl border bg-white'>
        <table className='w-full text-left'>
          <thead className='border-b bg-gray-50'>
            <tr>
              <th className='px-6 py-4 text-sm font-medium text-gray-500'>Group Name</th>

              <th className='px-6 py-4 text-sm font-medium text-gray-500'>IP Addresses</th>

              <th className='px-6 py-4 text-sm font-medium text-gray-500'>Description</th>

              <th className='px-6 py-4 text-sm font-medium text-gray-500'>Actions</th>
            </tr>
          </thead>

          <tbody>
            {groups.length > 0 ? (
              groups.map((group) => (
                <tr key={group.id} className='border-b last:border-0 hover:bg-gray-50'>
                  <td className='px-6 py-4'>
                    <p className='text-sm font-medium'>{group.name}</p>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-600'>{group.ips.length} IPs</span>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='text-sm text-gray-600'>{group.description || '-'}</span>
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex gap-3 text-sm'>
                      <ViewLink to={`/groups/${group.id}?applicationId=${id}`}>View</ViewLink>

                      <button type='button' onClick={() => handleOpenEditGroup(group)} className='cursor-pointer font-medium hover:underline'>
                        Edit
                      </button>

                      <deleteGroupFetcher.Form method='delete'>
                        <input type='hidden' name='intent' value='delete-group' />

                        <input type='hidden' name='groupId' value={group.id} />

                        <DeleteLink isSubmitting={deleteGroupFetcher.state === 'submitting'} />
                      </deleteGroupFetcher.Form>
                    </div>
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

                    <p className='text-sm font-medium text-gray-900'>No application groups</p>

                    <p className='mt-1 text-sm text-gray-500'>This application doesn't have any groups yet.</p>

                    <button onClick={handleOpenAddGroup} className='cursor-pointer mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
                      + Add Group
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

export default ApplicationDetailGroups;
