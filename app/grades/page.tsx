import type { Metadata } from "next";
import { PageHero } from "@/components/layout/PageHero";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DataTable } from "@/components/ui/Primitives";
import { Button } from "@/components/ui/Button";
import { GradesExplorer } from "@/components/grades/GradesExplorer";
import { grades, gradeNotes } from "@/data/grades";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  path: "/grades",
  title: "Grades & Technical Data",
  description:
    "Mechanical properties and chemical composition reference data for IS 2062, S355, SA516, C45 and wear-resistant steel plate grades stocked by Jagdamba Procut Pvt. Ltd.",
});

const chemistryRows = grades.filter((g) => g.chemistry);

export default function GradesPage() {
  return (
    <>
      <PageHero
        eyebrow="Grades & Technical Data"
        title="Mechanical Properties & Chemical Composition"
        subtitle="Grade-wise reference values reproduced from our own material data sheets. Always verify against the latest standard edition and the order's MTC / TC."
      >
        <div className="mt-8">
          <Button href="/quote" showArrow>Request Material for a Grade</Button>
        </div>
      </PageHero>

      <section className="py-20 sm:py-24">
        <Container>
          <SectionHeading kicker="Search & Filter" title="Find a grade" />
          <div className="mt-8">
            <GradesExplorer />
          </div>
        </Container>
      </section>

      <section className="bg-surface-secondary py-20 sm:py-24">
        <Container>
          <SectionHeading kicker="Chemical Composition" title="Ladle / heat analysis reference" subtitle="All values are % by mass unless otherwise stated." />
          <div className="mt-10">
            <DataTable
              columns={["Grade", "C Max", "Mn Max", "Si Max", "P Max", "S Max", "CE Max"]}
              rows={chemistryRows.map((g) => [
                g.grade,
                g.chemistry!.c,
                g.chemistry!.mn,
                g.chemistry!.si,
                g.chemistry!.p,
                g.chemistry!.s,
                g.chemistry!.ce ?? "—",
              ])}
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="rounded-card border border-hairline-light bg-white p-6 sm:p-8">
            <h3 className="font-display text-base font-bold text-ink-primary">Reference &amp; Usage Notes</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {gradeNotes.map((note) => (
                <li key={note} className="text-[13px] leading-relaxed text-ink-muted">
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
