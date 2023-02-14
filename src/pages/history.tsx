import React from 'react';

import MainLayout from '@/layouts/main-layout';

import type { WithPageLayout } from '@/types/with-page-layout';

const HistoryPage: WithPageLayout = () => (
  <div className="flex min-h-[70vh] flex-col items-center justify-center">
    <h1 className="text-4xl">Coming soon 🚀</h1>
    <p className="mt-4 text-xl">👷 This page is under construction 👷</p>
  </div>
);

HistoryPage.PageLayout = MainLayout;
export default HistoryPage;
