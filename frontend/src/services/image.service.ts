import axios from 'axios';

export async function upload(data: any) {
  const endpoint = 'https://api.cloudinary.com/v1_1/luis-salcedo/image/upload/';

  return await new Promise((resolve, reject) => {
    axios
      .post(endpoint, data)
      .then(({ data }) => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}
