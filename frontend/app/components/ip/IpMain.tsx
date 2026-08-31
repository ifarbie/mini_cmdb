import type { Ip } from '~/types/Ip';
import IpTable from './IpTable';
import PageHeader from '../ui/PageHeader';

type IpMainProps = {
  ips: Ip[];
};

export default function IpMain({ ips }: IpMainProps) {
  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      {/* Header */}
      <PageHeader title='IP Addresses' description="Manage IP addresses used in the system." to='/ips/new' buttonText='+ Add IP'  />

      {/* Table */}
      <IpTable ips={ips} />
    </main>
  );
}
