import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router';
import ConfirmButton from '~/components/ui/ConfirmButton';
import type { ApplicationGroup } from '~/types/ApplicationGroup';

type GroupDetailEditModalProps = {
  isEditOpen: boolean;
  handleCloseEdit: () => void;
  groupDetail: ApplicationGroup;
};

const GroupDetailEditModal = ({ isEditOpen, handleCloseEdit, groupDetail }: GroupDetailEditModalProps) => {
  const updateFetcher = useFetcher();
  const [editName, setEditName] = useState(groupDetail.name);
  const [editDescription, setEditDescription] = useState(groupDetail.description);

  const resetForm = () => {
    setEditName(groupDetail.name);
    setEditDescription(groupDetail.description);
  };

  useEffect(() => {
    if (updateFetcher.data?.success) {
      handleCloseEdit();
    }
  }, [updateFetcher.data]);

  useEffect(() => {
    if (isEditOpen) {
      resetForm();
    }
  }, [isEditOpen]);

  return (
    <>
      {isEditOpen && (
        <updateFetcher.Form method='put' className='fixed inset-0 flex items-center justify-center bg-black/40 p-4'>
          <div className='w-full max-w-md rounded-xl bg-white p-6 shadow-xl'>
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-lg font-semibold'>Edit Application Group</h2>

                <p className='mt-1 text-sm text-gray-500'>Update group information.</p>
              </div>

              <button type='button' onClick={handleCloseEdit} disabled={updateFetcher.state === 'submitting'} className='cursor-pointer text-xl text-gray-400 hover:text-gray-900 disabled:opacity-50'>
                ×
              </button>
            </div>

            <div>
              <input type='hidden' name='intent' value='update-group' />

              <input type='hidden' name='groupId' value={groupDetail.id} />

              <div className='mb-4'>
                <label htmlFor='group-name' className='mb-2 block text-sm font-medium'>
                  Group Name
                </label>

                <input
                  id='group-name'
                  name='name'
                  type='text'
                  value={editName}
                  onChange={(event) => setEditName(event.target.value)}
                  required
                  className='w-full rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                  placeholder='Enter group name'
                />
              </div>

              <div className='mb-6'>
                <label htmlFor='group-description' className='mb-2 block text-sm font-medium'>
                  Description
                </label>

                <textarea
                  id='group-description'
                  name='description'
                  value={editDescription}
                  onChange={(event) => setEditDescription(event.target.value)}
                  rows={4}
                  className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
                  placeholder='Enter group description'
                />
              </div>

              <div className='flex justify-end gap-3'>
                <button type='button' onClick={handleCloseEdit} disabled={updateFetcher.state === 'submitting'} className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50'>
                  Cancel
                </button>
                <ConfirmButton isSubmitting={updateFetcher.state === 'submitting'} submittingText='Saving...' confirmMessage='Are you sure you want to update this group?'>
                  {updateFetcher.state === 'submitting' ? 'Saving' : 'Save Changes'}
                </ConfirmButton>
              </div>
            </div>
          </div>
        </updateFetcher.Form>
      )}
    </>
  );
};

export default GroupDetailEditModal;
