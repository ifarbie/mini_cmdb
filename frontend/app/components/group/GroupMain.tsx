import GroupTable from './GroupTable';

import type { ApplicationGroup } from '~/types/ApplicationGroup';
import PageHeader from '../ui/PageHeader';

type GroupMainProps = {
  groups: ApplicationGroup[];
};

const GroupMain = ({ groups }: GroupMainProps) => {
  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      {/* Header */}
      <PageHeader title='Groups' description='Manage all application groups in the CMDB.' to='/groups/new' buttonText='+ Add Group' />

      {/* Content */}
      <GroupTable groups={groups}  />
    </main>
  );
};

export default GroupMain;
