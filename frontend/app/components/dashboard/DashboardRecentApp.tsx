import { NavLink } from 'react-router';
import type { Application } from '~/types/Application';
import NoDataTable from '../ui/NoDataTable';

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
              <NoDataTable colSpan={4} title='No recent applications' description='You have no recent applications' to='/applications' linkText='+ Add Application' />
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default DashboardRecentApp;
