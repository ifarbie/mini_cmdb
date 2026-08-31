import type { Ip } from '~/types/Ip';
import IpHeader from './IpHeader';
import IpTable from './IpTable';

type IpMainProps = {
  ips: Ip[];
};

export default function IpMain({ ips }: IpMainProps) {
  return (
    <main className='flex-1 bg-gray-50 p-8 text-gray-900'>
      {/* Header */}
      <IpHeader />

      {/* Table */}
      <IpTable ips={ips} />
    </main>
  );
}
