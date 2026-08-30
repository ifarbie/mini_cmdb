import { Link } from 'react-router';
import type { ApplicationGroup } from '~/types/ApplicationGroup';

type ApplicationDetailGroupsProps = {
  handleOpenAddGroup: () => void;
  groups: ApplicationGroup[];
};

const ApplicationDetailGroups = ({ handleOpenAddGroup, groups }: ApplicationDetailGroupsProps) => {
  return (
    <section>
      <div className='mb-4 flex items-center justify-between'>
        <div>
          <h2 className='text-lg font-semibold'>Application Groups</h2>

          <p className='mt-1 text-sm text-gray-500'>Groups associated with this application.</p>
        </div>

        <button onClick={handleOpenAddGroup} className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
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

              <th className='px-6 py-4 text-sm font-medium text-gray-500'>Action</th>
            </tr>
          </thead>

          <tbody>
            {groups.map((group) => (
              <tr key={group.id} className='border-b last:border-0 hover:bg-gray-50'>
                <td className='px-6 py-4'>
                  <p className='text-sm font-medium'>{group.name}</p>
                </td>

                <td className='px-6 py-4'>
                  <span className='text-sm text-gray-600'>{group.ips.length} IPs</span>
                </td>

                <td className='px-6 py-4'>
                  <Link to={`/groups/${group.id}`} className='text-sm font-medium hover:underline'>
                    View →
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ApplicationDetailGroups;
