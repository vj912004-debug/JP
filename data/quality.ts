export const qualitySupport = [
  "Mill Test Certificate / TC support",
  "Heat No. and Plate No. traceability",
  "Thickness measurement and verification",
  "UT testing support as per requirement",
  "Material marking before cutting / dispatch",
  "Dimensional checking of cut parts",
  "Visual inspection before dispatch",
  "Chemical / mechanical test reference support",
  "NABL lab testing support on requirement",
  "TPI coordination with customer-nominated agencies",
] as const;

export const traceabilityWorkflow = [
  { stage: "Material Receipt", support: "Grade, size, heat no., plate no. verification" },
  { stage: "Pre-Processing", support: "Marking, traceability and job identification" },
  { stage: "In-Process", support: "Dimensional checking and process monitoring" },
  { stage: "Final Dispatch", support: "Visual check, loading coordination and documentation support" },
  { stage: "Customer Support", support: "MTC / TC, UT / test reference, dispatch details" },
] as const;

export const utReferenceStandards = [
  {
    standard: "ASTM A578 / A578M",
    detail: "Levels A, B and C — straight-beam ultrasonic examination of plain and clad steel plate.",
  },
  {
    standard: "EN 10160",
    detail:
      "Body classes S0–S3 and edge classes E0–E4. Common project requirements are S1/E1 and S2/E2 or S2/E3.",
  },
] as const;

export const tpiSupport = [
  "Inspection coordination available with SGS / TUV / BV / customer-nominated agency",
  "UT level, documentation and special testing as per PO / inquiry",
  "Exact material standard, test scope and supply condition governed by MTC / TC",
] as const;

export const transportContacts = [
  { label: "Office", value: "8799617251 / 8799617252" },
  { label: "Inquiry", value: "8799617254" },
  { label: "Accounts", value: "8799617253 / 8799617255" },
  { label: "Land Line", value: "9099969507" },
] as const;

export const dispatchStrength = [
  "Loading support with 5 Nos. 20 Ton EOT Cranes",
  "Ready stock for immediate dispatch",
  "Vehicle arrangement support",
  "Local and outstation transport coordination",
  "Safe plate loading and handling",
  "Support for regular and urgent dispatches",
] as const;

export const dispatchFlow = [
  "Material Supply",
  "Processing",
  "Testing",
  "Inspection",
  "Loading",
  "Transportation",
  "Delivery",
] as const;

export const oneRoofFlow = [
  { label: "Steel Plate Stock", icon: "Layers" },
  { label: "CNC Profile Cutting", icon: "Scissors" },
  { label: "Laser Cutting", icon: "Zap" },
  { label: "CNC Drilling", icon: "CircleDot" },
  { label: "Ultrasonic Testing", icon: "Radar" },
  { label: "Quality Inspection", icon: "FileCheck2" },
  { label: "Crane / Hydra Handling", icon: "MoveVertical" },
  { label: "Transport", icon: "Truck" },
  { label: "Customer Delivery", icon: "PackageCheck" },
] as const;
