import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "parallax-webdesign";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "Parallax Web Design" };

export default function ParallaxWebDesignPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
