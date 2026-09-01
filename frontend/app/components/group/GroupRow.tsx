import { NavLink, useFetcher } from 'react-router';
import type { ApplicationGroup } from '~/types/ApplicationGroup';

type GroupRowProps = {
  group: ApplicationGroup;
  index: string | number;
};

export default function GroupRow({ group, index }: GroupRowProps) {
  const deleteGroupFetcher = useFetcher();
  return (
    <tr className='border-b last:border-0'>
      <td className='px-6 py-4'>{index}</td>

      <td className='px-6 py-4'>
        <div className='font-medium'>{group.name}</div>

        <div className='text-xs text-gray-500'>#{group.id}</div>
      </td>

      <td className='px-6 py-4'>{group.application.name}</td>

      <td className='max-w-xs truncate px-6 py-4 text-sm text-gray-500'>{group.description || '-'}</td>

      <td className='px-6 py-4'>{group.ips.length}</td>

      <td className='px-6 py-4'>
        <div className='flex gap-3 text-sm'>
          <NavLink to={`/groups/edit/${group.id}`} className='cursor-pointer text-gray-500 hover:text-black'>
            Edit
          </NavLink>

          <deleteGroupFetcher.Form method='delete'>
            <input type='hidden' name='intent' value='delete' />

            <input type='hidden' name='id' value={group.id} />

            <button disabled={deleteGroupFetcher.state === 'submitting'} type='submit' className='cursor-pointer text-red-600 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50'>
              {deleteGroupFetcher.state === 'submitting' ? 'Deleting...' : 'Delete'}
            </button>
          </deleteGroupFetcher.Form>
        </div>
      </td>
    </tr>
  );
}
