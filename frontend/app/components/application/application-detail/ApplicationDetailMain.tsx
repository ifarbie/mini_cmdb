import { Link, useFetcher, useParams } from 'react-router';
import { useEffect, useState } from 'react';

import ApplicationDetailHeader from './ApplicationDetailHeader';
import ApplicationDetailStatistic from './ApplicationDetailStatistic';
import ApplicationDetailDescription from './ApplicationDetailDescription';
import ApplicationDetailGroups from './ApplicationDetailGroups';
import BackToButton from '~/components/ui/BackToButton';

import type { Application } from '~/types/Application';

type ApplicationDetailMainProps = {
  application: Application;
};

const ApplicationDetailMain = ({ application }: ApplicationDetailMainProps) => {
  const { id } = useParams();

  const updateFetcher = useFetcher();
  const addGroupFetcher = useFetcher();

  // =========================
  // Edit Application
  // =========================

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [editName, setEditName] = useState(application.name);
  const [editEnvironment, setEditEnvironment] = useState(application.environment);
  const [editStatus, setEditStatus] = useState<Application['status']>(application.status);
  const [editDescription, setEditDescription] = useState(application.description);

  const handleOpenEdit = () => {
    setEditName(application.name);
    setEditEnvironment(application.environment);
    setEditStatus(application.status);
    setEditDescription(application.description);

    setIsEditOpen(true);
  };

  // =========================
  // Add Group
  // =========================

  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false);

  const [groupName, setGroupName] = useState('');
  const [groupDescription, setGroupDescription] = useState('');

  const handleOpenAddGroup = () => {
    setGroupName('');
    setGroupDescription('');
    setIsAddGroupOpen(true);
  };

  useEffect(() => {
    if (updateFetcher.data?.success) {
      setIsEditOpen(false);
    }
  }, [updateFetcher.data]);

  return (
    <main className='relative flex-1 bg-gray-50 p-8 text-gray-900'>
      <BackToButton to='/applications'>Applications</BackToButton>

      <ApplicationDetailHeader id={id} name={application.name} handleOpenEdit={handleOpenEdit} />

      <ApplicationDetailStatistic application={application} />

      <ApplicationDetailDescription description={application.description} />

      <ApplicationDetailGroups handleOpenAddGroup={handleOpenAddGroup} groups={application.groups} />

      {/* ========================= */}
      {/* Edit Application Modal */}
      {/* ========================= */}

      {isEditOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
          <div className='w-full max-w-lg rounded-xl bg-white p-6 shadow-xl'>
            {/* Header */}
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-lg font-semibold'>Edit Application</h2>

                <p className='mt-1 text-sm text-gray-500'>Update application information.</p>
              </div>

              <button type='button' onClick={() => setIsEditOpen(false)} className='text-xl text-gray-400 hover:text-gray-900'>
                ×
              </button>
            </div>

            <updateFetcher.Form method='put'>
              <input type='hidden' name='intent' value='update-application' />

              <input type='hidden' name='id' value={id} />

              {/* Name */}
              <div className='mb-5'>
                <label htmlFor='application-name' className='mb-2 block text-sm font-medium'>
                  Application Name
                </label>

                <input
                  id='application-name'
                  name='name'
                  type='text'
                  value={editName}
                  onChange={(event) => setEditName(event.target.value)}
                  required
                  className='w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                />
              </div>

              {/* Environment */}
              <div className='mb-5'>
                <label htmlFor='application-environment' className='mb-2 block text-sm font-medium'>
                  Environment
                </label>

                <select
                  id='application-environment'
                  name='environment'
                  value={editEnvironment}
                  onChange={(event) => setEditEnvironment(event.target.value)}
                  required
                  className='w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                >
                  <option value='Production'>Production</option>

                  <option value='Development'>Development</option>

                  <option value='Staging'>Staging</option>
                </select>
              </div>

              {/* Status */}
              <div className='mb-5'>
                <label htmlFor='application-status' className='mb-2 block text-sm font-medium'>
                  Status
                </label>

                <select
                  id='application-status'
                  name='status'
                  value={editStatus}
                  onChange={(event) => setEditStatus(event.target.value as Application['status'])}
                  className='w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                >
                  <option value='GOOD'>Good</option>
                  <option value='WARNING'>Warning</option>
                  <option value='DOWN'>Down</option>
                </select>
              </div>

              {/* Description */}
              <div className='mb-6'>
                <label htmlFor='application-description' className='mb-2 block text-sm font-medium'>
                  Description
                </label>

                <textarea
                  id='application-description'
                  name='description'
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
                  rows={4}
                  className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                />
              </div>

              {/* Actions */}
              <div className='flex justify-end gap-3 border-t pt-5'>
                <button type='button' onClick={() => setIsEditOpen(false)} className='rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
                  Cancel
                </button>

                <button type='submit' disabled={updateFetcher.state === 'submitting'} className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50'>
                  {updateFetcher.state === 'submitting' ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </updateFetcher.Form>
          </div>
        </div>
      )}

      {/* ========================= */}
      {/* Add Group Modal */}
      {/* ========================= */}

      {isAddGroupOpen && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
          <div className='w-full max-w-lg rounded-xl bg-white p-6 shadow-xl'>
            {/* Header */}
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-lg font-semibold'>Add Application Group</h2>

                <p className='mt-1 text-sm text-gray-500'>Add a new group to {application.name}.</p>
              </div>

              <button type='button' onClick={() => setIsAddGroupOpen(false)} className='text-xl text-gray-400 hover:text-gray-900'>
                ×
              </button>
            </div>

            <addGroupFetcher.Form method='post'>
              <input type='hidden' name='intent' value='add-group' />

              <input type='hidden' name='applicationId' value={id} />

              {/* Group Name */}
              <div className='mb-5'>
                <label htmlFor='group-name' className='mb-2 block text-sm font-medium'>
                  Group Name
                </label>

                <input
                  id='group-name'
                  name='name'
                  type='text'
                  value={groupName}
                  onChange={(event) => setGroupName(event.target.value)}
                  placeholder='e.g. ALIFA Production'
                  required
                  className='w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                />
              </div>

              {/* Description */}
              <div className='mb-6'>
                <label htmlFor='group-description' className='mb-2 block text-sm font-medium'>
                  Description
                </label>

                <textarea
                  id='group-description'
                  name='description'
                  value={groupDescription}
                  onChange={(event) => setGroupDescription(event.target.value)}
                  rows={4}
                  placeholder='Enter group description'
                  className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                />
              </div>

              {/* Actions */}
              <div className='flex justify-end gap-3 border-t pt-5'>
                <button type='button' onClick={() => setIsAddGroupOpen(false)} className='rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
                  Cancel
                </button>

                <button type='submit' onClick={() => setIsAddGroupOpen(false)} disabled={addGroupFetcher.state === 'submitting'} className='rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50'>
                  {addGroupFetcher.state === 'submitting' ? 'Adding...' : 'Add Group'}
                </button>
              </div>
            </addGroupFetcher.Form>
          </div>
        </div>
      )}
    </main>
  );
};

export default ApplicationDetailMain;
