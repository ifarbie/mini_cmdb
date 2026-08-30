import { NavLink } from 'react-router';

type DashboardMainProps = {
  statistics: {
    totalApplications: number;
    totalApplicationGroups: number;
    totalIps: number;
    recentApplications: any[];
  };
};

export default function DashboardMain({ statistics }: DashboardMainProps) {
  return (
    <main className='flex-1 p-8'>
      {/* Page Header */}
      <div className='mb-8'>
        <h2 className='text-2xl font-semibold'>Dashboard</h2>

        <p className='mt-1 text-gray-500'>Welcome back! Here's your CMDB overview.</p>
      </div>

      {/* Statistics */}
      <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>Applications</p>

          <p className='mt-2 text-3xl font-bold'>{statistics.totalApplications}</p>
        </div>

        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>Application Groups</p>

          <p className='mt-2 text-3xl font-bold'>{statistics.totalApplicationGroups}</p>
        </div>

        <div className='rounded-xl border bg-white p-6'>
          <p className='text-sm text-gray-500'>IP Addresses</p>

          <p className='mt-2 text-3xl font-bold'>{statistics.totalIps}</p>
        </div>
      </div>

      {/* Recent Applications */}
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
              {statistics?.recentApplications?.map((application) => (
                <tr className='border-b'>
                  <td className='px-6 py-4'>{application.name}</td>

                  <td className='px-6 py-4'>{application.environment}</td>

                  <td className='px-6 py-4'>{application.status}</td>

                  <td className='px-6 py-4'>{application.groups.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
