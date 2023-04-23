import Head from "next/head";
import React from "react";

import Navbar from "@/src/componentData/Navbar/Navbar";


const BasePageLayout = ({ }) => {
    return (
      <div>
        <Head>
          <title>Portfolio</title>
          <meta content="description" name="description" />
          <meta content="keywords" name="keywords" />
        </Head>

        <section className="">
          <Navbar/>
         
        </section>
      </div>
    );
  };

export default BasePageLayout;