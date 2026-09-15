"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { grades, gradeGroups, type GradeGroup } from "@/data/grades";
import { cn } from "@/lib/utils";

export function GradesExplorer() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<GradeGroup | "All">("All");

  const filtered = useMemo(() => {
    return grades.filter((g) => {
      const matchesGroup = group === "All" || g.group === group;
      const matchesQuery =
        query.trim() === "" ||
        g.grade.toLowerCase().includes(query.toLowerCase()) ||
        g.standard.toLowerCase().includes(query.toLowerCase());
      return matchesGroup && matchesQuery;
    });
  }, [query, group]);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search size={16} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-subtle" />
          <label htmlFor="grade-search" className="sr-only">
            Search grade or standard
          </label>
          <input
            id="grade-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search grade or standard…"
            className="w-full rounded-xs border border-hairline-medium bg-white py-2.5 pl-10 pr-4 text-sm text-ink-primary placeholder:text-ink-subtle focus:border-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-800/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {(["All", ...gradeGroups] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGroup(g)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-[12.5px] font-semibold transition-colors",
                group === g
                  ? "border-blue-900 bg-blue-900 text-white"
                  : "border-hairline-medium bg-white text-ink-secondary hover:border-blue-800/40"
              )}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6 overflow-x-auto rounded-card border border-hairline-light">
        <table className="w-full min-w-[860px] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-blue-950">
              {["Grade", "Standard", "Yield Strength", "Tensile Strength", "Elongation", "Impact / Condition"].map(
                (col) => (
                  <th key={col} className="px-4 py-3.5 font-display text-xs font-bold uppercase tracking-[0.05em] text-white">
                    {col}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {filtered.map((g, i) => (
              <tr key={g.grade} className={cn("border-b border-hairline-light last:border-0", i % 2 === 1 && "bg-surface-secondary/60")}>
                <td className="px-4 py-3.5 font-semibold text-ink-primary">{g.grade}</td>
                <td className="px-4 py-3.5 text-ink-secondary">{g.standard}</td>
                <td className="px-4 py-3.5 text-ink-secondary">{g.yield}</td>
                <td className="px-4 py-3.5 text-ink-secondary">{g.tensile}</td>
                <td className="px-4 py-3.5 text-ink-secondary">{g.elongation}</td>
                <td className="px-4 py-3.5 text-ink-secondary">{g.impact}</td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} className="px-4 py-8 text-center text-sm text-ink-muted">
                  No grades match your search. Try a different grade or standard.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
