import { apiClient } from '~/lib/apiClient';
import type { CreateApplicationRequest } from '~/types/CreateApplicationRequest';
import type { CreateApplicationGroupRequest } from '~/types/CreateApplicationRequest copy';

export async function getApplications() {
  return await apiClient('/applications');
}

export async function getApplicationById(id: string) {
  return await apiClient(`/applications/${id}`);
}

export async function getStatistics() {
  return await apiClient('/statistics');
}

export async function createApplication(req: CreateApplicationRequest) {
  return apiClient('/applications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}

export async function updateApplicationById(id: string, req: CreateApplicationRequest) {
  return apiClient(`/applications/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}

export async function createApplicationGroup(appId: string, req: CreateApplicationGroupRequest) {
  return apiClient(`/applications/${appId}/groups`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}
