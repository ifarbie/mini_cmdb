import { env } from '~/config/env';

export async function apiClient(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${env.apiUrl}${endpoint}`, options);

  if (!response.ok) {
    throw new Error('API request failed');
  }

  return response.json();
}
