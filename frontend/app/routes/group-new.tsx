import { createApplicationGroup, getApplications } from '~/services/CmdbApi';
import type { Route } from './+types/group-new';
import GroupFormMain from '~/components/group/group-form/GroupFormMain';
import { redirect } from 'react-router';

export async function loader({}: Route.LoaderArgs) {
  const applications = await getApplications();

  return {
    applications: applications.data,
  };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = formData.get('name');
  const description = formData.get('description');
  const applicationId = formData.get('applicationId');

  if (!applicationId || typeof applicationId !== 'string') {
    throw new Response('Invalid IP ID', { status: 400 });
  }

  await createApplicationGroup(applicationId, {
    name: String(name),
    description: String(description),
  });

  return redirect('/groups');
}

export default function NewGroupPage({ loaderData }: Route.ComponentProps) {
  return <GroupFormMain mode='create' applications={loaderData.applications} />;
}
