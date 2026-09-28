import ServiceFeatureCard from "@/components/services/ServiceFeatureCard";
import type { WorkProcessStep } from "@/lib/services";

export default function WorkProcess({ steps }: { steps: WorkProcessStep[] }) {
  if (!steps.length) return null;

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <ServiceFeatureCard
          key={`${step.title}-${index}`}
          image={step.image}
          title={step.title}
          description={step.description ?? ""}
        />
      ))}
    </div>
  );
}
