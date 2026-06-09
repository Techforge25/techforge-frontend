import Link from "next/link";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";

export default function CareersCta() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      {/* Decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(81,96,255,0.14)_0%,rgba(0,0,12,0)_70%)] blur-[40px]"
      />

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-14 sm:py-[72px]">
          <div className="relative z-10 mx-auto w-full max-w-[960px] rounded-[24px] border border-[#272835] bg-[#121324] px-6 py-12 text-center sm:px-12 sm:py-16">
            <div className="flex flex-col items-center gap-6">
              <SectionBadge label="speculative application" className="h-[28px] border border-[rgba(255,255,255,0.15)] px-[11px] py-0 text-sm leading-none" />
              
              <SectionHeading
                line1="Don't see a role that fits?"
                line2Highlight="connect with us"
                line2After="anyway"
                className="max-w-[700px] text-[28px] leading-[1.1] sm:text-[36px] md:text-[44px] lg:text-[48px] md:leading-[52px]"
                line2ClassName="mt-1"
              />

              <p className="max-w-[580px] text-sm leading-relaxed text-[#cac6dd] sm:text-base">
                We are constantly expanding and always on the lookout for talented developers, designers, and AI engineers. Send us your profile and let&apos;s explore opportunities together.
              </p>

              <Link href="/contactUs" className="mt-4">
                <button
                  type="button"
                  data-magnetic="true"
                  className="inline-flex h-[47px] items-center justify-center whitespace-nowrap rounded-[140px] border border-[#2424a6] bg-[#00000c] px-6 text-base font-normal capitalize leading-none text-white transition-[box-shadow,filter,background-color,border-color] duration-200 hover:border-[#248aff] hover:bg-[#2424a6] hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:border-[#248aff] focus-visible:bg-[#2424a6] focus-visible:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] focus-visible:[filter:brightness(1.06)] focus-visible:outline-none"
                >
                  Send Speculative CV
                </button>
              </Link>
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
