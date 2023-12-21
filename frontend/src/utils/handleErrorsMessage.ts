export function handleErrorsMessage(status: number, response: any) {
  console.log(status, response);
  console.log(typeof response);
  throw new Error(JSON.stringify(response));
}
