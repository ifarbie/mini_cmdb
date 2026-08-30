import ApplicationMain from '~/components/application/ApplicationMain';
import type { Route } from './+types/application';
import { getApplications } from '~/services/CmdbApi';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Application' }, { name: 'description', content: 'Welcome to Application Page!' }];
}

export async function loader() {
  const Applications = await getApplications();

  return Applications.data;
}

export default function Application({ loaderData }: Route.ComponentProps) {
  return <ApplicationMain applications={loaderData} />;
}
