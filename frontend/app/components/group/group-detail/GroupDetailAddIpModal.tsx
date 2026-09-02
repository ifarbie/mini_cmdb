import { useEffect, useState } from 'react';

import { useFetcher } from 'react-router';

import type { Ip } from '~/types/Ip';

type GroupDetailAddIpModalProps = {
  isOpen: boolean;
  groupId: number;
  groupIps: Ip[];
  handleClose: () => void;
};

type IpLoaderData = {
  ips: Ip[];
};

type FetcherResponse = {
  success: boolean;
};

const GroupDetailAddIpModal = ({ isOpen, groupId, groupIps, handleClose }: GroupDetailAddIpModalProps) => {
  const addIpFetcher = useFetcher<FetcherResponse>();
  const ipFetcher = useFetcher<IpLoaderData>();

  const [selectedIpId, setSelectedIpId] = useState<number | ''>('');

  const availableIps = ipFetcher.data?.ips ?? [];

  const availableIpsToAdd = availableIps.filter((ip) => !groupIps.some((groupIp) => groupIp.id === ip.id));

  const isSubmitting = addIpFetcher.state === 'submitting';
  const isLoading = ipFetcher.state === 'loading';

  const handleOpen = () => {
    setSelectedIpId('');

    if (!ipFetcher.data) {
      ipFetcher.load('/ips');
    }
  };

  const handleCloseModal = () => {
    if (isSubmitting) {
      return;
    }

    setSelectedIpId('');
    handleClose();
  };

  useEffect(() => {
    if (isOpen) {
      handleOpen();
    }
  }, [isOpen]);

  useEffect(() => {
    if (addIpFetcher.data?.success) {
      setSelectedIpId('');
      handleClose();
    }
  }, [addIpFetcher.data]);

  if (!isOpen) {
    return null;
  }

  return (
    <addIpFetcher.Form method='post' className='fixed inset-0 flex items-center justify-center bg-black/40 p-4'>
      <div className='w-full max-w-md rounded-xl bg-white p-6 shadow-xl'>
        {/* Header */}
        <div className='mb-6 flex items-center justify-between'>
          <div>
            <h2 className='text-lg font-semibold'>Add IP to Group</h2>

            <p className='mt-1 text-sm text-gray-500'>Select an existing IP address.</p>
          </div>

          <button type='button' onClick={handleCloseModal} disabled={isSubmitting} className='text-xl text-gray-400 hover:text-gray-900 disabled:opacity-50'>
            ×
          </button>
        </div>

        <input type='hidden' name='intent' value='add-ip' />

        <input type='hidden' name='groupId' value={groupId} />

        {/* Select IP */}
        <div className='mb-6'>
          <label htmlFor='ip' className='mb-2 block text-sm font-medium'>
            IP Address
          </label>

          {isLoading ? (
            <p className='text-sm text-gray-500'>Loading IP addresses...</p>
          ) : (
            <>
              <select
                id='ip'
                name='ipId'
                value={selectedIpId}
                onChange={(event) => setSelectedIpId(event.target.value ? Number(event.target.value) : '')}
                required
                className='w-full rounded-lg border bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-gray-300'
              >
                <option value=''>Select IP address</option>

                {availableIpsToAdd.map((ip) => (
                  <option key={ip.id} value={ip.id}>
                    {ip.ipAddress} - {ip.hostname}
                  </option>
                ))}
              </select>

              {availableIpsToAdd.length === 0 && <p className='mt-2 text-sm text-gray-500'>No available IP addresses.</p>}
            </>
          )}
        </div>

        {/* Actions */}
        <div className='flex justify-end gap-3'>
          <button type='button' onClick={handleCloseModal} disabled={isSubmitting} className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50'>
            Cancel
          </button>

          <button
            type='submit'
            disabled={selectedIpId === '' || isLoading || isSubmitting}
            className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40'
          >
            {isSubmitting ? 'Adding...' : 'Add IP'}
          </button>
        </div>
      </div>
    </addIpFetcher.Form>
  );
};

export default GroupDetailAddIpModal;
