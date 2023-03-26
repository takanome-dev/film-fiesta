import React from "react";

import Header from "~/components/header";

const SimpleLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <main className="relative py-6 md:mr-8 lg:mx-10 lg:py-10">{children}</main>
  </>
);

export default SimpleLayout;
