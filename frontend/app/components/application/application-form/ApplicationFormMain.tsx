import { Link, useFetcher } from 'react-router';

import BackToButton from '~/components/ui/BackToButton';
import PageHeader from '~/components/ui/PageHeader';

import type { Application } from '~/types/Application';

type ApplicationFormMainProps = {
  mode: 'create' | 'edit';
  application?: Application;
};

const ApplicationFormMain = ({ mode, application }: ApplicationFormMainProps) => {
  const fetcher = useFetcher();

  const isEdit = mode === 'edit';

  const title = isEdit ? 'Edit Application' : 'Add Application';

  const description = isEdit ? 'Update application information in CMDB.' : 'Create a new application in CMDB.';

  const submitText = isEdit ? 'Save Changes' : 'Save Application';

  const submittingText = isEdit ? 'Saving...' : 'Creating...';

  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      <BackToButton to='/applications'>Applications</BackToButton>

      <PageHeader title={title} description={description} />

      <fetcher.Form method={isEdit ? 'put' : 'post'} className='max-w-3xl rounded-xl border bg-white p-6'>
        {/* Intent */}
        <input type='hidden' name='intent' value={isEdit ? 'update' : 'create'} />

        {/* ID - hanya untuk edit */}
        {isEdit && <input type='hidden' name='applicationId' value={application?.id} />}

        {/* Name */}
        <div className='mb-6'>
          <label htmlFor='name' className='mb-2 block text-sm font-medium'>
            Application Name
          </label>

          <input id='name' name='name' type='text' defaultValue={application?.name ?? ''} placeholder='e.g. ALIFA' required className='w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300' />
        </div>

        {/* Environment */}
        <div className='mb-6'>
          <label htmlFor='environment' className='mb-2 block text-sm font-medium'>
            Environment
          </label>

          <select id='environment' name='environment' defaultValue={application?.environment ?? ''} required className='w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'>
            <option value=''>Select environment</option>

            <option value='Production'>Production</option>

            <option value='Development'>Development</option>

            <option value='Staging'>Staging</option>
          </select>
        </div>

        {/* Status */}
        <div className='mb-6'>
          <label htmlFor='status' className='mb-2 block text-sm font-medium'>
            Status
          </label>

          <select id='status' name='status' defaultValue={application?.status ?? 'GOOD'} className='w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'>
            <option value='GOOD'>Good</option>

            <option value='WARNING'>Warning</option>

            <option value='DOWN'>Down</option>
          </select>
        </div>

        {/* Description */}
        <div className='mb-8'>
          <label htmlFor='description' className='mb-2 block text-sm font-medium'>
            Description
          </label>

          <textarea
            id='description'
            name='description'
            defaultValue={application?.description ?? ''}
            placeholder='Enter application description'
            rows={5}
            className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
          />
        </div>

        {/* Actions */}
        <div className='flex justify-end gap-3 border-t pt-6'>
          <Link to='/applications' className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
            Cancel
          </Link>

          <button type='submit' disabled={fetcher.state === 'submitting'} className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50'>
            {fetcher.state === 'submitting' ? submittingText : submitText}
          </button>
        </div>
      </fetcher.Form>
    </main>
  );
};

export default ApplicationFormMain;
