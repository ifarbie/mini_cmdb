import { apiClient } from '~/lib/apiClient';
import type { CreateApplicationRequest } from '~/types/CreateApplicationRequest';
import type { CreateApplicationGroupRequest } from '~/types/CreateApplicationGroupRequest';
import type { CreateIpRequest } from '~/types/CreateIpRequest';

export async function getStatistics() {
  return await apiClient('/statistics');
}

// APPLICATIONS
export async function getApplications() {
  return await apiClient('/applications');
}

export async function getApplicationById(id: string) {
  return await apiClient(`/applications/${id}`);
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

export async function deleteApplicationById(applicationId: string) {
  return await apiClient(`/applications/${applicationId}`, {
    method: 'DELETE',
  });
}

// APP GROUP
export async function getApplicationGroupById(groupId: string) {
  return await apiClient(`/applications/groups/${groupId}`);
}

export async function getApplicationGroups() {
  return await apiClient('/groups');
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

export async function deleteApplicationGroupById(groupId: string) {
  return await apiClient(`/applications/groups/${groupId}`, {
    method: 'DELETE',
  });
}

export async function updateApplicationGroupById(id: string, req: CreateApplicationGroupRequest) {
  return apiClient(`/applications/groups/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}


// IP
export async function getIps() {
  return await apiClient('/ips');
}

export async function getIpById(ipId: string) {
  return await apiClient(`/ips/${ipId}`);
}

export async function createIp(req: CreateIpRequest) {
  return apiClient(`/ips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}

export async function updateIpById(ipId: string, req: CreateIpRequest) {
  return apiClient(`/ips/${ipId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}

export async function deleteIpById(ipId: string) {
  return await apiClient(`/ips/${ipId}`, {
    method: 'DELETE',
  });
}

export async function addIpToGroup(groupId: string, req: { ipId: string }) {
  return apiClient(`/groups/${groupId}/ips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}

export async function removeIpFromGroup(groupId: string, req: { ipId: string }) {
  return await apiClient(`/groups/${groupId}/ips`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(req),
  });
}
