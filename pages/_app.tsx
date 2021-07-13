import { UniformTracker } from '@uniformdev/optimize-tracker-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import '../styles/style.css';

// for locally downloaded intent data and tracker from npm
import { localTracker } from '../lib/local-tracker';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { Tracker } from '@uniformdev/optimize-tracker-common';

import { IntentVector } from '@uniformdev/optimize-common';

export type UniformConfAppProps = AppProps & {
  tracker?: Tracker;
  scoring?: IntentVector;
};

export default function UniformConfApp({ Component, pageProps, tracker, scoring }: UniformConfAppProps) {
  const trackerInstance = tracker || localTracker;

  return (
    <UniformTracker trackerInstance={trackerInstance} initialIntentScores={scoring}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UniformTracker>
  );
}
