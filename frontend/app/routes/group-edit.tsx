import { getApplicationGroupById, updateApplicationGroupById } from '~/services/CmdbApi';
import type { Route } from './+types/group-edit';
import GroupFormMain from '~/components/group/group-form/GroupFormMain';
import { redirect } from 'react-router';

export async function loader({ params }: Route.LoaderArgs) {
  const group = await getApplicationGroupById(params.id);

  return {
    group: group.data,
  };
}

export async function action({ request, params }: Route.ActionArgs) {
  const formData = await request.formData();

  const name = formData.get('name');
  const description = formData.get('description');

  await updateApplicationGroupById(params.id, {
    name: String(name),
    description: String(description),
  });

  return redirect('/groups');
}

export default function EditGroupPage({ loaderData }: Route.ComponentProps) {
  return <GroupFormMain mode='edit' group={loaderData.group} />;
}
