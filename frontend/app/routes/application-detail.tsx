import ApplicationDetailMain from '~/components/application/application-detail/ApplicationDetailMain';
import type { Route } from './+types/application-detail';
import { createApplicationGroup, deleteApplicationById, getApplicationById, updateApplicationById } from '~/services/CmdbApi';
import { redirect } from 'react-router';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Application' }, { name: 'description', content: 'Welcome to Application Page!' }];
}

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;

  if (Number.isNaN(id)) {
    throw new Response('Invalid application ID', { status: 400 });
  }

  const Application = await getApplicationById(id);

  return Application.data;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const intent = formData.get('intent');

  if (intent === 'update-application') {
    const id = formData.get('id');

    if (!id || typeof id !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await updateApplicationById(id, {
      name: formData.get('name') as string,
      environment: formData.get('environment') as string,
      status: formData.get('status') as string,
      description: formData.get('description') as string,
    });

    return {
      success: true,
      intent: 'update-application',
    };
  }

  if (intent === 'add-group') {
    const applicationId = formData.get('applicationId');

    if (!applicationId || typeof applicationId !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await createApplicationGroup(applicationId, {
      name: formData.get('name') as string,
      description: formData.get('description') as string,
    });

    return {
      success: true,
      intent: 'add-group',
    };
  }

  if (intent === 'remove-app') {
    const applicationId = formData.get('applicationId');

    if (!applicationId || typeof applicationId !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await deleteApplicationById(applicationId);

    return redirect('/applications');
  }

  return null;
}

export default function ApplicationDetail({ loaderData }: Route.ComponentProps) {
  return <ApplicationDetailMain application={loaderData} />;
}
