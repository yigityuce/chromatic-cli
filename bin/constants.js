// Note this file differs from our usual convention because it is packaged
const {
  CHROMATIC_SERVER_PORT = 3004,
  CHROMATIC_INDEX_URL = 'https://index.chromaticqa.com',
  CHROMATIC_TUNNEL_URL = 'https://tunnel.chromaticqa.com',
  CHROMATIC_CREATE_TUNNEL = 'true',
  CHROMATIC_APP_CODE,
  CHROMATIC_RETRIES = 5,
  CHROMATIC_POLL_INTERVAL = 1000,
  CHROMATIC_TIMEOUT = 5 * 60 * 1000,
  CHROMATIC_STORYBOOK_VERSION,
  LOGGLY_CUSTOMER_TOKEN = 'b5e26204-cdc5-4c78-a9cc-c69eb7fabad3',
} = process.env;

const ENVIRONMENT_WHITELIST = [/^GERRIT/, /^TRAVIS/];

const STORYBOOK_CLI_FLAGS_BY_VERSION = {
  '--ci': '4.0.0',
  '--loglevel': '5.1.0',
};

export {
  CHROMATIC_SERVER_PORT,
  CHROMATIC_INDEX_URL,
  CHROMATIC_TUNNEL_URL,
  CHROMATIC_CREATE_TUNNEL,
  CHROMATIC_APP_CODE,
  CHROMATIC_RETRIES,
  CHROMATIC_POLL_INTERVAL,
  CHROMATIC_TIMEOUT,
  CHROMATIC_STORYBOOK_VERSION,
  LOGGLY_CUSTOMER_TOKEN,
  STORYBOOK_CLI_FLAGS_BY_VERSION,
  ENVIRONMENT_WHITELIST,
};
