import { useState } from 'react';

import { useSearchParams } from 'react-router';

import BackToButton from '~/components/ui/BackToButton';

import type { ApplicationGroup } from '~/types/ApplicationGroup';

import GroupDetailAddIpModal from './GroupDetailAddIpModal';
import GroupDetailEditModal from './GroupDetailEditModal';
import GroupDetailHeader from './GroupDetailHeader';
import GroupDetailIpSection from './GroupDetailIpSection';
import GroupDetailSummary from './GroupDetailSummary';

type GroupDetailMainProps = {
  groupDetail: ApplicationGroup;
};

export default function GroupDetailMain({ groupDetail }: GroupDetailMainProps) {
  const [searchParams] = useSearchParams();

  const applicationId = searchParams.get('applicationId');
  const isFromApplication = Boolean(applicationId);

  // Add IP
  const [isAddIpOpen, setIsAddIpOpen] = useState(false);

  const handleOpenAddIp = () => {
    setIsAddIpOpen(true);
  };

  const handleCloseAddIp = () => {
    setIsAddIpOpen(false);
  };

  // Edit Group
  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleOpenEdit = () => {
    setIsEditOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditOpen(false);
  };

  return (
    <main className='relative flex-1 bg-gray-50 p-8 text-gray-900'>
      {isFromApplication ? <BackToButton to={`/applications/${applicationId}`}>Application</BackToButton> : <BackToButton to='/groups'>Application Groups</BackToButton>}

      <GroupDetailHeader application={groupDetail.application} groupDetail={groupDetail} handleOpenEdit={handleOpenEdit} />

      <GroupDetailSummary application={groupDetail.application} groupDetail={groupDetail} />

      <GroupDetailIpSection groupId={groupDetail.id} setIsAddIpOpen={handleOpenAddIp} ips={groupDetail.ips} />

      <GroupDetailAddIpModal isOpen={isAddIpOpen} groupId={groupDetail.id} groupIps={groupDetail.ips} handleClose={handleCloseAddIp} />

      <GroupDetailEditModal isEditOpen={isEditOpen} handleCloseEdit={handleCloseEdit} groupDetail={groupDetail} />
    </main>
  );
}
