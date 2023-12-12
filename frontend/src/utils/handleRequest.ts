export async function handleRequest<T>(promise: Promise<any>): Promise<T> {
  return await promise
    .then(response => response.data)
    .catch(err => {
      throw err;
    });
}
