import { XataClient } from '../vendor/xata';

const xata = new XataClient({
  branch: process.env.XATA_BRANCH || 'main',
  apiKey: process.env.XATA_API_KEY,
  databaseURL: process.env.XATA_DATABASE_URL
});

export default xata;
