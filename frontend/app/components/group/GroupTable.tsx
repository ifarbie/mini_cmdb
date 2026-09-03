import type { ApplicationGroup } from '~/types/ApplicationGroup';
import GroupRow from './GroupRow';
import NoDataTable from '../ui/NoDataTable';

type GroupTableProps = {
  groups: ApplicationGroup[];
};

export default function GroupTable({ groups }: GroupTableProps) {
  return (
    <div className='overflow-hidden rounded-xl border bg-white'>
      <table className='w-full text-left'>
        <thead className='border-b bg-gray-50'>
          <tr>
            <th className='px-6 py-4 text-sm font-medium text-gray-500'>No</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Group</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Application</th>


            <th className='px-6 py-4 text-sm font-medium text-gray-500'>IPs Count</th>

            <th className='px-6 py-4 text-sm font-medium text-gray-500'>Actions</th>
          </tr>
        </thead>

        <tbody>
          {groups.length > 0 ? (
            groups.map((group, index) => <GroupRow key={group.id} index={index+1} group={group} />)
          ) : (
            <NoDataTable colSpan={5} to='/groups/new' title='No application groups found' description='There are currently no application group to display.' linkText='+ Add Application Group' />
          )}
        </tbody>
      </table>
    </div>
  );
}
