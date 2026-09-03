import { useEffect, useState } from 'react';

import { useFetcher } from 'react-router';
import ConfirmButton from '~/components/ui/ConfirmButton';

import type { ApplicationGroup } from '~/types/ApplicationGroup';

type ApplicationDetailGroupFormModalProps = {
  mode: 'create' | 'edit';
  applicationName?: string;
  applicationId?: string | number;
  group?: ApplicationGroup;
  isOpen: boolean;
  onClose: () => void;
};

const ApplicationDetailGroupFormModal = ({ mode, applicationName, applicationId, group, isOpen, onClose }: ApplicationDetailGroupFormModalProps) => {
  const fetcher = useFetcher();

  const isEdit = mode === 'edit';

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setName(group?.name ?? '');
    setDescription(group?.description ?? '');
  }, [isOpen, group]);

  useEffect(() => {
    if (fetcher.data?.success) {
      onClose();
    }
  }, [fetcher.data]);

  const title = isEdit ? 'Edit Application Group' : 'Add Application Group';

  const modalDescription = isEdit ? 'Update group information.' : `Add a new group to ${applicationName}.`;

  const intent = isEdit ? 'update-group' : 'add-group';

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
      <div className='w-full max-w-lg rounded-xl bg-white p-6 shadow-xl'>
        {/* Header */}
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <h2 className='text-lg font-semibold'>{title}</h2>

            <p className='mt-1 text-sm text-gray-500'>{modalDescription}</p>
          </div>

          <button type='button' onClick={onClose} className='cursor-pointer text-xl text-gray-400 hover:text-gray-900'>
            ×
          </button>
        </div>

        <fetcher.Form method='post'>
          {/* Intent */}
          <input type='hidden' name='intent' value={intent} />

          {/* Application ID */}
          {!isEdit && <input type='hidden' name='applicationId' value={applicationId} />}

          {/* Group ID */}
          {isEdit && <input type='hidden' name='groupId' value={group?.id} />}

          {/* Group Name */}
          <div className='mb-5'>
            <label htmlFor='group-name' className='mb-2 block text-sm font-medium'>
              Group Name
            </label>

            <input
              id='group-name'
              name='name'
              type='text'
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
              placeholder='Enter group description'
              className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
            />
          </div>

          {/* Actions */}
          <div className='flex justify-end gap-3 border-t pt-5'>
            <button type='button' onClick={onClose} className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
              Cancel
            </button>

            <ConfirmButton isSubmitting={fetcher.state === 'submitting'} confirmMessage='Are you sure you want to save these changes?' submittingText={isEdit ? 'Saving...' : 'Adding...'} isEdit={isEdit}>
              {isEdit ? 'Save Changes' : 'Add Group'}
            </ConfirmButton>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default ApplicationDetailGroupFormModal;
