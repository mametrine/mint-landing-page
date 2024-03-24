import { Layout } from "../components/Layout";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export const Home = () => (
  <div className="max-w-full bg-top overflow-hidden bg-[url('images/colourised-clouds.jpg')]">
    <Layout>
      <Header />
      <Hero />
    </Layout>
  </div>
);

// url() is relative to the stylesheet.
