"use client";

import { useCallback, useRef, useState } from "react";
import { UploadCloud, FileText, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatFileSize } from "@/lib/enquiry";

const MAX_BYTES = 20 * 1024 * 1024;
const ACCEPT = ".pdf,.dxf,.dwg,.xls,.xlsx";

export function FileDropzone({
  label,
  hint = "PDF, DXF, DWG or Excel — up to 20 MB each",
  className,
  files,
  onChange,
}: {
  label: string;
  hint?: string;
  className?: string;
  files: File[];
  onChange: (files: File[]) => void;
}) {
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback(
    (fileList: FileList | null) => {
      if (!fileList) return;
      const incoming = Array.from(fileList);
      const tooBig = incoming.find((file) => file.size > MAX_BYTES);
      if (tooBig) {
        setError(`${tooBig.name} is over 20 MB. Please send a smaller file or share it on WhatsApp.`);
        return;
      }
      setError(null);
      const existing = new Set(files.map((file) => `${file.name}-${file.size}`));
      const next = incoming.filter((file) => !existing.has(`${file.name}-${file.size}`));
      onChange([...files, ...next]);
    },
    [files, onChange]
  );

  const openPicker = () => inputRef.current?.click();

  return (
    <div className={className}>
      <span id="drawing-upload-label" className="text-[13px] font-semibold text-ink-secondary">
        {label}
      </span>
      <div
        role="button"
        tabIndex={0}
        aria-labelledby="drawing-upload-label"
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openPicker();
          }
        }}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          addFiles(e.dataTransfer.files);
        }}
        onClick={openPicker}
        className={cn(
          "mt-1.5 flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xs border-2 border-dashed px-6 py-8 text-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600",
          dragging ? "border-orange-500 bg-orange-50" : "border-hairline-medium bg-surface-secondary hover:border-blue-800/40"
        )}
      >
        <UploadCloud size={26} strokeWidth={1.5} className="text-blue-900/60" />
        <p className="text-sm font-medium text-ink-secondary">
          Drag &amp; drop files, or <span className="text-blue-900 underline">browse</span>
        </p>
        <p className="text-xs text-ink-subtle">{hint}</p>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e) => {
            addFiles(e.target.files);
            e.currentTarget.value = "";
          }}
          accept={ACCEPT}
        />
      </div>
      {error && <p className="mt-2 text-xs font-medium text-orange-700">{error}</p>}

      {files.length > 0 && (
        <ul className="mt-3 flex flex-col gap-2">
          {files.map((file) => (
            <li
              key={`${file.name}-${file.size}`}
              className="flex items-center gap-3 rounded-xs border border-hairline-light bg-white px-3.5 py-2.5"
            >
              <FileText size={16} className="shrink-0 text-blue-900" />
              <div className="min-w-0 flex-1">
                <span className="block truncate text-[13px] font-medium text-ink-primary">{file.name}</span>
                <span className="text-[11px] text-ink-subtle">{formatFileSize(file.size)}</span>
              </div>
              <button
                type="button"
                aria-label={`Remove ${file.name}`}
                onClick={(e) => {
                  e.stopPropagation();
                  onChange(files.filter((item) => item !== file));
                }}
                className="shrink-0 text-ink-subtle hover:text-orange-600"
              >
                <X size={15} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
