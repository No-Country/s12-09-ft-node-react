import { config } from '@/config';
import type { RequestInit } from 'next/dist/server/web/spec-extension/request';

type UrlEndpoint = string;

interface HttpFetchClientOptions extends RequestInit {
  body?:
    | string
    | Buffer
    | FormData
    | URLSearchParams
    | ReadableStream<Uint8Array>
    | null;
}

export async function httpFetch<T>(
  url: UrlEndpoint,
  options: HttpFetchClientOptions = {}
): Promise<T> {
  try {
    const response = await fetch(config.api.base + url, { ...options });
    console.log(response);
    if (!response.ok) {
      console.log(await response.json());
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    return data as T;
  } catch (error) {
    console.error(error);
  }
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
