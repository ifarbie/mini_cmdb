import type { ApplicationGroup } from "./ApplicationGroup";

export type Application = {
  id: number;
  name: string;
  environment: string;
  status: string;
  description: string;
  groups: ApplicationGroup[];
};