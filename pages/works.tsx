import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@/src/components/Layout/BasePageLayout";
import Works from "@/src/components/organisms/Works/works";

const WorksPage: NextPage = () => {
  return (
    <BasePageLayout title="Work">
      <Works />
    </BasePageLayout>
  );
};

export default WorksPage;
