import type { Route } from './+types/application-edit';
import { getApplicationById, updateApplicationById } from '~/services/CmdbApi';
import { redirect } from 'react-router';
import ApplicationFormMain from '~/components/application/application-form/ApplicationFormMain';

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;

  if (Number.isNaN(id)) {
    throw new Response('Invalid application ID', { status: 400 });
  }

  const application = await getApplicationById(id);

  return application.data;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const applicationId = formData.get('applicationId');

  const data = {
    name: formData.get('name') as string,
    environment: formData.get('environment') as string,
    status: formData.get('status') as string,
    description: formData.get('description') as string,
  };

  if (!applicationId || typeof applicationId !== 'string') {
    throw new Response('Invalid ID', { status: 400 });
  }

  await updateApplicationById(applicationId, data);

  return redirect('/applications');
}

const ApplicationEdit = ({ loaderData }: Route.ComponentProps) => {
  return <ApplicationFormMain mode='edit' application={loaderData} />;
};

export default ApplicationEdit;
