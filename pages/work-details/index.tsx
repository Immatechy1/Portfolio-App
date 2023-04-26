import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@/src/components/Layout/BasePageLayout";
import Works from "@/src/components/organisms/Works/works";
import WorkDetails from "@/src/components/organisms/WorkDetails/WorkDetails";

const WorksPage: NextPage = () => {
  return (
    <BasePageLayout title="work-details">
      <WorkDetails  />
    </BasePageLayout>
  );
};

export default WorksPage;
