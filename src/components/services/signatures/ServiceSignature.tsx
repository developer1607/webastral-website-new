import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import ServiceDeviceFrame from "@/components/services/ServiceDeviceFrame";
import { getDedicatedPage } from "@/lib/dedicated-pages";
import { getServiceVisuals } from "@/lib/service-images";
import type { SignatureKind } from "@/lib/service-layout";
import { getDeliverables } from "@/lib/service-standard";
import { getServiceAudience } from "@/lib/service-standard";
import type { ServiceDetail } from "@/lib/services";

function pillars(service: ServiceDetail) {
  const extra = getDedicatedPage(service.slug);
  return extra?.pillars?.length ? extra.pillars : getDeliverables(service);
}

function Merch({ service }: { service: ServiceDetail }) {
  const audience = getServiceAudience(service);
  const visuals = getServiceVisuals(service);
  const items = [
    { label: "B2B", ...audience.b2b, src: visuals.overview },
    { label: "B2C", ...audience.b2c, src: visuals.detail },
    { label: "Ops", title: "After the sale", body: audience.statement, src: visuals.stack },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Merchandising</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            How {service.title} sells to{" "}
            <span className="font-bold text-zinc-900">trade accounts and shoppers</span>
          </h2>
        </FadeIn>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {items.map((item, index) => (
            <FadeIn key={item.label} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[28px] bg-[#f7f8fb]">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={`${service.title} — ${item.label}`}
                    fill
                    className="object-cover"
                    sizes="33vw"
                  />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                    {item.label}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

const editorialCopy: Record<
  string,
  { lead: string; rest: string; body: string }
> = {
  "drupal-development": {
    lead: "Editors publish.",
    rest: "The public never sees the admin.",
    body: "Drupal’s strength is the split: roles, workflows, and languages for the people who write — and a public site that does not expose any of that machinery.",
  },
  "wordpress-development": {
    lead: "Marketing publishes from the browser.",
    rest: "Developers stay out of every page.",
    body: "The editorial loop is the product. Themes and plugins only matter if someone on the brand team can ship a page without opening FTP.",
  },
  "joomla-development": {
    lead: "Members get a door.",
    rest: "Everyone else gets a public site.",
    body: "Joomla’s access levels are the editorial system — a logged-in area for partners or staff, and a public site that does not leak those pages.",
  },
  "woocommerce-development": {
    lead: "Content and commerce",
    rest: "share one WordPress admin.",
    body: "The same people who publish pages should be able to update products. Editorial and the shop are one desk, not two platforms.",
  },
};

function Editorial({ service }: { service: ServiceDetail }) {
  const audience = getServiceAudience(service);
  const visuals = getServiceVisuals(service);
  const copy = editorialCopy[service.slug] ?? {
    lead: "A CMS operators",
    rest: "will actually use",
    body: audience.statement,
  };

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">
              Editorial system
            </p>
            <h2 className="mt-3 text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
              {copy.lead}{" "}
              <span className="font-bold text-zinc-900">{copy.rest}</span>
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
              {copy.body}
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="relative aspect-[16/10] overflow-hidden rounded-[28px] bg-zinc-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <Image
                src={visuals.overview}
                alt={`Publishing workspace for ${service.title}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {[audience.b2b, audience.b2c].map((side, index) => (
            <FadeIn key={side.title} delay={0.04 + index * 0.06}>
              <article className="h-full rounded-[28px] bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                  {index === 0 ? "Inside the CMS" : "On the public site"}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">{side.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  {side.body}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stack({ service }: { service: ServiceDetail }) {
  const items = pillars(service).slice(0, 5);
  return (
    <section className="bg-[#0b0d17] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-[#7aa4ea]">Architecture</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal leading-snug sm:text-3xl lg:text-4xl">
            The {service.title} stack,{" "}
            <span className="font-bold">layer by layer</span>
          </h2>
        </FadeIn>
        <ol className="mt-12 space-y-3">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <li
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5 sm:px-8"
                style={{ marginLeft: `${Math.min(index, 4) * 1.25}rem` }}
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7aa4ea]">
                  Layer {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-zinc-300">{item.body}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Devices({ service }: { service: ServiceDetail }) {
  const visuals = getServiceVisuals(service);
  const frames = [
    { src: visuals.hero, label: "Phone", className: "max-w-[220px] mx-auto" },
    { src: visuals.overview, label: "Tablet", className: "max-w-[340px] mx-auto" },
    { src: visuals.detail, label: "Desktop", className: "max-w-none" },
  ];
  const audience = getServiceAudience(service);

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">On device</p>
          <h2 className="mt-3 text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            Built for the screens your{" "}
            <span className="font-bold text-zinc-900">operators and customers hold</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            {audience.statement}
          </p>
        </FadeIn>
        <div className="mt-12 grid items-end gap-8 lg:grid-cols-3">
          {frames.map((frame, index) => (
            <FadeIn key={frame.label} delay={index * 0.08} className={frame.className}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                {frame.label}
              </p>
              <ServiceDeviceFrame>
                <Image src={frame.src} alt="" fill className="object-cover" sizes="33vw" />
              </ServiceDeviceFrame>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Funnel({ service }: { service: ServiceDetail }) {
  const items = pillars(service).slice(0, 5);
  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Funnel</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            From first click to{" "}
            <span className="font-bold text-zinc-900">a {service.title} outcome</span>
          </h2>
        </FadeIn>
        <ol className="mt-12 grid gap-4 lg:grid-cols-5">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <li className="flex h-full flex-col rounded-[24px] bg-white p-5 shadow-sm">
                <p className="text-3xl font-bold text-[#2f6fd6]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-600">{item.body}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Principles({ service }: { service: ServiceDetail }) {
  const items = pillars(service).slice(0, 4);
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Principles</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            How we decide what a {service.title}{" "}
            <span className="font-bold text-zinc-900">page should do</span>
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] bg-zinc-200 sm:grid-cols-2">
          {items.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.05}>
              <article className="h-full bg-white p-8 sm:p-10">
                <p className="text-5xl font-bold text-[#2f6fd6]/20">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{item.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Layers({ service }: { service: ServiceDetail }) {
  const visuals = getServiceVisuals(service);
  const items = pillars(service).slice(0, 3);
  const images = [visuals.hero, visuals.overview, visuals.detail];

  return (
    <section className="overflow-hidden bg-[#0b0d17] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-[#7aa4ea]">Depth</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal leading-snug sm:text-3xl lg:text-4xl">
            Background, mid-ground, and{" "}
            <span className="font-bold">readable foreground</span>
          </h2>
        </FadeIn>
        <div className="relative mx-auto mt-14 h-[420px] max-w-4xl sm:h-[520px]">
          {images.map((src, index) => (
            <div
              key={src}
              className="absolute overflow-hidden rounded-[28px] border border-white/10 shadow-2xl"
              style={{
                width: `${86 - index * 10}%`,
                left: `${index * 8}%`,
                top: `${index * 12}%`,
                zIndex: 3 - index,
              }}
            >
              <div className="relative aspect-[16/10]">
                <Image src={src} alt="" fill className="object-cover" sizes="70vw" />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((item) => (
            <div key={item.title}>
              <h3 className="font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-zinc-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Screens({ service }: { service: ServiceDetail }) {
  const visuals = getServiceVisuals(service);
  const items = pillars(service).slice(0, 3);
  const widths = ["max-w-[180px]", "max-w-[280px]", "max-w-[420px]"];
  const images = [visuals.hero, visuals.overview, visuals.detail];

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Breakpoints</p>
          <h2 className="mt-3 max-w-3xl text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            One {service.title} system,{" "}
            <span className="font-bold text-zinc-900">mapped to each screen family</span>
          </h2>
        </FadeIn>
        <div className="mt-12 flex flex-wrap items-end justify-center gap-8">
          {images.map((src, index) => (
            <FadeIn key={src} delay={index * 0.08} className={`w-full ${widths[index]}`}>
              <ServiceDeviceFrame>
                <Image src={src} alt="" fill className="object-cover" sizes="40vw" />
              </ServiceDeviceFrame>
              {items[index] ? (
                <p className="mt-3 text-center text-sm font-semibold text-zinc-900">
                  {items[index].title}
                </p>
              ) : null}
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function Research({ service }: { service: ServiceDetail }) {
  const audience = getServiceAudience(service);
  const items = pillars(service).slice(0, 4);
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <FadeIn>
            <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Research</p>
            <h2 className="mt-3 text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
              Evidence before we{" "}
              <span className="font-bold text-zinc-900">draw a screen</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              {audience.statement}
            </p>
            <dl className="mt-8 space-y-5">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                  B2B
                </dt>
                <dd className="mt-1 text-sm text-zinc-600">{audience.b2b.body}</dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                  B2C
                </dt>
                <dd className="mt-1 text-sm text-zinc-600">{audience.b2c.body}</dd>
              </div>
            </dl>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2">
            {items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[24px] border border-zinc-100 p-6">
                  <h3 className="font-semibold text-zinc-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ServiceSignature({
  service,
  kind,
}: {
  service: ServiceDetail;
  kind: SignatureKind;
}) {
  switch (kind) {
    case "merch":
      return <Merch service={service} />;
    case "editorial":
      return <Editorial service={service} />;
    case "stack":
      return <Stack service={service} />;
    case "devices":
      return <Devices service={service} />;
    case "funnel":
      return <Funnel service={service} />;
    case "layers":
      return <Layers service={service} />;
    case "screens":
      return <Screens service={service} />;
    case "research":
      return <Research service={service} />;
    default:
      return <Principles service={service} />;
  }
}
