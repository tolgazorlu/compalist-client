import Advantage from "../../components/02_Home/Landing/Advantage";
import BlogSection from "../../components/02_Home/Landing/BlogSection";
import Contact from "../../components/02_Home/Landing/Contact";
import FAQ from "../../components/02_Home/Landing/FAQ";
import List from "../../components/02_Home/Landing/List";
import Roadmap from "../../components/02_Home/Landing/Roadmap";
import Search from "../../components/02_Home/Landing/Search";
import Suggest from "../../components/02_Home/Landing/Suggest";

const Home = () => {
  return (
    <>
      <Search />
      <Advantage />
      <Roadmap />
      <List />
      <Suggest />
      <BlogSection />
      <FAQ />
      <Contact />
    </>
  );
};

export default Home;
