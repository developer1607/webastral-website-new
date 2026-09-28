import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "wordpress-development";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "WordPress Development" };

export default function WordPressDevelopmentPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
