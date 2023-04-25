import type { NextPage } from "next";
import React from "react";

import BasePageLayout from "@/src/components/Layout/BasePageLayout";
import Blog from "@/src/components/organisms/Blog/blog";

const BlogPage: NextPage = () => {
  return (
    <BasePageLayout title="Blog">
      < Blog/>
    </BasePageLayout>
  );
};

export default BlogPage;
