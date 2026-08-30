import React from 'react';
import type { Application } from '~/types/Application';

type ApplicationDetailStatisticProps = {
  application: Application;
};

const ApplicationDetailStatistic = ({ application }: ApplicationDetailStatisticProps) => {
  return (
    <div className='mb-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
      {/* Environment */}
      <div className='rounded-xl border bg-white p-6'>
        <p className='text-sm text-gray-500'>Environment</p>

        <p className='mt-2 text-xl font-semibold'>{application.environment}</p>
      </div>

      {/* Status */}
      <div className='rounded-xl border bg-white p-6'>
        <p className='text-sm text-gray-500'>Status</p>

        <span
          className={`mt-3 inline-block rounded-full px-3 py-1 text-sm font-medium ${
            application.status === 'GOOD' ? 'bg-green-100 text-green-700' : application.status === 'WARNING' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
          }`}
        >
          ● {application.status}
        </span>
      </div>

      {/* Groups */}
      <div className='rounded-xl border bg-white p-6'>
        <p className='text-sm text-gray-500'>Application Groups</p>

        <p className='mt-2 text-xl font-semibold'>{application.groups.length}</p>
      </div>
    </div>
  );
};

export default ApplicationDetailStatistic;
