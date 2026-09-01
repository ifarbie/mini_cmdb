import type { Application } from "~/types/Application";
import StatisticCard from "./StatisticCard";

type DashboardStatisticProps = {
  statistics: {
    totalApplications: number;
    totalApplicationGroups: number;
    totalIps: number;
    recentApplications: Application[];
  };
};

const DashboardStatistic = ({ statistics }: DashboardStatisticProps) => {
  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3'>
      <StatisticCard name='Applications' qty={statistics.totalApplications} />
      <StatisticCard name='Application Groups' qty={statistics.totalApplicationGroups} />
      <StatisticCard name='IP Addresses' qty={statistics.totalIps} />
    </div>
  );
};

export default DashboardStatistic;
