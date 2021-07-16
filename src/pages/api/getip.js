import axios from 'axios';

export default async function handler(req, res) {
  await axios
    .get('https://ipinfo.io')
    .then(function (response) {
      console.log(response.data);

      res.status(200).json(response.data);
    })
    .catch(function (error) {
      console.log(error);

      res.status(500).json(error);
    });
}
