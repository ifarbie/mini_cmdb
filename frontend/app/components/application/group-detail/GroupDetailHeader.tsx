import { useFetcher } from "react-router";

type GroupDetailHeaderProps = {
  applicationId: number | string | undefined;
  groupId: number | string | undefined;
  name: string;
  applicationName: string;
  handleOpenEdit: () => void;
};

const GroupDetailHeader = ({ applicationId, groupId, name, applicationName, handleOpenEdit }: GroupDetailHeaderProps) => {
  const deleteGroupFetcher = useFetcher();

  return (
    <div className='mb-8 flex items-start justify-between'>
      <div>
        <p className='mb-1 text-sm text-gray-500'>Group ID: #{groupId}</p>

        <h1 className='text-3xl font-bold'>{name}</h1>

        <p className='mt-2 text-sm text-gray-500'>
          Application: <span className='font-medium text-gray-900'>{applicationName}</span>
        </p>
      </div>

      <div className='flex gap-3'>
        <button onClick={handleOpenEdit} className='cursor-pointer rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50'>
          Edit
        </button>

        <deleteGroupFetcher.Form method='delete'>
          <input type='hidden' name='intent' value='delete-group' />

          <input type='hidden' name='groupId' value={groupId} />

          <input type='hidden' name='applicationId' value={applicationId} />

          <button disabled={deleteGroupFetcher.state === 'submitting'} type='submit' className='cursor-pointer rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700'>
            {deleteGroupFetcher.state === 'submitting' ? 'Deleting...' : 'Delete'}
          </button>
        </deleteGroupFetcher.Form>
      </div>
    </div>
  );
};

export default GroupDetailHeader;
