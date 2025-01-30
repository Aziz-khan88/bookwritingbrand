import Banner from "@/src/app/home/banner";
import Clients from "@/src/app/home/clients";
import Story from "@/src/app/home/story";
import Services from "@/src/app/home/services";
import WhyChoose from "@/src/app/home/whychoose";
import BestSeller from "@/src/app/home/bestseller";
import CTA from "@/src/app/home/cta";
import Reviews from "@/src/app/home/reviews";
import Faqs from "@/src/app/home/faq";
import { ServicesData, ProcessData, CtaData } from "@/src/app/home/data/data";


export default function Home() {
  return (
    <>
      <Banner />
      <Clients />
      <Story />
      <Services data={ServicesData} />
      <WhyChoose data={ProcessData} />
      <BestSeller />
      <CTA data={CtaData} />
      <Reviews />
      <Faqs />
    </>
  );
}
