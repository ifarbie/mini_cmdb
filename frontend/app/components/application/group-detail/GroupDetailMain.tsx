import { useEffect, useState } from 'react';

import { useFetcher } from 'react-router';

import BackToButton from '~/components/ui/BackToButton';

import GroupDetailHeader from './GroupDetailHeader';
import GroupDetailSummary from './GroupDetailSummary';
import GroupDetailIpSection from './GroupDetailIpSection';

import type { ApplicationGroup } from '~/types/ApplicationGroup';
import type { Ip } from '~/types/Ip';

type GroupDetailMainProps = {
  groupDetail: ApplicationGroup;
};

type IpLoaderData = {
  ips: Ip[];
};

type FetcherResponse = {
  success: boolean;
};

export default function GroupDetailMain({ groupDetail }: GroupDetailMainProps) {
  const updateFetcher = useFetcher<FetcherResponse>();
  const addIpFetcher = useFetcher<FetcherResponse>();

  const ipFetcher = useFetcher<IpLoaderData>();

  const [isAddIpOpen, setIsAddIpOpen] = useState(false);

  const [selectedIpId, setSelectedIpId] = useState<number | ''>('');

  const availableIps = ipFetcher.data?.ips ?? [];

  const availableIpsToAdd = availableIps.filter((ip) => !groupDetail.ips.some((groupIp) => groupIp.id === ip.id));

  const handleOpenAddIp = () => {
    setSelectedIpId('');
    setIsAddIpOpen(true);

    if (!ipFetcher.data) {
      ipFetcher.load('/ips');
    }
  };

  const handleCloseAddIp = () => {
    setSelectedIpId('');
    setIsAddIpOpen(false);
  };

  const handleRemoveIp = (ipId: number) => {
    console.log('Remove IP:', ipId);
  };

  const [isEditOpen, setIsEditOpen] = useState(false);

  const [editName, setEditName] = useState(groupDetail.name);

  const [editDescription, setEditDescription] = useState(groupDetail.description);

  const handleOpenEdit = () => {
    setEditName(groupDetail.name);
    setEditDescription(groupDetail.description);
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    if (updateFetcher.state === 'submitting') {
      return;
    }

    setIsEditOpen(false);
  };

  useEffect(() => {
    if (updateFetcher.data?.success) {
      setIsEditOpen(false);
    }

    if (addIpFetcher.data?.success) {
      setIsAddIpOpen(false);
    }
  }, [updateFetcher.data, addIpFetcher.data]);

  return (
    <main className='relative flex-1 bg-gray-50 p-8 text-gray-900'>
      <BackToButton to={`/applications/${groupDetail.application.id}`}>Applications</BackToButton>

      <GroupDetailHeader applicationId={groupDetail.application.id} groupId={groupDetail.id} name={groupDetail.name} applicationName={groupDetail.application.name} handleOpenEdit={handleOpenEdit} />

      <GroupDetailSummary applicationName={groupDetail.application.name} ipsLength={groupDetail.ips.length} description={groupDetail.description} />

      <GroupDetailIpSection groupId={groupDetail.id} setIsAddIpOpen={handleOpenAddIp} ips={groupDetail.ips} handleRemoveIp={handleRemoveIp} />

      {isAddIpOpen && (
        <addIpFetcher.Form method='post' className='fixed inset-0 flex items-center justify-center bg-black/40 p-4'>
          <div className='w-full max-w-md rounded-xl bg-white p-6 shadow-xl'>
            {/* Header */}
            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-lg font-semibold'>Add IP to Group</h2>

                <p className='mt-1 text-sm text-gray-500'>Select an existing IP address.</p>
              </div>

              <button type='button' onClick={handleCloseAddIp} disabled={addIpFetcher.state === 'submitting'} className='text-xl text-gray-400 hover:text-gray-900 disabled:opacity-50'>
                ×
              </button>
            </div>

            <input type='hidden' name='intent' value='add-ip' />

            <input type='hidden' name='groupId' value={groupDetail.id} />

            {/* Select IP */}
            <div className='mb-6'>
              <label htmlFor='ip' className='mb-2 block text-sm font-medium'>
                IP Address
              </label>

              {ipFetcher.state === 'loading' ? (
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
              <button type='button' onClick={handleCloseAddIp} disabled={addIpFetcher.state === 'submitting'} className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50'>
                Cancel
              </button>

              <button
                type='submit'
                disabled={selectedIpId === '' || ipFetcher.state === 'loading' || addIpFetcher.state === 'submitting'}
                className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40'
              >
                {addIpFetcher.state === 'submitting' ? 'Adding...' : 'Add IP'}
              </button>
            </div>
          </div>
        </addIpFetcher.Form>
      )}

      {/* =========================
          Edit Group Modal
          ========================= */}

      {isEditOpen && (
        <updateFetcher.Form method='put' className='fixed inset-0 flex items-center justify-center bg-black/40 p-4'>
          <div className='w-full max-w-md rounded-xl bg-white p-6 shadow-xl'>
            {/* Header */}

            <div className='mb-6 flex items-center justify-between'>
              <div>
                <h2 className='text-lg font-semibold'>Edit Application Group</h2>

                <p className='mt-1 text-sm text-gray-500'>Update group information.</p>
              </div>

              <button type='button' onClick={handleCloseEdit} disabled={updateFetcher.state === 'submitting'} className='text-xl text-gray-400 hover:text-gray-900 disabled:opacity-50'>
                ×
              </button>
            </div>

            <div>
              <input type='hidden' name='intent' value='update-group' />

              <input type='hidden' name='groupId' value={groupDetail.id} />

              {/* Group Name */}

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

              {/* Description */}

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

              {/* Actions */}

              <div className='flex justify-end gap-3'>
                <button type='button' onClick={handleCloseEdit} disabled={updateFetcher.state === 'submitting'} className='cursor-pointer rounded-lg border px-4 py-2 text-sm font-medium hover:bg-gray-50 disabled:opacity-50'>
                  Cancel
                </button>

                <button
                  type='submit'
                  disabled={!editName.trim() || updateFetcher.state === 'submitting'}
                  className='cursor-pointer rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 disabled:cursor-not-allowed disabled:opacity-40'
                >
                  {updateFetcher.state === 'submitting' ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </div>
          </div>
        </updateFetcher.Form>
      )}
    </main>
  );
}
