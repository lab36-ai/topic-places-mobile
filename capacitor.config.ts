import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ai.lab36.topicplaces',
  appName: 'Topic Places',
  // webDir is required even when using remote URL — Capacitor populates
  // a placeholder index.html here as a fallback when the remote is
  // unreachable.
  webDir: 'www',
  // Remote URL pattern — APK is a thin native shell that loads the
  // live PWA. Trade-off: requires network, no offline. Wins: zero
  // static-export gymnastics for Next.js SSR.
  server: {
    url: 'https://topic-places.vercel.app',
    cleartext: false,
    androidScheme: 'https',
  },
};

export default config;
