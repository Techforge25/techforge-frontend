import ServicesGrid from "@/components/services/services-grid";
import { homeRecentServicesCards, homeServicesCopy } from "@/data/services";

export default function OurServicesSection() {
  return (
    <ServicesGrid copy={homeServicesCopy} cards={homeRecentServicesCards} />
  );
}
