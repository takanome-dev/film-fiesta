import { useSession } from "next-auth/react";

import Meta from "~/components/meta";
import MainLayout from "~/layouts/main-layout";
import type { WithPageLayout } from "~/types/with-page-layout";

const UserProfilePage: WithPageLayout = () => {
  const { data: session } = useSession();
  const user = session?.user;

  return (
    <>
      <Meta page={user?.name ?? "User Profile"} noindex />
      <div className="flex min-h-[70vh] flex-col items-center justify-center">
        <h1 className="text-4xl">Coming soon 🚀</h1>
        <p className="mt-4 text-xl">👷 This page is under construction 👷</p>
      </div>
    </>
  );
};

UserProfilePage.PageLayout = MainLayout;
export default UserProfilePage;
