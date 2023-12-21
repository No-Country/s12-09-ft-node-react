export async function handleRequest<T>(promise: Promise<T>): Promise<T> {
  return await promise
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(err => {
      throw err;
    });
}
