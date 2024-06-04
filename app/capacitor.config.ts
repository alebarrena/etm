import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'app',
  webDir: 'www',
  server: {
    allowNavigation: ['https://etmmeet.org']
  }
};

export default config;
