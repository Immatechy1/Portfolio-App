import Head from "next/head";
import React from "react";

import Navbar from "@/src/componentData/Navbar/Navbar";
import Footer from "@/src/componentData/Footer/footer";

interface BasePageLayoutProps {
  children: any;
  showNavigation?: boolean;
  showFooter?: boolean;
  title?: string;
  description?: string;
  keywords?: string;
  sectionClass?: string;
}


const BasePageLayout: React.FC<BasePageLayoutProps> = ({
  children,
  title,
  description,
  keywords,
  showNavigation,
  showFooter,
}) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />
        <meta content={keywords} name="keywords" />
      </Head>
      <section className="">
        {showNavigation && (
          <>
          <div className="">
            <Navbar />
          </div>
          </>
        )}
        <main className="h-auto">{children}</main>
        {showFooter && (
          <>
            <div className="">
              <Footer />
            </div>
          </>
        )}
      </section>
    </div>
  );
};

BasePageLayout.defaultProps = {
  showFooter: true,
  showNavigation: true,
  title: "",
  description: "Buy now Pay Later, Rent Shortlets",
  keywords: "rent, loan, ecommerce, shortlets, vacations, spa",
  sectionClass: "",
};



export default BasePageLayout;







// function BasePageLayout({}: { children: React.ReactNode }) {
//   return (
//     <div>
//       <Head>
//         <title>Portfolio-App</title>
//         <meta content="description" name="description" />
//         <meta content="keywords" name="keywords" />
//       </Head>
//       <section className="">
//         <div className="">
//           <Navbar />
//         </div>
//         <div className="">
//           <Footer />
//         </div>
//       </section>
//     </div>
//   );
// }



// export default BasePageLayout;

