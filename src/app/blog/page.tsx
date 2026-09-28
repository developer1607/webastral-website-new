import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import { blogPosts } from "@/lib/content";

export const metadata: Metadata = {
  title: "Blog",
  description: "News, insights, and digital marketing articles from WebAstral Infosystems.",
};

export default function BlogPage() {
  return (
    <>
      <PageBanner title="News and Insights" image="/assets/images/bg/blog31.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {blogPosts.map((post) => (
            <article key={post.slug} className="overflow-hidden rounded-3xl border border-zinc-100 shadow-sm">
              <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10]">
                <Image src={post.image} alt={post.title} fill className="object-cover" />
              </Link>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-[#2f6fd6]">
                  {post.category}
                </p>
                <h2 className="mt-2 text-xl font-semibold text-zinc-900">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600">{post.excerpt}</p>
                <p className="mt-4 text-xs text-zinc-500">
                  {post.author} · {post.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <JoinCta />
    </>
  );
}
