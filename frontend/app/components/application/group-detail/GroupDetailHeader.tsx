import { useFetcher } from 'react-router';
import type { Application } from '~/types/Application';
import type { ApplicationGroup } from '~/types/ApplicationGroup';

type GroupDetailHeaderProps = {
  application: Application;
  groupDetail: ApplicationGroup;
  handleOpenEdit: () => void;
};

const GroupDetailHeader = ({ application, groupDetail, handleOpenEdit }: GroupDetailHeaderProps) => {
  const deleteGroupFetcher = useFetcher();

  return (
    <div className='mb-8 flex items-start justify-between'>
      <div>
        <p className='mb-1 text-sm text-gray-500'>Group ID: #{groupDetail.id}</p>

        <h1 className='text-3xl font-bold'>{groupDetail.name}</h1>

        <p className='mt-2 text-sm text-gray-500'>
          Application: <span className='font-medium text-gray-900'>{application.name}</span>
        </p>
      </div>

      <div className='flex gap-3'>
        <button onClick={handleOpenEdit} className='cursor-pointer rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50'>
          Edit
        </button>

        <deleteGroupFetcher.Form method='delete'>
          <input type='hidden' name='intent' value='delete-group' />

          <input type='hidden' name='groupId' value={groupDetail.id} />

          <input type='hidden' name='applicationId' value={application.id} />

          <button disabled={deleteGroupFetcher.state === 'submitting'} type='submit' className='cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700'>
            {deleteGroupFetcher.state === 'submitting' ? 'Deleting...' : 'Delete'}
          </button>
        </deleteGroupFetcher.Form>
      </div>
    </div>
  );
};

export default GroupDetailHeader;
