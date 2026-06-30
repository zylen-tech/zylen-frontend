// Thin fetch wrapper — swap for Axios when backend is added.
// All feature services (leads, integrations, etc.) import from here.

const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? '/api';

const request = async <T>(path: string, options?: RequestInit): Promise<T> => {
  const token =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const res = await fetch(`${BASE_URL}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    },
    ...options,
  });

  if (res.status === 401 && typeof window !== 'undefined') {
    localStorage.removeItem('token');
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(
      (body as { message?: string }).message ?? `API error ${res.status}`,
    );
  }

  return res.json() as Promise<T>;
};

const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),
  patch: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};

export default api;
