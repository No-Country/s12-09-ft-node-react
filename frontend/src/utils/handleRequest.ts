export function handleRequest<T>(promise: Promise<any>): Promise<T> {
  return promise
    .then(({ data }) => data)
    .catch(err => {
      throw new Error(err);
    });
}
