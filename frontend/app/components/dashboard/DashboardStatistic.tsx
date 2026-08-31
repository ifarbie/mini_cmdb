type DashboardStatisticProps = {
  statistics: {
    totalApplications: number;
    totalApplicationGroups: number;
    totalIps: number;
    recentApplications: any[];
  };
};

const DashboardStatistic = ({ statistics }: DashboardStatisticProps) => {
  return (
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
  );
};

export default DashboardStatistic;
