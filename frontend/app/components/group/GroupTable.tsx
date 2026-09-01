import type { ApplicationGroup } from '~/types/ApplicationGroup';
import GroupRow from './GroupRow';

type GroupTableProps = {
  groups: ApplicationGroup[];
};

export default function GroupTable({ groups }: GroupTableProps) {
  if (groups.length === 0) {
    return (
      <div className='rounded-xl border p-8 text-center'>
        <h2 className='font-medium'>No groups found</h2>

        <p className='mt-1 text-sm text-gray-500'>There are currently no groups available.</p>
      </div>
    );
  }

  return (
    <div className='overflow-hidden rounded-xl border bg-white'>
      <table className='w-full text-left'>
        <thead className='border-b bg-gray-50'>
          <tr>
            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Group</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Application</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Description</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>IPs Count</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {groups.map((group) => (
            <GroupRow key={group.id} group={group} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
