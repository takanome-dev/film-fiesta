import type { NextPage } from 'next';
import type React from 'react';

export type WithPageLayout = NextPage & {
  PageLayout?: React.ComponentType<any>;
};
