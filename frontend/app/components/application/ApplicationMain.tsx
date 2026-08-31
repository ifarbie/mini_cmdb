import ApplicationTable from './ApplicationTable';
import PageHeader from '../ui/PageHeader';

type ApplicationMainProps = {
  applications: any[];
};

export default function ApplicationMain({ applications }: ApplicationMainProps) {
  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      {/* Header */}
      <PageHeader title="Applications" description="Manage all applications in CMDB" to='/applications/new' buttonText='+ Add Application' />

      {/* TODO: Search & Filter */}
      {/* <div className='mb-6 flex gap-3'>
        <input type='text' placeholder='Search application...' className='w-full max-w-md rounded-lg border bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-gray-300' />

        <select className='rounded-lg border bg-white px-4 py-2 text-sm'>
          <option value=''>All Environment</option>
          <option value='Production'>Production</option>
          <option value='Development'>Development</option>
        </select>

        <select className='rounded-lg border bg-white px-4 py-2 text-sm'>
          <option value=''>All Status</option>
          <option value='GOOD'>Good</option>
          <option value='WARNING'>Warning</option>
        </select>
      </div> */}

      {/* Table */}
      <ApplicationTable applications={applications} />
    </main>
  );
}
