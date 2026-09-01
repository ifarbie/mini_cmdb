import StatusBadge from '~/components/ui/StatusBadge';
import type { Application } from '~/types/Application';

type ApplicationDetailStatisticProps = {
  application: Application;
};

const ApplicationDetailStatistic = ({ application }: ApplicationDetailStatisticProps) => {
  return (
    <>
      <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
        {/* Environment */}
        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>Environment</p>

          <p className='mt-2 text-xl font-semibold'>{application.environment}</p>
        </div>

        {/* Status */}
        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500 mb-2'>Status</p>

          <StatusBadge size="md" status={application.status} />
        </div>

        {/* Groups */}
        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>Application Groups</p>

          <p className='mt-2 text-xl font-semibold'>{application.groups.length}</p>
        </div>
      </div>
      <section className='mb-8 rounded-xl border bg-white p-6'>
        <h2 className='mb-3 text-lg font-semibold'>Description</h2>

        <p className='text-sm leading-6 text-gray-600'>{application.description ? application.description : 'No Description Yet'}</p>
      </section>
    </>
  );
};

export default ApplicationDetailStatistic;
