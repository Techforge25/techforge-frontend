import ServicesGrid from "@/components/services/services-grid";
import { servicesPageCards, servicesPageCopy } from "@/data/services";

export default function ServicesGridSection() {
  return (
    <ServicesGrid
      copy={servicesPageCopy}
      cards={servicesPageCards}
      loadMoreConfig={{ initialCount: 8, step: 4 }}
    />
  );
}
