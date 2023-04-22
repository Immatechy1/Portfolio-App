import Head from 'next/head';
import BasePageLayout from '@/src/components/Layout/BasePageLayout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio</title>
      </Head>
      <div className="">
        <h1 className="p-10 bg-black text-white text-12 font-bold underline">
          Hello Imma
        </h1>
      </div>
      <BasePageLayout />
    </div>
  );
}

export default Home;

