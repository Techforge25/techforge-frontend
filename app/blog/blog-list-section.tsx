 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SectionBadge from "@/components/ui/section-badge";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { blogFilterOptions, blogPageCopy, blogPosts, blogSectionBg, type BlogCardItem } from "@/data/blogs";

const allCategoriesLabel = "All Categories";

function BlogFiltersPanel({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onToggleCategory,
}: {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCategory: string | null;
  onToggleCategory: (category: string) => void;
}) {
  return (
    <aside className="w-full rounded-[16px] border border-[#272835] bg-[#121324] p-4 lg:w-[236px]">
      <p className="text-[20px] font-semibold leading-[30px] text-[#d6d6d6]">Filter</p>

      <div className="mt-6 flex h-10 items-center gap-3 rounded-[12px] border border-[#272835] bg-[#1d1f38] px-3">
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path
            d="M11.6 11.6L14 14M7 12.5A5.5 5.5 0 1 1 7 1.5a5.5 5.5 0 0 1 0 11Z"
            fill="none"
            stroke="#A4ABB8"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <input
          type="text"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Search"
          className="h-full w-full bg-transparent text-sm text-[#a4abb8] placeholder:text-[#a4abb8] focus:outline-none"
        />
      </div>

      <div className="my-4 h-px w-full bg-[#272835]" />

      <p className="text-sm font-medium leading-5 text-[#eeeff2]">All integrations</p>
      <div className="mt-2 space-y-[2px]">
        {blogFilterOptions.map((item) => (
          <label
            key={item}
            className="flex cursor-pointer items-center gap-[10px] rounded-[6px] px-3 py-[10px]"
          >
            <input
              type="checkbox"
              checked={item === allCategoriesLabel ? selectedCategory === null : selectedCategory === item}
              onChange={() => onToggleCategory(item)}
              className="sr-only"
            />
            <span
              className={`relative h-4 w-4 rounded-[4px] border ${item === allCategoriesLabel
                ? selectedCategory === null
                  ? "border-[#5160ff] bg-[#2424a6]"
                  : "border-[#222443] bg-[#1d1f38]"
                : selectedCategory === item
                  ? "border-[#5160ff] bg-[#2424a6]"
                  : "border-[#222443] bg-[#1d1f38]"
                }`}
            >
              {((item === allCategoriesLabel && selectedCategory === null) ||
                selectedCategory === item) ? (
                <span className="absolute left-1/2 top-1/2 h-[7px] w-[7px] -translate-x-1/2 -translate-y-1/2 rounded-[2px] bg-white" />
              ) : null}
            </span>
            <span className="text-sm text-[#a4abb8]">{item}</span>
          </label>
        ))}
      </div>
    </aside>
  );
}

function BlogCard({
  post,
}: {
  post: BlogCardItem;
}) {
  return (
    <article className="overflow-hidden rounded-[16px] border border-[#272835] bg-[#121324]">
      <div className="relative h-[163px] w-full overflow-hidden border border-[rgba(255,255,255,0.1)] bg-[#060606]">
        <img src={post.image} alt="" aria-hidden="true" className="h-full w-full object-cover" />
        {post.overlay ? (
          <img
            src={post.overlay}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          />
        ) : null}
      </div>

      <div className="p-[14px]">
        <div className="rounded-[100px] border border-[#2424a6] bg-[rgba(36,36,166,0.2)] px-3 py-[5px] text-[10px] font-medium leading-[1.2] text-[#5160ff] inline-block">
          {post.category}
        </div>
        <h3 className="mt-[10px] text-[20px] font-medium leading-[30px] text-white">
          <Link href={`/blog-details/${post.slug}`} className="transition-colors hover:text-[#5160ff]">
            {post.title}
          </Link>
        </h3>
        <p className="mt-6 text-sm leading-5 text-[#ededed]">
          {post.author}
          <span className="mx-[6px] text-[#555d6d]">-</span>
          <span className="text-xs text-[#808897]">{post.date}</span>
        </p>
      </div>
    </article>
  );
}

export default function BlogListSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return blogPosts.filter((post) => {
      const categoryMatch = selectedCategory ? post.category === selectedCategory : true;
      const searchMatch =
        normalizedQuery.length === 0 ||
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.author.toLowerCase().includes(normalizedQuery) ||
        post.category.toLowerCase().includes(normalizedQuery);

      return categoryMatch && searchMatch;
    });
  }, [searchQuery, selectedCategory]);

  function handleToggleCategory(category: string) {
    if (category === allCategoriesLabel) {
      setSelectedCategory(null);
      return;
    }
    setSelectedCategory((previous) => (previous === category ? null : category));
  }

  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-[-70px] z-0 h-[520px] bg-[radial-gradient(52%_58%_at_50%_28%,rgba(58,59,145,0.58)_0%,rgba(41,42,101,0.38)_38%,rgba(14,15,31,0.16)_72%,rgba(3,3,19,0)_100%)] md:h-[620px]"
      />
      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative z-10 mx-auto w-full max-w-[1200px]">
            <div className="flex flex-col items-center gap-[22px] text-center">
              <SectionBadge
                label={blogPageCopy.badgeLabel}
                className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none"
              />
              <h1 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[36px] uppercase leading-[1.08] text-transparent sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
                {blogPageCopy.heading}
              </h1>
              <p className="max-w-[624px] text-lg leading-7 text-[#c1c7cf]">{blogPageCopy.description}</p>
            </div>

            <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row">
              <BlogFiltersPanel
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedCategory={selectedCategory}
                onToggleCategory={handleToggleCategory}
              />

              <div className="min-w-0 flex-1">
                <h2 className="bg-gradient-to-r from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-[28px] font-medium leading-[1.2] text-transparent">
                  {blogPageCopy.listHeading}
                </h2>

                <div className="mt-[22px] grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
                  {filteredPosts.map((post) => (
                    <BlogCard key={`${post.title}-${post.date}`} post={post} />
                  ))}
                </div>
                {filteredPosts.length === 0 ? (
                  <p className="mt-8 text-center text-sm text-[#a4abb8]">No blogs found for selected filters.</p>
                ) : null}
              </div>
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
