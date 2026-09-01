import { deleteIpById, getIps } from '~/services/CmdbApi';
import type { Route } from './+types/ip';
import IpMain from '~/components/ip/IpMain';

export async function loader({}: Route.LoaderArgs) {
  const ips = await getIps();

  return {
    ips: ips.data,
  };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();

  const intent = formData.get('intent');

  if (intent === 'delete-ip') {
    const ipId = formData.get('ipId');

    if (!ipId || typeof ipId !== 'string') {
      throw new Response('Invalid ID', { status: 400 });
    }

    await deleteIpById(ipId);

    return {
      success: true,
      intent: 'delete-ip',
    };
  }

  return null;
}

export default function Ips({ loaderData }: Route.ComponentProps) {
  return <IpMain ips={loaderData.ips} />;
}
