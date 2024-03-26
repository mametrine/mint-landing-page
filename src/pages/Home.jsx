import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ProductInfo } from "../components/ProductInfo";
import { Footer } from "../components/Footer";

export const Home = () => (
  <div className="w-full bg-top overflow-x-hidden bg-[url('images/colourised-clouds.jpg')] bg-no-repeat relative">
    <Layout>
      <Header />
      <Hero />
      <ProductInfo />
    </Layout>
    <Footer />
  </div>
);

// url() is relative to the stylesheet.
