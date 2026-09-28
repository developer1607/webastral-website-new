import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "shopify-development";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "Shopify Development" };

export default function ShopifyDevelopmentPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
