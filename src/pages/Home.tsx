import Banner from "../components/Banner";
import Loading from "../components/Loading";
import RandomMP from "../components/RandomMP";
import Story from "../components/Story";

const Home = () => {
  const isLoading: boolean = false;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <Banner />
      <RandomMP />
      <Story />
    </>
  );
};

export default Home;
