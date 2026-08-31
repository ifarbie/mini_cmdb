import { getIpById, updateIpById } from '~/services/CmdbApi';

import { redirect } from 'react-router';
import IpFormMain from '~/components/ip/ip-form/IpFormMain';
import type { Route } from './+types/ip-edit';


export function meta({}: Route.MetaArgs) {
  return [{ title: 'Edit IP' }];
}

export async function loader({ params }: Route.LoaderArgs) {
  const id = params.id;

  if (!id || Number.isNaN(Number(id))) {
    throw new Response('Invalid IP ID', {
      status: 400,
    });
  }

  const response = await getIpById(id);

  return response.data;
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const ipId = formData.get('ipId');

  const data = {
    ipAddress: formData.get('ipAddress') as string,
    hostname: formData.get('hostname') as string,
    description: formData.get('description') as string,
  };

  if (!ipId || typeof ipId !== 'string') {
      throw new Response('Invalid IP ID', { status: 400 });
    }

  await updateIpById(ipId, data);

  return redirect('/ips');
}

export default function IpEdit({ loaderData }: Route.ComponentProps) {
  return <IpFormMain ip={loaderData} />;
}


