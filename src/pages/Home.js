import Ad from "../components/home/Ad";
import Banner from "../components/home/Banner";
import Features from "../components/home/Features";
import Wrapper from "../components/layouts/Wrapper";
import Products from "../components/products/Products";

const Home = () => {
  return (
    <Wrapper title="Home | Ecommerce">
      <Banner />
      <Features />
      <Products title={"top new arrival"} />
      <Ad />
      <Products title={"recomended for you"} />
    </Wrapper>
  );
};

export default Home;
