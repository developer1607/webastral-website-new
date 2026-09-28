import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "joomla-development";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "Joomla Development" };

export default function JoomlaDevelopmentPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
