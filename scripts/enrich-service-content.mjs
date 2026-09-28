import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentPath = path.join(__dirname, "../src/lib/service-content.json");
const data = JSON.parse(fs.readFileSync(contentPath, "utf8"));

function pointBody(service, point) {
  const title = service.title;
  const lower = point.replace(/\.$/, "").toLowerCase();
  return `With our ${title.toLowerCase()} team, ${lower} becomes a practical outcome — planned into the build, not bolted on later.`;
}

function whyItems(service) {
  return service.points.slice(0, 4).map((point) => ({
    title: point.replace(/\.$/, ""),
    description: pointBody(service, point),
  }));
}

const enriched = data.map((service) => ({
  ...service,
  highlightCards: service.points.map((point) => ({
    title: point.replace(/\.$/, ""),
    body: pointBody(service, point),
  })),
  whyCards: whyItems(service),
}));

fs.writeFileSync(contentPath, JSON.stringify(enriched, null, 2) + "\n");
console.log(`Enriched ${enriched.length} services with unique highlight/why cards`);
