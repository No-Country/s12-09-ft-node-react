export function handleRequest<T>(promise: Promise<any>): Promise<T> {
  return promise
    .then(response => response.data)
    .catch(err => {
      throw new Error(err);
    });
}
