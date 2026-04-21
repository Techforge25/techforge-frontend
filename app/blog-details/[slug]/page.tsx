import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/site-header";
import { blogDetails, getBlogBySlug } from "@/data/blogs";
import type { BlogDetailSection } from "@/data/blogs";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogDetails.map((blog) => ({ slug: blog.slug }));
}

function BlogDetailSectionBlock({ section }: { section: BlogDetailSection }) {
  return (
    <section className="space-y-3">
      <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-[30px] font-medium leading-[1.2] text-transparent">
        {section.heading}
      </h2>

      {section.paragraphs.map((paragraph) => (
        <p key={paragraph} className="text-base leading-[1.4] text-[#cac6dd]">
          {paragraph}
        </p>
      ))}

      {section.forExampleLabel ? (
        <p className="text-base italic leading-[1.4] text-[#cac6dd]">{section.forExampleLabel}</p>
      ) : null}

      {section.bullets?.length ? (
        <ul className="space-y-[10px]">
          {section.bullets.map((item) => (
            <li key={item} className="flex items-start gap-3 text-base leading-[1.4] text-[#cac6dd]">
              <span className="mt-[5px] h-3 w-3 shrink-0 rounded-full bg-white" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.closing ? <p className="text-base leading-[1.4] text-[#cac6dd]">{section.closing}</p> : null}
    </section>
  );
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const blog = getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />

      <section className="relative overflow-hidden bg-[#00000c] px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-[-70px] z-0 h-[520px] bg-[radial-gradient(52%_58%_at_50%_28%,rgba(58,59,145,0.58)_0%,rgba(41,42,101,0.38)_38%,rgba(14,15,31,0.16)_72%,rgba(3,3,19,0)_100%)] md:h-[620px]"
        />

        <div className="relative z-10 mx-auto w-full max-w-[1200px]">
          <header className="mx-auto flex w-full max-w-[790px] flex-col items-center gap-[22px] text-center">
            <div className="inline-flex h-[28px] items-center rounded-[100px] border border-[#2424a6] bg-[rgba(36,36,166,0.2)] px-3 py-[5px] text-[10px] font-medium leading-[1.2] text-[#5160ff]">
              {blog.category}
            </div>
            <h1 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[34px] uppercase leading-[1.08] text-transparent sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
              {blog.title}
            </h1>
          </header>

          <div className="mt-8 overflow-hidden rounded-[22px] border border-[#121324] bg-[rgba(19,19,36,0.5)] p-px">
            <div className="relative h-[280px] w-full overflow-hidden rounded-[21px] bg-[#060606] sm:h-[420px] lg:h-[479px]">
              <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
              {blog.overlay ? (
                <img
                  src={blog.overlay}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                />
              ) : null}
              <div className="pointer-events-none absolute inset-0 bg-[rgba(36,36,166,0.1)]" />
            </div>
          </div>

          <div className="mt-6 flex items-center gap-[6px] text-base">
            <span className="font-medium leading-5 text-[#ededed]">{blog.author}</span>
            <span className="text-[#555d6d]">-</span>
            <span className="leading-[18px] text-[#808897]">{blog.date}</span>
          </div>

          <article className="mt-8 space-y-8">
            {blog.sections.map((section, index) => (
              <BlogDetailSectionBlock key={`${blog.slug}-${section.heading}-${index}`} section={section} />
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
