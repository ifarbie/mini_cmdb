import { useFetcher } from 'react-router';
import DeleteButton from '~/components/ui/DeleteButton';
import EditButton from '~/components/ui/EditButton';

type ApplicationDetailHeaderProps = {
  id: string | undefined;
  name: string;
  handleOpenEdit: () => void;
};

const ApplicationDetailHeader = ({ id, name, handleOpenEdit }: ApplicationDetailHeaderProps) => {
  const removeAppFetcher = useFetcher();

  return (
    <div className='mb-8 flex items-start justify-between'>
      <div>
        <p className='mb-1 text-sm text-gray-500'>Application ID: #{id}</p>

        <h1 className='text-3xl font-bold'>{name}</h1>
      </div>

      <div className='flex gap-3'>
        <EditButton onClick={handleOpenEdit} />

        <removeAppFetcher.Form method='delete'>
          <input type='hidden' name='intent' value='remove-app' />

          <input type='hidden' name='applicationId' value={id} />

          <DeleteButton isSubmitting={removeAppFetcher.state === 'submitting'} />
        </removeAppFetcher.Form>
      </div>
    </div>
  );
};

export default ApplicationDetailHeader;
