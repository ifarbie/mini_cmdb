import { Link, useFetcher, useSearchParams } from 'react-router';
import BackToButton from '~/components/ui/BackToButton';
import PageHeader from '~/components/ui/PageHeader';
import type { Application } from '~/types/Application';

import type { ApplicationGroup } from '~/types/ApplicationGroup';

type GroupFormMainProps = {
  mode: 'create' | 'edit';

  group?: ApplicationGroup;

  applications?: Application[];
};

const GroupFormMain = ({ mode, group, applications = [] }: GroupFormMainProps) => {
  const isEdit = mode === 'edit';
  const fetcher = useFetcher();

  const [searchParams] = useSearchParams();
  const applicationId = searchParams.get('applicationId');
  const isFromApplication = Boolean(applicationId);

  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      {/* Back */}
      {isFromApplication ? <BackToButton to={`/applications/${applicationId}`}>Application</BackToButton> : <BackToButton to='/groups'>Groups</BackToButton>}

      {/* Header */}
      <PageHeader title={isEdit ? 'Edit Group' : 'Create Group'} description={isEdit ? 'Update group information.' : 'Create a new application group.'} />

      {/* Form Application */}
      <fetcher.Form method='post' className='max-w-3xl rounded-xl border bg-white p-6'>
        <div className='mb-5'>
          <label htmlFor='applicationId' className='mb-2 block text-sm font-medium'>
            Application
          </label>

          {isEdit ? (
            <input type='text' value={group?.application?.name ?? '-'} disabled className='w-full rounded-lg border bg-gray-50 px-4 py-2.5 text-sm text-gray-500' />
          ) : (
            <select id='applicationId' name='applicationId' required defaultValue='' className='w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'>
              <option value=''>Select application</option>

              {applications.map((application) => (
                <option key={application.id} value={application.id}>
                  {application.name}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Group Name */}
        <div className='mb-5'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Group Name
          </label>

          <input id='name' name='name' type='text' defaultValue={group?.name ?? ''} placeholder='e.g. ALIFA Production' required className='w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300' />
        </div>

        {/* Description */}
        <div className='mb-6'>
          <label htmlFor='description' className='mb-2 block text-sm font-medium'>
            Description
          </label>

          <textarea
            id='description'
            name='description'
            defaultValue={group?.description ?? ''}
            rows={5}
            placeholder='Enter group description'
            className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
          />
        </div>

        {/* Actions */}
        <div className='flex justify-end gap-3 border-t pt-5'>
          <Link to='/groups' className='rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
            Cancel
          </Link>

          <button type='submit' className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
            {isEdit ? 'Save Changes' : 'Create Group'}
          </button>
        </div>
      </fetcher.Form>
    </main>
  );
};

export default GroupFormMain;
