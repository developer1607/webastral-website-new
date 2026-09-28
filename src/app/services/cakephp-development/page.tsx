import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "cakephp-development";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "CakePHP Development" };

export default function CakePhpDevelopmentPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
