import Image from "next/image";
import { notFound } from "next/navigation";
import OurWorkProcessSection from "@/app/home/our-work-process-section";
import FaqSection from "@/app/home/faq-section";
import SectionBadge from "@/components/ui/section-badge";
import {
  getServiceBySlug,
  serviceDetailPageDefaults,
  serviceDetails,
} from "@/data/services";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceDetails.map((service) => ({ slug: service.slug }));
}

function resolvePageCopy(service: NonNullable<ReturnType<typeof getServiceBySlug>>) {
  const overviewSection = service.sections?.find((section) => section.heading.toLowerCase() === "overview");

  return {
    badgeLabel: service.badgeLabel ?? serviceDetailPageDefaults.badgeLabel,
    mainVisual: service.mainVisual ?? serviceDetailPageDefaults.mainVisual,
    overviewHeading: service.overviewHeading ?? serviceDetailPageDefaults.overviewHeading,
    overviewContent:
      service.overviewContent ??
      overviewSection?.content ??
      service.description ??
      serviceDetailPageDefaults.overviewContent,
    benefitsHeading: service.benefitsHeading ?? serviceDetailPageDefaults.benefitsHeading,
    benefitsContent: service.benefitsContent,
    benefits: service.benefits?.length ? service.benefits : serviceDetailPageDefaults.benefits,
    goalHeading: service.goalHeading ?? serviceDetailPageDefaults.goalHeading,
    goalContent: service.goalContent ?? serviceDetailPageDefaults.goalContent,
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const copy = resolvePageCopy(service);

  return (
    <>
      <section className="relative w-full overflow-hidden bg-[#00000c] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[72px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(70,82,220,0.26)_0%,rgba(18,22,58,0.14)_45%,rgba(0,0,12,0)_72%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(81,96,255,0.35)_1px,transparent_1px)] [background-size:9px_9px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <div className="flex flex-col gap-8 lg:gap-8">
            <header className="mx-auto flex w-full max-w-[790px] flex-col items-center gap-[22px] text-center">
              <SectionBadge label={copy.badgeLabel} className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none" />
              <h1 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[34px] uppercase leading-[1.08] text-transparent sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
                {service.title}
              </h1>
              <p className="w-full max-w-[554px] text-center text-base leading-[1.4] text-[#cac6dd]">
                {service.description}
              </p>
            </header>

            <div className="overflow-hidden rounded-[22px] border border-[#121324] bg-[rgba(19,19,36,0.5)] p-px">
              <div className="relative h-[260px] w-full overflow-hidden rounded-[21px] sm:h-[340px] lg:h-[479px]">
                <Image
                  src={copy.mainVisual}
                  alt={service.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <article className="space-y-10">
              <section className="space-y-3">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-[30px] font-medium leading-[1.2] text-transparent">
                  {copy.overviewHeading}
                </h2>
                <p className="text-base leading-[1.4] text-[#cac6dd]">{copy.overviewContent}</p>
              </section>

              <section className="space-y-3">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-[30px] font-medium leading-[1.2] text-transparent">
                  {copy.benefitsHeading}
                </h2>
                <ul className="space-y-3">
                  {copy.benefits.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-base leading-[1.4] text-[#cac6dd]">
                      <span className="mt-[2px] inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border border-white bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(90deg,#5160FF_0%,#5160FF_100%)] shadow-[0_0.78px_1.56px_0_rgba(26,19,161,0.5),0_0_0_0.78px_#4f47eb]">
                        <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
                          <path
                            d="M12.67 4.67L6.56 10.78L3.33 7.56"
                            fill="none"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-[30px] font-medium leading-[1.2] text-transparent">
                  {copy.goalHeading}
                </h2>
                <p className="text-base leading-[1.4] text-[#cac6dd]">{copy.goalContent}</p>
              </section>
            </article>
          </div>
        </div>
      </section>

      <OurWorkProcessSection />
      <FaqSection />
    </>
  );
}
