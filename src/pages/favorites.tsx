import React from 'react';

import MainLayout from '@/layouts/main-layout';

import type { WithPageLayout } from '@/types/with-page-layout';

const FavoritePage: WithPageLayout = () => <div>FavoritePage</div>;

FavoritePage.PageLayout = MainLayout;
export default FavoritePage;
