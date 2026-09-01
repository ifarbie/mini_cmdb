import GroupDetailMain from '~/components/group/group-detail/GroupDetailMain';
import type { Route } from './+types/application-detail';
import { addIpToGroup, deleteApplicationGroupById, getApplicationGroupById, removeIpFromGroup, updateApplicationGroupById } from '~/services/CmdbApi';
import { redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Group' }, { name: 'description', content: 'Welcome to Group Detail Page!' }];
}

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;

  if (Number.isNaN(id)) {
    throw new Response('Invalid application Group ID', { status: 400 });
  }

  const applicationGroup = await getApplicationGroupById(id);

  return applicationGroup.data;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const intent = formData.get('intent');

  if (intent === 'update-group') {
    const groupId = formData.get('groupId');

    if (!groupId || typeof groupId !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await updateApplicationGroupById(groupId, {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    });

    return {
      success: true,
      intent: 'update-group',
    };
  }

  if (intent === 'add-ip') {
    const groupId = formData.get('groupId');

    if (!groupId || typeof groupId !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await addIpToGroup(groupId, {
      ipId: formData.get('ipId') as string,
    });

    return {
      success: true,
      intent: 'update-group',
    };
  }

  if (intent === 'remove-ip') {
    const groupId = formData.get('groupId');

    if (!groupId || typeof groupId !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await removeIpFromGroup(groupId, {
      ipId: formData.get('ipId') as string,
    });

    return {
      success: true,
      intent: 'update-group',
    };
  }

  if (intent === 'delete-group') {
    const groupId = formData.get('groupId');
    const applicationId = formData.get('applicationId');

    if (!groupId || typeof groupId !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await deleteApplicationGroupById(groupId);

    return redirect(`/applications/${applicationId}`);
  }
}

export default function GroupDetail({ loaderData }: Route.ComponentProps) {
  return <GroupDetailMain groupDetail={loaderData} />;
}
