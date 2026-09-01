import type { Application } from '~/types/Application';
import PageHeader from '../ui/PageHeader';
import DashboardRecentApp from './DashboardRecentApp';
import DashboardStatistic from './DashboardStatistic';

type DashboardMainProps = {
  statistics: {
    totalApplications: number;
    totalApplicationGroups: number;
    totalIps: number;
    recentApplications: Application[];
  };
};

export default function DashboardMain({ statistics }: DashboardMainProps) {
  return (
    <main className='flex-1 p-8'>
      {/* Page Header */}
      <PageHeader title='Dashboard' description="Welcome back! Here's your CMDB overview." />

      {/* Statistics */}
      <DashboardStatistic statistics={statistics} />

      {/* Recent Applications */}
      <DashboardRecentApp recentApplications={statistics.recentApplications} />
    </main>
  );
}
