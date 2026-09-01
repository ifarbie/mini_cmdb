import { env } from '~/config/env';

export async function apiClient(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${env.apiUrl}${endpoint}`, options);

  if (!response.ok) {
  const error = await response.text();

  throw new Error(
    `API request failed: ${response.status} ${response.statusText} - ${error}`,
  );
}
  return response.json();
}
