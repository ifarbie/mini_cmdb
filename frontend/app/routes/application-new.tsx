import ApplicationFormMain from '~/components/application/application-form/ApplicationFormMain';
import type { Route } from './+types/application-new';
import { createApplication } from '~/services/CmdbApi';
import { redirect } from 'react-router';

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const data = {
    name: formData.get('name') as string,
    environment: formData.get('environment') as string,
    status: formData.get('status') as string,
    description: formData.get('description') as string,
  };

  await createApplication(data);

  return redirect('/applications');
}

const ApplicationNew = () => {
  return <ApplicationFormMain mode='create' />;
};

export default ApplicationNew;
