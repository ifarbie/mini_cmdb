import { NavLink } from 'react-router';
import DashboardRecentApp from './DashboardRecentApp';

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
      <DashboardRecentApp recentApplications={statistics.recentApplications} />
    </main>
  );
}
