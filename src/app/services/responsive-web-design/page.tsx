import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "responsive-web-design";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "Responsive Web Design" };

export default function ResponsiveWebDesignPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
