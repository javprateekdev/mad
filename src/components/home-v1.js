import React from "react";
import Navbar from "./global-components/navbar";
import Banner from "./section-components/banner-v3";
import Counter from "./section-components/counter-v1";
import Apartment from "./section-components/apartment-v1";
import Category from "./section-components/category-v1";
import CallToActionV1 from "./section-components/call-to-action-v1";
import Footer from "./global-components/footer";
import Map from "./section-components/map.js";
import ProductSlider from "./section-components/product-slider-v2";
import Video from "./section-components/video-v2";

const Home_V1 = () => {
  return (
    <div>
      
      <Navbar />
      <Banner />
      <Counter />
      <Video />
      <Apartment />
      <ProductSlider />
      <Category />
      <Map />
      <CallToActionV1 />
      <Footer />
    </div>
  );
};

export default Home_V1;
