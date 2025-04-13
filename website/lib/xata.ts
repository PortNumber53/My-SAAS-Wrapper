import { XataClient } from '../vendor/xata';

const assertEnvVar = (name: string, value?: string): string => {
  if (!value) {
    throw new Error(`${name} environment variable is not defined`);
  }
  return value;
};

const xata = new XataClient({
  branch: process.env.XATA_BRANCH || 'main',
  apiKey: assertEnvVar('XATA_API_KEY', process.env.XATA_API_KEY),
  databaseURL: assertEnvVar('XATA_DATABASE_URL', process.env.XATA_DATABASE_URL)
});

export default xata;
