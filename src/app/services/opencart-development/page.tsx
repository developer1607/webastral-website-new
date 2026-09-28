import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "opencart-development";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "OpenCart Development" };

export default function OpenCartDevelopmentPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
