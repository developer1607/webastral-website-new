import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "drupal-development";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "Drupal Development" };

export default function DrupalDevelopmentPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
