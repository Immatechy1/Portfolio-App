import BasePageLayout from "@/src/components/Layout/BasePageLayout";
import  {HomePage}  from '@/src/modules/LandingPage/HomePage';


const Home = () => {
  return (
    <BasePageLayout title="Home" >
      <HomePage />
    </BasePageLayout>
  );
};
export default Home;
