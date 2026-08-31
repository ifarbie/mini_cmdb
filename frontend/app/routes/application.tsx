import ApplicationMain from '~/components/application/ApplicationMain';
import type { Route } from './+types/application';
import { deleteApplicationById, getApplications } from '~/services/CmdbApi';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Application' }, { name: 'description', content: 'Welcome to Application Page!' }];
}

export async function loader() {
  const Applications = await getApplications();

  return Applications.data;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const intent = formData.get('intent');

  if (intent === 'remove-app') {
    const applicationId = formData.get('applicationId');

     if (!applicationId || typeof applicationId !== 'string') {
      throw new Response('Invalid IP ID', { status: 400 });
    }

    await deleteApplicationById(applicationId);

    return {
      success: true,
      intent: 'remove-app',
    };
  }
}

export default function Application({ loaderData }: Route.ComponentProps) {
  return <ApplicationMain applications={loaderData} />;
}
