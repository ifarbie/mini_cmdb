import type { Route } from './+types/application-form';
import { createApplication } from '~/services/CmdbApi';
import { redirect } from 'react-router';
import ApplicationEditMain from '~/components/application/application-edit/ApplicationEditMain';

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

const ApplicationEdit = () => {
  return <ApplicationEditMain />;
};

export default ApplicationEdit;
