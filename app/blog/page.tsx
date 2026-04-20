import SiteHeader from "@/components/layout/site-header";
import BlogListSection from "./blog-list-section";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <BlogListSection />
    </main>
  );
}
