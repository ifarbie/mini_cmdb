import { env } from '~/config/env';

export async function apiClient(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${env.apiUrl}${endpoint}`, options);

  if (!response.ok) {
    const error = await response.json();

    throw new Error(`${response.status} ${response.statusText} - ${error.errors}`);
  }

  
  return response.json();
}
