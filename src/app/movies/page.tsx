import React from 'react';

import MainLayout from '@/layouts/main-layout';

import type { WithPageLayout } from '@/types/with-page-layout';

const MoviesPage: WithPageLayout = () => <div>MoviesPage</div>;

MoviesPage.PageLayout = MainLayout;
export default MoviesPage;
