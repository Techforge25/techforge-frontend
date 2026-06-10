import { notFound } from "next/navigation";
import Link from "next/link";
import SiteHeader from "@/components/layout/site-header";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { getJobBySlug, jobPositions } from "@/data/careers";
import JobApplicationForm from "@/components/careers/job-application-form";

type JobDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return jobPositions.map((job) => ({ slug: job.slug }));
}

export default async function JobDetailPage({ params }: JobDetailPageProps) {
  const { slug } = await params;
  const job = getJobBySlug(slug);

  if (!job) {
    notFound();
  }

  // Filter related jobs (exclude the active one)
  const relatedJobs = jobPositions.filter((pos) => pos.slug !== slug);

  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#00000c] px-4 pb-12 pt-20 sm:px-6 sm:pb-16 sm:pt-24 lg:px-8 lg:pb-[52px]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(70,82,220,0.26)_0%,rgba(18,22,58,0.14)_45%,rgba(0,0,12,0)_72%)]"
        />
        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <header className="mx-auto flex w-full max-w-[850px] flex-col items-center gap-[22px] text-center">
            <span className="rounded-[100px] border border-[#2424a6] bg-[rgba(36,36,166,0.2)] px-3 py-[5px] text-[10px] font-semibold leading-[1.2] text-[#5160ff] inline-block uppercase">
              {job.department}
            </span>
            <h1 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[34px] uppercase leading-[1.08] text-transparent sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
              {job.title}
            </h1>

            {/* Meta badges */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#cac6dd]">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M8 15s5-4.5 5-9A5 5 0 103 6c0 4.5 5 9 5 9zm0-11a2 2 0 100 4 2 2 0 000-4z" />
                </svg>
                {job.location}
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M1.5 4a2 2 0 012-2h9a2 2 0 012 2v8a2 2 0 01-2 2h-9a2 2 0 01-2-2V4zm2-1h9a1 1 0 011 1v2.5h-11V4a1 1 0 011-1z" />
                </svg>
                {job.type}
              </span>
              <span className="h-4 w-px bg-white/20" />
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M12.5 13.5v-1a2 2 0 00-2-2h-5a2 2 0 00-2 2v1M8 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                </svg>
                {job.experience}
              </span>
            </div>

            <Link href="#apply-now" className="mt-2">
              <button
                type="button"
                data-magnetic="true"
                className="inline-flex h-[47px] items-center justify-center whitespace-nowrap rounded-[140px] border border-[#2424a6] bg-[#00000c] px-6 text-base font-normal capitalize leading-none text-white transition-[box-shadow,filter,background-color,border-color] duration-200 hover:border-[#248aff] hover:bg-[#2424a6] hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:border-[#248aff] focus-visible:bg-[#2424a6] focus-visible:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] focus-visible:[filter:brightness(1.06)] focus-visible:outline-none"
              >
                Apply for this role
              </button>
            </Link>
          </header>
        </div>
      </section>

      {/* Main Details Grid */}
      <SectionPaddingX120R72>
        <div className="relative z-10 mx-auto w-full max-w-[1200px] pt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">

            {/* Left detail body */}
            <div className="space-y-10 lg:col-span-2">

              {/* About Role */}
              <section className="space-y-3">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-2xl font-semibold leading-[1.2] text-transparent sm:text-3xl">
                  About the Role
                </h2>
                <p className="text-sm leading-relaxed text-[#cac6dd] sm:text-base">
                  {job.aboutRole}
                </p>
              </section>

              {/* Responsibilities */}
              <section className="space-y-4">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-2xl font-semibold leading-[1.2] text-transparent sm:text-3xl">
                  Key Responsibilities
                </h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#cac6dd] sm:text-base">
                      <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#5160ff]" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Requirements */}
              <section className="space-y-4">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-2xl font-semibold leading-[1.2] text-transparent sm:text-3xl">
                  Requirements & Experience
                </h2>
                <ul className="space-y-3">
                  {job.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#cac6dd] sm:text-base">
                      <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-[#5160ff]" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Nice to Haves */}
              {job.niceToHave?.length ? (
                <section className="space-y-4">
                  <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-2xl font-semibold leading-[1.2] text-transparent sm:text-3xl">
                    Nice to Have
                  </h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#cac6dd] sm:text-base">
                        <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-indigo-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}

              {/* Role Specific Perks */}
              <section className="space-y-4">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-2xl font-semibold leading-[1.2] text-transparent sm:text-3xl">
                  Perks & Benefits
                </h2>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-[#cac6dd] sm:text-base">
                      <span className="mt-[6px] h-2 w-2 shrink-0 rounded-full bg-emerald-400" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Application form container anchor */}
              <section id="apply-now" className="scroll-mt-24 pt-6">
                <JobApplicationForm jobTitle={job.title} />
              </section>
            </div>

            {/* Right sidebar - Related jobs widget */}
            <div className="space-y-8 lg:col-span-1">
              <div className="rounded-2xl border border-[#121324] bg-[rgba(19,19,36,0.5)] p-6 sticky top-28">
                <h3 className="text-lg font-semibold text-white">Other Open Positions</h3>
                <div className="my-4 h-px w-full bg-[#121324]" />

                {relatedJobs.length > 0 ? (
                  <div className="space-y-4">
                    {relatedJobs.map((related) => (
                      <div key={related.slug} className="group flex flex-col gap-1 rounded-xl bg-[#0c0d1e] p-4 border border-[transparent] transition-all hover:border-[#2424a6]">
                        <span className="text-[10px] font-semibold text-[#5160ff] capitalize">{related.department}</span>
                        <h4 className="text-sm font-semibold text-white group-hover:text-[#5160ff] transition-colors">{related.title}</h4>
                        <span className="text-xs text-[#8f96a6]">{related.location}</span>
                        <Link href={`/careers/${related.slug}`} className="text-xs font-semibold text-[#5160ff] mt-2 inline-flex items-center gap-1 group-hover:underline">
                          View role
                          <svg width="10" height="10" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M3 8h10M9 4l4 4-4 4" />
                          </svg>
                        </Link>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-[#8f96a6]">No other open positions available at this time.</p>
                )}
              </div>
            </div>

          </div>
        </div>
      </SectionPaddingX120R72>

      <div className="h-20" />
    </main>
  );
}
