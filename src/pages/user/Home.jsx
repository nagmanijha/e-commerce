import React from "react";
import MainBanner from "../../components/home/MainBanner";
import Categories from "../../components/home/Categories";
import BestSeller from "../../components/home/BestSeller";
import BottomBanner from "../../components/home/BottomBanner";
import NewsLetter from "../../components/home/NewsLetter";

const Home = () => {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLetter />
    </div>
  );
};

export default Home;
