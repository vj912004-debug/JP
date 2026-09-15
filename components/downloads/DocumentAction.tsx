"use client";

import { Download, Clock } from "lucide-react";
import { whatsappUrl } from "@/lib/enquiry";

export function DocumentAction({
  name,
  status,
}: {
  name: string;
  status: "available" | "pending";
}) {
  if (status !== "available") {
    return (
      <span className="mt-5 flex w-fit items-center gap-2 rounded-btn border border-hairline-medium px-4 py-2.5 text-sm font-medium text-ink-subtle">
        <Clock size={15} />
        Coming soon
      </span>
    );
  }

  const href = whatsappUrl(
    `Hello Jagdamba Procut, please share a copy of "${name}" for vendor registration.`
  );

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex w-fit items-center gap-2 rounded-btn bg-blue-900 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-950"
    >
      <Download size={15} />
      Request copy
    </a>
  );
}
