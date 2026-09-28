import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "mobile-website";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "Mobile Website Design" };

export default function MobileWebsitePage() {
  return <DedicatedServicePage slug={SLUG} />;
}
