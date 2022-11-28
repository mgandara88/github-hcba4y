import { defineNitroConfig } from 'nitropack';

export default defineNitroConfig({
  routeRules: {
    '*': {
      cors: true,
      headers: { 'access-control-allowed-methods': 'GET' },
    },
  },
});
