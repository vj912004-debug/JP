import { company } from "@/data/company";

export function whatsappUrl(text: string) {
  return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function mailtoUrl(subject: string, body: string) {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function mapsUrl() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.address.mapQuery)}`;
}

export function openChannel(url: string) {
  const opened = window.open(url, "_blank", "noopener,noreferrer");
  if (!opened) window.location.href = url;
}

export function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type EnquiryPayload = {
  kind: "quote" | "stock" | "contact";
  fields: Record<string, string>;
  files?: string[];
};

export function buildEnquiryMessage({ kind, fields, files }: EnquiryPayload) {
  const heading =
    kind === "quote"
      ? "Quote request from the Jagdamba Procut website"
      : kind === "stock"
        ? "Stock enquiry from the Jagdamba Procut website"
        : "Message from the Jagdamba Procut website";

  const lines = Object.entries(fields)
    .filter(([, value]) => value.trim())
    .map(([key, value]) => `${key}: ${value.trim()}`);

  const fileLines =
    files && files.length > 0
      ? ["", "Files to attach in this chat:", ...files.map((name) => `• ${name}`)]
      : [];

  return [heading, "", ...lines, ...fileLines].join("\n");
}

export function enquirySubject(kind: EnquiryPayload["kind"], name: string) {
  if (kind === "quote") return `Quote request — ${name}`;
  if (kind === "stock") return `Stock enquiry — ${name}`;
  return `Website message — ${name}`;
}
