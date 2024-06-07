import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'org.etmmeet.app',
  appName: 'EtmMeet',
  webDir: 'www',
  server: {
    allowNavigation: ['https://etmmeet.org']
  }
};

export default config;
