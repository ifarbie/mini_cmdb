import { createIp } from '~/services/CmdbApi';
import { redirect } from 'react-router';
import IpFormMain from '~/components/ip/ip-form/IpFormMain';
import type { Route } from './+types/ip-form';

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Add IP' }];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const data = {
    ipAddress: formData.get('ipAddress') as string,
    hostname: formData.get('hostname') as string,
    description: formData.get('description') as string,
  };

  await createIp(data);

  return redirect('/ips');
}

export default function IpCreate() {
  return <IpFormMain />;
}
