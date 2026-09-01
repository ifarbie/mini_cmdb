export type Ip = {
  id: number;
  ipAddress: string;
  hostname: string;
  description: string;
  groups: {
    id: number;
    name: string;
    description: string;
  }[];
};