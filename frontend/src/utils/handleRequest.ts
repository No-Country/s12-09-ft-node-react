import type { AxiosResponse } from 'axios';

export async function handleRequest<T>(
  promise: Promise<AxiosResponse<T>>
): Promise<T> {
  return await promise.then(response => response.data).catch(err => err);
}
