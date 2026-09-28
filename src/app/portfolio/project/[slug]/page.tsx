import { redirect } from "next/navigation";
import { getAllPortfolioProjectSlugs } from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...getAllPortfolioProjectSlugs().map((slug) => ({ slug })),
    { slug: "enterprise-web-platform" },
  ];
}

/** Legacy sample path — canonical detail URL is `/productdetails/{slug}` (reference). */
export default async function PortfolioProjectRedirect({ params }: Props) {
  const { slug } = await params;
  if (slug === "enterprise-web-platform") {
    redirect("/productdetails/spoilt");
  }
  redirect(`/productdetails/${slug}`);
}
