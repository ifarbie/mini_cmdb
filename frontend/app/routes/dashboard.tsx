import DashboardMain from '~/components/dashboard/DashboardMain';
import { getStatistics } from '~/services/CmdbApi';
import type { Route } from './+types/dashboard';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'CMDB' }, { name: 'CMDB', content: 'Welcome home!' }];
}

export async function loader() {
  const statistics = await getStatistics();

  return statistics.data;
}

export default function Dashboard({ loaderData }: Route.ComponentProps) {
  return <DashboardMain statistics={loaderData} />;
}
