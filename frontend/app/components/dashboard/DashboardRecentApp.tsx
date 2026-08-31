import { NavLink } from 'react-router';
import type { Application } from '~/types/Application';

type DashboardRecentAppProps = {
  recentApplications: Application[];
};
const DashboardRecentApp = ({ recentApplications }: DashboardRecentAppProps) => {
  return (
    <section className='mt-8'>
      <div className='mb-4 flex items-center justify-between'>
        <h3 className='text-lg font-semibold'>Recent Applications</h3>

        <NavLink to='/applications' className='text-sm font-medium'>
          View all →
        </NavLink>
      </div>

      <div className='overflow-hidden rounded-xl border bg-white'>
        <table className='w-full text-left'>
          <thead className='border-b bg-gray-50'>
            <tr>
              <th className='px-6 py-4 text-sm font-medium'>Name</th>

              <th className='px-6 py-4 text-sm font-medium'>Environment</th>

              <th className='px-6 py-4 text-sm font-medium'>Status</th>

              <th className='px-6 py-4 text-sm font-medium'>Groups</th>
            </tr>
          </thead>

          <tbody>
            {recentApplications?.length > 0 ? (
              recentApplications.map((application) => (
                <tr key={application.id} className='border-b last:border-0'>
                  <td className='px-6 py-4'>{application.name}</td>
                  <td className='px-6 py-4'>{application.environment}</td>
                  <td className='px-6 py-4'>{application.status}</td>
                  <td className='px-6 py-4'>{application.groups.length}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className='px-6 py-12 text-center'>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100'>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='h-6 w-6 text-gray-400'>
                        <path strokeLinecap='round' strokeLinejoin='round' d='M20.25 7.5l-8.25-4.5-8.25 4.5m16.5 0v9l-8.25 4.5m8.25-13.5l-8.25 4.5m0 0L3.75 7.5m8.25 4.5v9' />
                      </svg>
                    </div>

                    <p className='text-sm font-medium text-gray-900'>No recent applications</p>

                    <p className='mt-1 text-sm text-gray-500'>Applications you add will appear here.</p>

                    <NavLink to='/applications/new' className='mt-4 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white hover:bg-gray-800'>
                      + Add Application
                    </NavLink>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardRecentApp;
