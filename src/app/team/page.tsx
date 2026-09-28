import type { Metadata } from "next";
import Image from "next/image";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import { teamMembers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the WebAstral Infosystems team.",
};

export default function TeamPage() {
  return (
    <>
      <PageBanner title="Our Team" image="/assets/images/bg/team31.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {teamMembers.map((member) => (
            <article key={member.name} className="overflow-hidden rounded-3xl bg-[#f7f8fb]">
              <div className="relative aspect-[4/5]">
                <Image src={member.image} alt={member.name} fill className="object-cover" />
              </div>
              <div className="p-5 text-center">
                <h2 className="text-lg font-semibold text-zinc-900">{member.name}</h2>
                <p className="text-sm text-[#2f6fd6]">{member.designation}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <JoinCta />
    </>
  );
}
