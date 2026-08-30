import type { Ip } from "./Ip";

export type ApplicationGroup = {
  id: number;
  name: string;
  description: string;
  ips: Ip[];
};