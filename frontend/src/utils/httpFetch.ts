import { config } from '@/config';
import type { RequestInit } from 'next/dist/server/web/spec-extension/request';
import { handleErrorsMessage } from './handleErrorsMessage';

type UrlEndpoint = string;

interface HttpFetchClientOptions extends RequestInit {
  body?: any;
}

export interface ApiResult {
  status: number;
  result: any;
  error?: string;
}

export async function httpFetch<T>(
  url: UrlEndpoint,
  options: HttpFetchClientOptions = {}
): Promise<T> {
  const response = await fetch(config.api.base + url, { ...options });
  if (!response.ok) {
    const resp = await response.json();
    const status = response.status;
    handleErrorsMessage(status, resp);
  }
  const data = await response.json();
  return data as T;
}

httpFetch.get = async <T>(
  url: UrlEndpoint,
  options: HttpFetchClientOptions = {}
): Promise<T> => {
  return await httpFetch<T>(url, { ...options, method: 'GET' });
};

httpFetch.post = async <T>(
  url: UrlEndpoint,
  data: Record<string, any> = {},
  options: HttpFetchClientOptions = {}
): Promise<T> => {
  return await httpFetch<T>(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

httpFetch.put = async <T>(
  url: UrlEndpoint,
  data: Record<string, any> = {},
  options: HttpFetchClientOptions = {}
): Promise<T> => {
  return await httpFetch<T>(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
};

httpFetch.delete = async <T>(
  url: UrlEndpoint,
  options: HttpFetchClientOptions = {}
): Promise<T> => {
  return await httpFetch<T>(url, { ...options, method: 'DELETE' });
};

export default httpFetch;
