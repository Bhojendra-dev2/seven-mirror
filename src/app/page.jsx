import React from "react";
import HeroSlider from "./components/HeroSlider";
import DiscoverStays from "./components/DiscoberStay";
import Banner from "./components/Banner";
import CityBanner from "./components/CityBanner";
import FeaturedStay from "./components/FeaturedStay";
import LumenRoyale from "./components/LumenRoyal";
import Vila from "./components/Vilas";
import GuestReviews from "./components/GuestReviews";
import AddYourProperty from "./AddYourProperty";
import StayJournal from "./components/StayJournal";
import { ST } from "next/dist/shared/lib/utils";
import InstagramFeed from "./components/InstagramFeed";

export default function page() {
  return (
    <div>
      <HeroSlider />
      <DiscoverStays />
      <Banner />
      <CityBanner />
      <FeaturedStay />
      <LumenRoyale />
      <Vila />
      <GuestReviews />
      <AddYourProperty />
      <StayJournal />
      <InstagramFeed />
    </div>
  );
}
