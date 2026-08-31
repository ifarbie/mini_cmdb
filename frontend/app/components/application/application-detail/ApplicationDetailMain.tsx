import { useState } from 'react';
import { useParams } from 'react-router';

import ApplicationDetailHeader from './ApplicationDetailHeader';
import ApplicationDetailStatistic from './ApplicationDetailStatistic';
import ApplicationDetailDescription from './ApplicationDetailDescription';
import ApplicationDetailGroups from './ApplicationDetailGroups';
import ApplicationEditModal from './ApplicationEditModal';

import BackToButton from '~/components/ui/BackToButton';

import type { Application } from '~/types/Application';
import ApplicationAddGroupModal from './ApplicationAddGroupModal';

type ApplicationDetailMainProps = {
  application: Application;
};

const ApplicationDetailMain = ({ application }: ApplicationDetailMainProps) => {
  const { id } = useParams();

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isAddGroupOpen, setIsAddGroupOpen] = useState(false);

  return (
    <main className='relative flex-1 bg-gray-50 p-8 text-gray-900'>
      <BackToButton to='/applications'>Applications</BackToButton>

      <ApplicationDetailHeader id={id} name={application.name} handleOpenEdit={() => setIsEditOpen(true)} />

      <ApplicationDetailStatistic application={application} />

      <ApplicationDetailDescription description={application.description} />

      <ApplicationDetailGroups groups={application.groups} handleOpenAddGroup={() => setIsAddGroupOpen(true)} />

      <ApplicationEditModal application={application} id={id} isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />

      <ApplicationAddGroupModal applicationName={application.name} applicationId={id} isOpen={isAddGroupOpen} onClose={() => setIsAddGroupOpen(false)} />
    </main>
  );
};

export default ApplicationDetailMain;
