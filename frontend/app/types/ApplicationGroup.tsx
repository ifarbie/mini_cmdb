import type { Application } from './Application';
import type { Ip } from './Ip';

export type ApplicationGroup = {
  id: number;
  name: string;
  description: string;
  ips: Ip[];
  application: Application;
};
