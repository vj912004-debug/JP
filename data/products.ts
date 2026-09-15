export const materialCategories = [
  {
    name: "Carbon Steel Plates",
    grades: "IS 2062 E250 / E350 / E450",
    note: "General structural and fabrication grade plate.",
  },
  {
    name: "Structural Steel Plates",
    grades: "S355JR / S355J0 / S355J2 / S355J2+N",
    note: "EN 10025-2 structural grades for engineering fabrication.",
  },
  {
    name: "Boiler & Pressure Vessel Plates",
    grades: "SA516 Gr. 60 / 65 / 70",
    note: "ASME SA-516 grades for pressure vessel and boiler work.",
  },
  {
    name: "Alloy & Engineering Steel",
    grades: "C45, EN19, ST52-3",
    note: "Carbon and alloy steel for machined and engineered components.",
  },
  {
    name: "High Strength / Wear Resistant Plates",
    grades: "Hardox 400 / 500, NM 400 / 500, 690QL",
    note: "For heavy wear, mining and earthmoving applications.",
  },
  {
    name: "Special Grade Steel Plates",
    grades: "As per customer requirement",
    note: "Additional grades sourced against confirmed order requirement.",
  },
  {
    name: "Imported Steel Plates",
    grades: "China-origin / imported material",
    note: "Availability subject to grade, size, thickness and stock.",
  },
] as const;

export const steelMakes = [
  { name: "Jindal Steel", note: "Primary domestic mill source" },
  { name: "SAIL", note: "Steel Authority of India Limited" },
  { name: "JSW Steel", note: "Primary domestic mill source" },
  { name: "Tata Steel", note: "Primary domestic mill source" },
  { name: "AM/NS India", note: "ArcelorMittal Nippon Steel India" },
  {
    name: "Imported / China-Origin",
    note: "Available subject to grade, size, thickness and stock availability",
  },
] as const;

export const stockRange = [
  { label: "Plate Thickness", value: "3 mm to 300 mm" },
  { label: "Standard Widths", value: "1250 / 1500 / 2000 / 2500 / 3000 mm" },
  { label: "Standard Lengths", value: "6000 / 8000 / 10000 / 12000 mm" },
  { label: "Supply Form", value: "Full plates, cut plates, profile-cut parts" },
  {
    label: "Delivery Condition",
    value: "As rolled / Normalized / N / Special grades subject to availability",
  },
  { label: "Documentation", value: "Mill Test Certificate / TC available" },
] as const;
