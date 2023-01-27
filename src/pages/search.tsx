import React from 'react';

import MainLayout from '@/layouts/main-layout';

import type { WithPageLayout } from '@/types/with-page-layout';

const SearchPage: WithPageLayout = () => <div>SearchPage</div>;

SearchPage.PageLayout = MainLayout;
export default SearchPage;
