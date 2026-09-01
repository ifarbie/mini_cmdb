import GroupMain from '~/components/group/GroupMain';
import { deleteApplicationGroupById, getApplicationGroups, getApplications } from '~/services/CmdbApi';
import type { Route } from './+types/group';

export async function loader() {
  const groups = await getApplicationGroups();

  return {
    groups: groups.data,
  };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const intent = formData.get('intent');
  const id = formData.get('id')

  if (!id || typeof id !== 'string') {
    throw new Response('Invalid IP ID', { status: 400 });
  }

  if (intent === 'delete') {
    return deleteApplicationGroupById(id);
  }

  return null;
}

export default function GroupsPage({ loaderData }: Route.ComponentProps) {
  return <GroupMain groups={loaderData.groups} />;
}
