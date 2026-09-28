import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "codelgniter-development";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "CodeIgniter Development" };

export default function CodeIgniterDevelopmentPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
