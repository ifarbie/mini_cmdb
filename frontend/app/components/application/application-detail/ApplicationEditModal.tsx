import { useEffect, useState } from 'react';
import { useFetcher } from 'react-router';

import type { Application } from '~/types/Application';

type ApplicationEditModalProps = {
  application: Application;
  id?: string;
  isOpen: boolean;
  onClose: () => void;
};

const ApplicationEditModal = ({ application, id, isOpen, onClose }: ApplicationEditModalProps) => {
  const fetcher = useFetcher();

  const [name, setName] = useState(application.name);
  const [environment, setEnvironment] = useState(application.environment);
  const [status, setStatus] = useState(application.status);
  const [description, setDescription] = useState(application.description);

  const handleOpen = () => {
    setName(application.name);
    setEnvironment(application.environment);
    setStatus(application.status);
    setDescription(application.description);
  };

  useEffect(() => {
    if (!isOpen) return;

    handleOpen();
  }, [isOpen, application]);

  useEffect(() => {
    if (fetcher.data?.success) {
      onClose();
    }
  }, [fetcher.data, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4'>
      <div className='w-full max-w-lg rounded-xl bg-white p-6 shadow-xl'>
        {/* Header */}
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <h2 className='text-lg font-semibold'>Edit Application</h2>

            <p className='mt-1 text-sm text-gray-500'>Update application information.</p>
          </div>

          <button type='button' onClick={onClose} className='cursor-pointer text-xl text-gray-400 hover:text-gray-900'>
            ×
          </button>
        </div>

        <fetcher.Form method='put'>
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
              value={name}
              onChange={(event) => setName(event.target.value)}
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
              value={environment}
              onChange={(event) => setEnvironment(event.target.value)}
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
              value={status}
              onChange={(event) => setStatus(event.target.value as Application['status'])}
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
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              rows={4}
              className='w-full resize-none rounded-lg border px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
            />
          </div>

          {/* Actions */}
          <div className='flex justify-end gap-3 border-t pt-5'>
            <button type='button' onClick={onClose} className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50'>
              Cancel
            </button>

            <button type='submit' disabled={fetcher.state === 'submitting'} className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:opacity-50'>
              {fetcher.state === 'submitting' ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </fetcher.Form>
      </div>
    </div>
  );
};

export default ApplicationEditModal;
