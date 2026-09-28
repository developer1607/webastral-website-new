import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageBanner from "@/components/layout/PageBanner";
import { blogArticles } from "@/lib/blog";
import { blogPosts } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(blogArticles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) return { title: "Blog" };
  return { title: article.title, description: article.sections[0]?.body };
}

export default async function BlogDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = blogArticles[slug];
  if (!article) notFound();

  return (
    <>
      <PageBanner title={article.title} image={article.image} />
      <article className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_0.7fr] lg:px-8">
          <div>
            <p className="text-sm text-[#2f6fd6]">
              {article.category} · {article.date} · {article.readtime}
            </p>
            <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-3xl">
              <Image src={article.image} alt={article.title} fill className="object-cover" />
            </div>
            <div className="mt-8 space-y-6">
              {article.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-2xl font-semibold text-zinc-900">{section.heading}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                    {section.body}
                  </p>
                </section>
              ))}
            </div>
          </div>
          <aside>
            <h3 className="text-lg font-semibold text-zinc-900">Recent posts</h3>
            <ul className="mt-4 space-y-4">
              {blogPosts.map((post) => (
                <li key={post.slug}>
                  <Link href={`/blog/${post.slug}`} className="text-sm text-zinc-600 hover:text-[#2f6fd6]">
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>
    </>
  );
}
