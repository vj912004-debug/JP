export type Service = {
  slug: string;
  icon: string; // lucide-react icon name
  name: string;
  short: string;
  heading: string;
  intro: string;
  specs: { label: string; value: string }[];
  capabilities: string[];
  applications: string[];
  imageCategory: string;
};

export const services: Service[] = [
  {
    slug: "cnc-profile-cutting",
    icon: "Scissors",
    name: "CNC Profile Cutting",
    short: "Oxy-fuel CNC profile cutting for heavy plate, up to 350 mm thickness.",
    heading: "CNC Profile Cutting",
    intro:
      "Eight CNC profile cutting machines handle heavy plate processing with a bed size of 3000 mm × 12000 mm, cutting circles, rings, flanges and structural components straight from drawing or DXF file.",
    specs: [
      { label: "Machines", value: "8 Nos. CNC Profile Cutting Machines" },
      { label: "Bed Size", value: "3000 mm × 12000 mm" },
      { label: "Cutting Capacity", value: "Up to 350 mm thickness" },
      { label: "Process", value: "Oxy-fuel profile cutting" },
      { label: "Input Support", value: "Drawing / DXF / NC based cutting" },
    ],
    capabilities: [
      "Circles",
      "Rings",
      "Flanges",
      "Base Plates",
      "Machine Components",
      "Structural Components",
      "Customized Profiles",
      "Heavy Engineering Components",
      "Batch Production Components",
    ],
    applications: [
      "Heavy engineering fabrication",
      "Pressure vessel and boiler components",
      "Structural and infrastructure projects",
      "Machine and OEM components",
    ],
    imageCategory: "cnc-profile-cutting",
  },
  {
    slug: "laser-cutting",
    icon: "Zap",
    name: "Laser Cutting",
    short: "High-power laser cutting for accurate, clean-edge components.",
    heading: "Laser Cutting",
    intro:
      "A high-power laser cutting system with a 3000 mm × 12000 mm bed delivers fast, precise cuts with a clean edge finish across a 1 mm to 35/40 mm thickness range, subject to material and grade.",
    specs: [
      { label: "System", value: "High-power laser cutting" },
      { label: "Bed Size", value: "3000 mm × 12000 mm" },
      { label: "Thickness Range", value: "1 mm to 35 / 40 mm (subject to material & grade)" },
      { label: "Finish", value: "Clean, low-wastage edge finish" },
    ],
    capabilities: [
      "High Accuracy",
      "Fast Production",
      "Excellent Edge Finish",
      "Low Material Wastage",
      "Precision Profile Cutting",
    ],
    applications: [
      "Machine parts",
      "Fabrication components",
      "Industrial plates",
      "Customized profiles as per drawing",
    ],
    imageCategory: "laser-cutting",
  },
  {
    slug: "cnc-drilling",
    icon: "CircleDot",
    name: "CNC Drilling",
    short: "Accurate multi-hole CNC drilling for heavy plate components.",
    heading: "CNC Drilling",
    intro:
      "CNC plate drilling with a 2500 mm × 6000 mm bed handles multiple hole patterns and accurate hole positioning on heavy plate, with drill capacity up to 60 mm diameter depending on thickness and tooling.",
    specs: [
      { label: "Bed Size", value: "2500 mm × 6000 mm" },
      { label: "Drill Capacity", value: "Up to approx. 60 mm diameter" },
      { label: "Positioning", value: "Accurate, drawing-based hole layout" },
    ],
    capabilities: [
      "CNC Plate Drilling",
      "Multiple Hole Patterns",
      "Accurate Hole Positioning",
      "Heavy Plate Drilling",
      "Engineering Components",
    ],
    applications: [
      "Base plates and connection plates",
      "Structural components",
      "Machine and engineering components",
    ],
    imageCategory: "cnc-drilling",
  },
  {
    slug: "heavy-plate-cutting",
    icon: "Layers",
    name: "Heavy Plate Cutting",
    short: "Oxy-fuel heavy plate cutting for large engineering components.",
    heading: "Heavy Plate Cutting",
    intro:
      "For material beyond standard profile-cutting range, heavy plate / oxy-fuel cutting handles large-format engineering components, forging blanks and base plates with the same drawing-based accuracy.",
    specs: [
      { label: "Process", value: "Oxy-fuel heavy plate cutting" },
      { label: "Handling", value: "5 Nos. 20-ton EOT cranes for plate movement" },
    ],
    capabilities: [
      "Heavy Engineering Components",
      "Forging Blanks",
      "Base Plates",
      "Large Circles",
      "Rings",
      "Flanges",
      "Machine Parts",
    ],
    applications: [
      "Forging and heavy fabrication",
      "Large base plates for machinery",
      "Structural fabrication",
    ],
    imageCategory: "heavy-plate-cutting",
  },
  {
    slug: "ut-testing",
    icon: "Radar",
    name: "UT Testing",
    short: "Ultrasonic testing support as per requirement, with TPI coordination.",
    heading: "Ultrasonic (UT) Testing",
    intro:
      "UT testing support is provided as per customer requirement, alongside coordination with third-party inspection agencies. Testing scope and reporting follow the applicable standard and the customer's purchase order.",
    specs: [
      { label: "Support", value: "UT testing support as per requirement" },
      { label: "Reference Standards", value: "ASTM A578 / A578M, EN 10160 (as specified by order)" },
      { label: "TPI Coordination", value: "SGS / TUV / BV / customer-nominated agency" },
    ],
    capabilities: [
      "Body & edge scanning as per order",
      "Third-party inspection coordination",
      "Reporting aligned to customer PO terms",
    ],
    applications: [
      "Pressure vessel and boiler plate",
      "Critical structural components",
      "Customer or project-specified inspection",
    ],
    imageCategory: "ut-testing",
  },
  {
    slug: "thickness-measurement",
    icon: "Ruler",
    name: "Thickness Measurement",
    short: "Ultrasonic thickness verification at inward, dispatch and inspection stages.",
    heading: "Ultrasonic Thickness Measurement",
    intro:
      "An ultrasonic thickness gauge is used to verify plate thickness at material inward, stock verification, customer inspection and dispatch stages, supporting accurate, documented material handover.",
    specs: [
      { label: "Instrument", value: "Ultrasonic Thickness Gauge" },
      { label: "Applies At", value: "Material inward, stock check, inspection, dispatch" },
    ],
    capabilities: [
      "Material Inward Verification",
      "Stock Verification",
      "Customer Inspection Support",
      "Dispatch Inspection",
      "Special Grade Verification",
    ],
    applications: [
      "Every incoming plate lot",
      "Customer witness inspection",
      "Pre-dispatch quality checks",
    ],
    imageCategory: "thickness-measurement",
  },
  {
    slug: "inspection-traceability",
    icon: "FileCheck2",
    name: "Inspection & Traceability",
    short: "Heat number, plate number and MTC-backed traceability at every stage.",
    heading: "Inspection & Traceability",
    intro:
      "Every stage — from material receipt through final dispatch — carries documented traceability: heat number and plate number verification, dimensional checks, and Mill Test Certificate support.",
    specs: [
      { label: "Material Receipt", value: "Grade, size, heat no. and plate no. verification" },
      { label: "Pre-Processing", value: "Marking, traceability and job identification" },
      { label: "In-Process", value: "Dimensional checking and process monitoring" },
      { label: "Final Dispatch", value: "Visual check, loading coordination, documentation" },
    ],
    capabilities: [
      "Mill Test Certificate / TC support",
      "Heat No. and Plate No. traceability",
      "Dimensional inspection of cut parts",
      "NABL lab testing support on requirement",
      "TPI coordination with customer-nominated agencies",
    ],
    applications: [
      "Vendor-approved supply chains",
      "Project material traceability",
      "Regulated / inspected fabrication work",
    ],
    imageCategory: "inspection",
  },
  {
    slug: "handling-delivery",
    icon: "Truck",
    name: "Handling & Delivery",
    short: "Crane and Hydra handling with coordinated local and outstation transport.",
    heading: "Handling & Delivery",
    intro:
      "Five 20-ton EOT cranes and Hydra support handle safe loading and unloading of heavy plate, backed by coordinated trailer, tempo and pickup transport for regular and urgent dispatches.",
    specs: [
      { label: "Cranes", value: "5 Nos. 20 Ton EOT Cranes" },
      { label: "Handling", value: "Hydra loading & unloading support" },
      { label: "Transport", value: "Heavy-duty trailers, tempos, pickup vehicles" },
    ],
    capabilities: [
      "Safe Plate Loading & Handling",
      "Ready Stock for Immediate Dispatch",
      "Vehicle Arrangement Support",
      "Local & Outstation Transport Coordination",
      "Regular & Urgent Dispatch Support",
    ],
    applications: [
      "Bulk plate dispatch",
      "Urgent / breakdown material requirements",
      "Multi-drop project deliveries",
    ],
    imageCategory: "transport",
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
