import MainLayout from '@/layouts/main-layout';

import type { WithPageLayout } from '@/types/with-page-layout';

const FavoritePage: WithPageLayout = () => (
  <div>
    <p>FavoritePage</p>
  </div>
);

FavoritePage.PageLayout = MainLayout;
export default FavoritePage;
