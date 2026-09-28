import type { Metadata } from "next";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { getDedicatedPage } from "@/lib/dedicated-pages";

const SLUG = "user-experience-design";
const page = getDedicatedPage(SLUG);

export const metadata: Metadata = page?.metadata ?? { title: "User Experience Design" };

export default function UserExperienceDesignPage() {
  return <DedicatedServicePage slug={SLUG} />;
}
