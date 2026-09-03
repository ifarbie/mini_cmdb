import { useState } from 'react';

import { useParams } from 'react-router';

import BackToButton from '~/components/ui/BackToButton';

import type { Application } from '~/types/Application';
import type { ApplicationGroup } from '~/types/ApplicationGroup';

import ApplicationDetailGroups from './ApplicationDetailGroups';
import ApplicationDetailHeader from './ApplicationDetailHeader';
import ApplicationDetailStatistic from './ApplicationDetailStatistic';
import ApplicationDetailGroupFormModal from './ApplicationDetailGroupFormModal';
import ApplicationDetailEditModal from './ApplicationDetailEditModal';

type ApplicationDetailMainProps = {
  application: Application;
};

const ApplicationDetailMain = ({ application }: ApplicationDetailMainProps) => {
  const { id } = useParams();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isGroupModalOpen, setIsGroupModalOpen] = useState(false);

  const [selectedGroup, setSelectedGroup] = useState<ApplicationGroup | null>(null);

  const handleOpenAddGroup = () => {
    setSelectedGroup(null);
    setIsGroupModalOpen(true);
  };

  const handleOpenEditGroup = (group: ApplicationGroup) => {
    setSelectedGroup(group);
    setIsGroupModalOpen(true);
  };

  const handleCloseGroupModal = () => {
    setIsGroupModalOpen(false);
    setSelectedGroup(null);
  };

  return (
    <main className='relative flex-1 bg-gray-50 p-8 text-gray-900'>
      <BackToButton to='/applications'>Applications</BackToButton>

      <ApplicationDetailHeader id={id} name={application.name} handleOpenEdit={() => setIsEditOpen(true)} />

      <ApplicationDetailStatistic application={application} />

      <ApplicationDetailGroups groups={application.groups} handleOpenAddGroup={handleOpenAddGroup} handleOpenEditGroup={handleOpenEditGroup} />

      <ApplicationDetailEditModal application={application} id={id} isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />

      <ApplicationDetailGroupFormModal
        mode={selectedGroup ? 'edit' : 'create'}
        applicationName={application.name}
        applicationId={application.id}
        group={selectedGroup ?? undefined}
        isOpen={isGroupModalOpen}
        onClose={handleCloseGroupModal}
      />
    </main>
  );
};

export default ApplicationDetailMain;
