export type GradeGroup =
  | "Structural & Carbon Steel"
  | "Pressure Vessel Plates"
  | "Carbon / Alloy Steel"
  | "Wear Resistant / High Strength";

export type Grade = {
  grade: string;
  group: GradeGroup;
  standard: string;
  yield: string;
  tensile: string;
  elongation: string;
  impact: string;
  chemistry?: {
    c: string;
    mn: string;
    si: string;
    p: string;
    s: string;
    ce?: string;
  };
  note?: string;
};

// Mechanical + chemical reference values reproduced from the company's own
// grade-wise technical data sheets. Minimum / standard reference values at
// room temperature unless otherwise stated — verify against the latest
// standard edition and the order's MTC / TC.
export const grades: Grade[] = [
  {
    grade: "IS 2062 E250A",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "250 / 240 / 230 MPa (t <20 / 20-40 / >40 mm)",
    tensile: "≥ 410 MPa",
    elongation: "≥ 23%",
    impact: "Not specified",
    chemistry: { c: "0.23", mn: "1.50", si: "0.40", p: "0.045", s: "0.045", ce: "0.42" },
  },
  {
    grade: "IS 2062 E250BR",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "250 / 240 / 230 MPa",
    tensile: "≥ 410 MPa",
    elongation: "≥ 23%",
    impact: "27 J @ RT, if specified",
    chemistry: { c: "0.22", mn: "1.50", si: "0.40", p: "0.045", s: "0.045", ce: "0.41" },
  },
  {
    grade: "IS 2062 E250C",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "250 / 240 / 230 MPa",
    tensile: "≥ 410 MPa",
    elongation: "≥ 23%",
    impact: "27 J @ -20°C",
    chemistry: { c: "0.20", mn: "1.50", si: "0.40", p: "0.040", s: "0.040", ce: "0.39" },
  },
  {
    grade: "IS 2062 E350A",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "350 / 330 / 320 MPa",
    tensile: "≥ 490 MPa",
    elongation: "≥ 22%",
    impact: "Not specified",
    chemistry: { c: "0.20", mn: "1.55", si: "0.45", p: "0.045", s: "0.045", ce: "0.47" },
  },
  {
    grade: "IS 2062 E350BR",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "350 / 330 / 320 MPa",
    tensile: "≥ 490 MPa",
    elongation: "≥ 22%",
    impact: "27 J @ RT, if specified",
    chemistry: { c: "0.20", mn: "1.55", si: "0.45", p: "0.045", s: "0.045", ce: "0.47" },
  },
  {
    grade: "IS 2062 E350C",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "350 / 330 / 320 MPa",
    tensile: "≥ 490 MPa",
    elongation: "≥ 22%",
    impact: "27 J @ -20°C",
    chemistry: { c: "0.20", mn: "1.55", si: "0.45", p: "0.040", s: "0.040", ce: "0.45" },
  },
  {
    grade: "IS 2062 E450A",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "450 / 430 / 420 MPa",
    tensile: "≥ 570 MPa",
    elongation: "≥ 20%",
    impact: "Not specified",
    chemistry: { c: "0.22", mn: "1.65", si: "0.45", p: "0.045", s: "0.045", ce: "0.52" },
  },
  {
    grade: "IS 2062 E450BR",
    group: "Structural & Carbon Steel",
    standard: "IS 2062:2011",
    yield: "450 / 430 / 420 MPa",
    tensile: "≥ 570 MPa",
    elongation: "≥ 20%",
    impact: "20 J @ RT, if specified",
    chemistry: { c: "0.22", mn: "1.65", si: "0.45", p: "0.045", s: "0.045", ce: "0.52" },
  },
  {
    grade: "S355JR",
    group: "Structural & Carbon Steel",
    standard: "EN 10025-2",
    yield: "≥ 355 MPa*",
    tensile: "470-630 MPa*",
    elongation: "≥ 20%*",
    impact: "27 J @ +20°C",
    chemistry: { c: "≤0.24*", mn: "≤1.60", si: "≤0.55", p: "≤0.035", s: "≤0.035" },
    note: "S355 values shown for common plate thickness; properties vary with thickness.",
  },
  {
    grade: "S355J0",
    group: "Structural & Carbon Steel",
    standard: "EN 10025-2",
    yield: "≥ 355 MPa*",
    tensile: "470-630 MPa*",
    elongation: "≥ 20%*",
    impact: "27 J @ 0°C",
    chemistry: { c: "≤0.24*", mn: "≤1.60", si: "≤0.55", p: "≤0.035", s: "≤0.035" },
  },
  {
    grade: "S355J2 / +N",
    group: "Structural & Carbon Steel",
    standard: "EN 10025-2",
    yield: "≥ 355 MPa*",
    tensile: "470-630 MPa*",
    elongation: "≥ 20%*",
    impact: "27 J @ -20°C",
    chemistry: { c: "≤0.24*", mn: "≤1.60", si: "≤0.55", p: "≤0.035", s: "≤0.035" },
  },
  {
    grade: "ST52-3",
    group: "Structural & Carbon Steel",
    standard: "Legacy DIN structural grade",
    yield: "Reference: ≥ 355 MPa",
    tensile: "Reference: 490-630 MPa",
    elongation: "As per standard",
    impact: "As per order",
    note: "Available; refer to the applicable current standard and MTC / TC for exact values.",
  },
  {
    grade: "C45",
    group: "Carbon / Alloy Steel",
    standard: "EN 10083-2",
    yield: "Not applicable (supply condition dependent)",
    tensile: "700-850 MPa**",
    elongation: "≥ 14%**",
    impact: "Q&T; ref. t ≤ 16 mm",
    chemistry: { c: "0.42-0.50", mn: "0.50-0.80", si: "≤0.40", p: "≤0.045", s: "≤0.045" },
    note: "Quenched-and-tempered reference for small section / thickness.",
  },
  {
    grade: "EN19",
    group: "Carbon / Alloy Steel",
    standard: "BS 970 (EN series)",
    yield: "As per heat treatment condition",
    tensile: "As per heat treatment condition",
    elongation: "As per standard",
    impact: "As per order",
    note: "Available; exact properties depend on heat-treatment condition ordered.",
  },
  {
    grade: "SA516 Gr. 60",
    group: "Pressure Vessel Plates",
    standard: "ASME SA-516 / SA-516M",
    yield: "≥ 220 MPa",
    tensile: "415-550 MPa",
    elongation: "≥ 25%***",
    impact: "Impact by PO / supplement",
    chemistry: { c: "0.23**", mn: "0.85-1.20", si: "0.15-0.40", p: "≤0.025", s: "≤0.025" },
  },
  {
    grade: "SA516 Gr. 65",
    group: "Pressure Vessel Plates",
    standard: "ASME SA-516 / SA-516M",
    yield: "≥ 240 MPa",
    tensile: "450-585 MPa",
    elongation: "≥ 23%***",
    impact: "Impact by PO / supplement",
    chemistry: { c: "0.26**", mn: "0.85-1.20", si: "0.15-0.40", p: "≤0.025", s: "≤0.025" },
  },
  {
    grade: "SA516 Gr. 70",
    group: "Pressure Vessel Plates",
    standard: "ASME SA-516 / SA-516M",
    yield: "≥ 260 MPa",
    tensile: "485-620 MPa",
    elongation: "≥ 21%***",
    impact: "Impact by PO / supplement",
    chemistry: { c: "0.28**", mn: "0.85-1.20", si: "0.15-0.40", p: "≤0.025", s: "≤0.025" },
  },
  {
    grade: "Hardox 400 / 500",
    group: "Wear Resistant / High Strength",
    standard: "Wear-resistant plate",
    yield: "As per manufacturer data sheet",
    tensile: "As per manufacturer data sheet",
    elongation: "As per manufacturer data sheet",
    impact: "As per manufacturer data sheet",
    note: "Available in ready stock range; refer to mill data sheet for full properties.",
  },
  {
    grade: "NM 400 / 500",
    group: "Wear Resistant / High Strength",
    standard: "Wear-resistant plate",
    yield: "As per manufacturer data sheet",
    tensile: "As per manufacturer data sheet",
    elongation: "As per manufacturer data sheet",
    impact: "As per manufacturer data sheet",
    note: "Available in ready stock range; refer to mill data sheet for full properties.",
  },
  {
    grade: "690QL",
    group: "Wear Resistant / High Strength",
    standard: "High-strength quenched & tempered plate",
    yield: "As per manufacturer data sheet",
    tensile: "As per manufacturer data sheet",
    elongation: "As per manufacturer data sheet",
    impact: "As per manufacturer data sheet",
    note: "Available in ready stock range; refer to mill data sheet for full properties.",
  },
];

export const gradeGroups: GradeGroup[] = [
  "Structural & Carbon Steel",
  "Pressure Vessel Plates",
  "Carbon / Alloy Steel",
  "Wear Resistant / High Strength",
];

export const gradeNotes = [
  "* S355 values shown for common plate thickness range; yield / tensile / elongation vary with thickness.",
  "** C45 / SA516 carbon maximum shown as a representative reference; exact value varies by thickness.",
  "*** SA516 elongation shown for 50 mm gauge length. Impact testing is supplementary unless specifically ordered.",
  "Technical references: IS 2062:2011, EN 10025-2, EN 10083-2 and ASME SA-516 / SA-516M. Always verify against the latest standard edition and the order's MTC / TC.",
];
