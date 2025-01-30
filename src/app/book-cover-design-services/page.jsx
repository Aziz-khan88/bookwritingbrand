import Banenr from "@/src/app/services/banner";
import Clients from "@/src/app/home/clients";
import BestSeller from "@/src/app/home/bestseller";
import InnerServices from "@/src/app/services/innerservices";
import ServicesForm from "@/src/app/services/servicesform";
import Services from "@/src/app/home/services";
import { InnerServicesData, ServicesData, BannerData, ProcessData } from "@/src/app/book-cover-design-services/data/data";
import ServicesProcess from "@/src/app/services/servicesprocess";



export default function Page() {
    return (
        <>
            <Banenr data={BannerData} />
            <Clients />
            <ServicesForm />
            <BestSeller innerPage={true} />
            <InnerServices data={InnerServicesData} />
            <Services data={ServicesData} />
            <ServicesProcess data={ProcessData} />
        </>
    );
}
