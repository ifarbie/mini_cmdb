import { NavLink, useFetcher } from 'react-router';
import type { ApplicationGroup } from '~/types/ApplicationGroup';
import EditLink from '../ui/EditLink';
import DeleteLink from '../ui/DeleteLink';
import ViewLink from '../ui/ViewLink';

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

      <td className='px-6 py-4'>
        <div className='font-medium'>{group.application.name}</div>

        <div className='text-xs text-gray-500'>#{group.application.id}</div>
      </td>

      <td className='max-w-xs truncate px-6 py-4 text-sm text-gray-500'>{group.description || '-'}</td>

      <td className='px-6 py-4'>{group.ips.length}</td>

      <td className='px-6 py-4'>
        <div className='flex gap-3 text-sm'>
          <ViewLink to={`/groups/${group.id}`}>View</ViewLink>

          <EditLink to={`/groups/edit/${group.id}`}>Edit</EditLink>

          <deleteGroupFetcher.Form method='delete'>
            <input type='hidden' name='intent' value='delete' />

            <input type='hidden' name='id' value={group.id} />

            <DeleteLink isSubmitting={deleteGroupFetcher.state === 'submitting'} />
          </deleteGroupFetcher.Form>
        </div>
      </td>
    </tr>
  );
}
