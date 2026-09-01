import ApplicationTable from './ApplicationTable';
import PageHeader from '../ui/PageHeader';
import type { Application } from '~/types/Application';

type ApplicationMainProps = {
  applications: Application[];
};

export default function ApplicationMain({ applications }: ApplicationMainProps) {
  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      {/* Header */}
      <PageHeader title="Applications" description="Manage all applications in CMDB" to='/applications/new' buttonText='+ Add Application' />

      {/* Table */}
      <ApplicationTable applications={applications} />
    </main>
  );
}
