"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { jobPositions } from "@/data/careers";

export default function OpenPositions() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedLoc, setSelectedLoc] = useState("all");

  // Dynamically compile filter categories based on data
  const departments = useMemo(() => {
    return ["all", ...Array.from(new Set(jobPositions.map((job) => job.department.toLowerCase())))];
  }, []);

  const locations = useMemo(() => {
    return ["all", ...Array.from(new Set(jobPositions.map((job) => job.location.split("(")[0].trim())))];
  }, []);

  const filteredJobs = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return jobPositions.filter((job) => {
      const matchesSearch =
        !query ||
        job.title.toLowerCase().includes(query) ||
        job.department.toLowerCase().includes(query) ||
        job.description.toLowerCase().includes(query);

      const matchesDept = selectedDept === "all" || job.department.toLowerCase() === selectedDept;
      
      const normalizedJobLoc = job.location.split("(")[0].trim().toLowerCase();
      const matchesLoc = selectedLoc === "all" || normalizedJobLoc === selectedLoc.toLowerCase();

      return matchesSearch && matchesDept && matchesLoc;
    });
  }, [searchQuery, selectedDept, selectedLoc]);

  return (
    <section id="open-positions" className="relative overflow-hidden bg-[#00000c] scroll-mt-20">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-[-10%] h-[400px] bg-[radial-gradient(circle_at_50%_100%,rgba(36,36,166,0.2)_0%,rgba(0,0,12,0)_70%)]"
      />

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-14 sm:py-[72px]">
          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col gap-10 sm:gap-14">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionBadge label="open roles" className="h-[28px] px-[11px] py-0 text-sm leading-none" />
              <SectionHeading
                line1="Find your next career"
                line2Highlight="breakthrough"
                line2After="with TechForge"
                className="max-w-[700px] text-[28px] leading-[1.1] sm:text-[36px] md:text-[44px] lg:text-[48px] md:leading-[52px]"
                line2ClassName="mt-1"
              />
            </div>

            {/* Filter controls */}
            <div className="flex flex-col gap-4 rounded-2xl border border-[#272835] bg-[#121324] p-5 lg:flex-row lg:items-center">
              {/* Search bar */}
              <div className="flex h-11 flex-1 items-center gap-3 rounded-[12px] border border-[#272835] bg-[#1d1f38] px-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M11.6 11.6L14 14M7 12.5A5.5 5.5 0 1 1 7 1.5a5.5 5.5 0 0 1 0 11Z"
                    stroke="#A4ABB8"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by job title or keyword..."
                  className="h-full w-full bg-transparent text-sm text-[#dfe1e6] placeholder:text-[#8f96a6] focus:outline-none"
                />
              </div>

              {/* Department selection */}
              <div className="flex flex-col gap-2 sm:flex-row">
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="h-11 rounded-[12px] border border-[#272835] bg-[#1d1f38] px-3 text-sm text-[#dfe1e6] outline-none focus:border-[#5160ff] min-w-[170px]"
                >
                  <option value="all">All Departments</option>
                  {departments
                    .filter((dept) => dept !== "all")
                    .map((dept) => (
                      <option key={dept} value={dept}>
                        {dept.charAt(0).toUpperCase() + dept.slice(1)}
                      </option>
                    ))}
                </select>

                {/* Location selection */}
                <select
                  value={selectedLoc}
                  onChange={(e) => setSelectedLoc(e.target.value)}
                  className="h-11 rounded-[12px] border border-[#272835] bg-[#1d1f38] px-3 text-sm text-[#dfe1e6] outline-none focus:border-[#5160ff] min-w-[170px]"
                >
                  <option value="all">All Locations</option>
                  {locations
                    .filter((loc) => loc !== "all")
                    .map((loc) => (
                      <option key={loc} value={loc}>
                        {loc}
                      </option>
                    ))}
                </select>
              </div>
            </div>

            {/* Positions list */}
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredJobs.map((job) => (
                <div
                  key={job.slug}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#121324] bg-[rgba(19,19,36,0.4)] p-6 transition-all duration-300 hover:border-[#2424a6] hover:bg-[rgba(25,25,50,0.5)]"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="rounded-[100px] border border-[#2424a6] bg-[rgba(36,36,166,0.2)] px-3 py-[5px] text-[10px] font-medium leading-[1.2] text-[#5160ff] inline-block capitalize">
                        {job.department}
                      </span>
                      <span className="text-xs text-[#8f96a6]">{job.type}</span>
                    </div>

                    <h3 className="text-xl font-semibold text-white group-hover:text-[#5160ff] transition-colors duration-250">
                      {job.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-[#cac6dd] line-clamp-3">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#8f96a6]">
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M8 9.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                          <path fillRule="evenodd" clipRule="evenodd" d="M8 15s5-4.5 5-9A5 5 0 103 6c0 4.5 5 9 5 9zm0-11a2 2 0 100 4 2 2 0 000-4z" />
                        </svg>
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                          <path d="M12.5 13.5v-1a2 2 0 00-2-2h-5a2 2 0 00-2 2v1M8 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                        </svg>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-[#1d1f38] flex items-center justify-between">
                    <span className="text-sm font-medium text-[#5160ff]">{job.salaryRange ?? "Competitive"}</span>
                    <Link
                      href={`/careers/${job.slug}`}
                      className="inline-flex h-[36px] items-center justify-center rounded-[100px] border border-[rgba(255,255,255,0.15)] bg-transparent px-4 text-xs font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-[#00000c]"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 ? (
              <div className="text-center py-10 rounded-2xl border border-dashed border-[#272835] bg-[#121324]/30">
                <p className="text-sm text-[#8f96a6]">No job openings found matching your search preferences.</p>
              </div>
            ) : null}
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
