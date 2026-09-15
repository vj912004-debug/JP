// Single source of truth for company facts used across the site.
// Sourced from the company's own brochure pages and certificates.
// Anything not verifiable there is explicitly marked "to be updated" —
// never invented.

export const company = {
  name: "Jagdamba Procut Pvt. Ltd.",
  nameShort: "Jagdamba Procut",
  nameUpper: "JAGDAMBA PROCUT PVT. LTD.",
  registeredAs: "Jagdamba Profile",
  registeredAsNote:
    "GST, ISO 9001:2015 and MSME/Udyam registrations are currently held under the name \"Jagdamba Profile.\"",
  tagline: "Precision in Steel. Strength in Every Cut.",
  strapline: "Steel Shapes Stronger Industries",
  since: 2001,
  sinceLabel: "Serving the Engineering Industry Since 2001",
  description:
    "Jagdamba Procut Pvt. Ltd. is a professionally managed steel stockholding, processing and supply company based in Vadodara, Gujarat, combining steel trading, CNC profile cutting and laser cutting under one roof.",
  philosophy: [
    "Right Material",
    "Accurate Processing",
    "Testing",
    "Traceability",
    "Safe Handling",
    "Reliable Delivery",
  ],
  address: {
    line1: "504/1A GIDC Makarpura",
    line2: "Vadodara, Gujarat 390010, India",
    full: "504/1A GIDC Makarpura, Vadodara, Gujarat 390010, India",
    mapQuery: "504/1A GIDC Makarpura, Vadodara, Gujarat 390010",
  },
  email: "jagdambaprofile@gmail.com",
  phones: {
    office: ["8799617251", "8799617252"],
    inquiry: ["8799617254"],
    accounts: ["8799617253", "8799617255"],
    landline: ["9099969507"],
  },
  whatsapp: "919824917250",
  whatsappDisplay: "+91 98249 17250",
  people: [
    {
      name: "Mukesh Patel",
      role: "Owner",
      phones: ["9824917250", "8799617250"],
      whatsapp: true,
    },
    {
      name: "Dilipbhai Patel",
      role: "Owner",
      phones: ["9824025001"],
      whatsapp: false,
    },
  ],
  registrations: {
    gst: "24AJGPP9863R1Z5",
    udyam: "UDYAM-GJ-24-0019040",
    udyamRegisteredOn: "13 March 2021",
    iso: "ISO 9001:2015 — Certificate No. 25RN03AQ",
    isoValidUntil: "4 March 2028",
    isoScope: "Manufacturing & supply of M.S. & S.S. CNC profile cutting and trading of steel products",
    constitution: "Proprietorship",
    cin: "Not applicable — proprietorship firm",
  },
} as const;

// Infrastructure & capacity — figures appear consistently across every
// brochure page, so they're treated as the verified baseline.
export const stats = [
  { value: 2500, suffix: " MT", label: "Ready Steel Stock" },
  { value: 75000, suffix: "", label: "Sq. Ft. Factory Area" },
  { value: 8, suffix: "", label: "CNC Profile Cutting Machines" },
  { value: 5, suffix: "", label: "× 20 Ton EOT Cranes" },
] as const;

export const capacitySpecs = [
  { label: "Factory Area", value: "Approx. 75,000 Sq. Ft." },
  { label: "Ready Steel Stock", value: "Approx. 2,500 MT" },
  { label: "Ready Stock Thickness Range", value: "3 mm to 300 mm" },
  { label: "EOT Cranes", value: "5 Nos., 20 Ton capacity each" },
  { label: "CNC Profile Cutting Machines", value: "8 Nos." },
  { label: "CNC Machine Bed Size", value: "3000 mm × 12000 mm" },
  { label: "Profile Cutting Capacity", value: "Up to 350 mm thickness" },
  { label: "Material Handling", value: "Magnet / forklift / crane support" },
] as const;

export const whyChooseUs = [
  {
    title: "Serving the Industry Since 2001",
    body: "Two decades of steel stockholding and processing experience for engineering and manufacturing buyers.",
    icon: "History",
  },
  {
    title: "Large Ready Stock",
    body: "Approx. 2,500 MT of ready steel stock across a 3 mm to 300 mm thickness range.",
    icon: "Layers",
  },
  {
    title: "Everything Under One Roof",
    body: "Steel trading, CNC profile cutting and laser cutting handled at a single facility — no coordination across vendors.",
    icon: "Building2",
  },
  {
    title: "Heavy Material Handling",
    body: "5 Nos. 20-ton EOT cranes plus forklift and magnet support for safe, fast handling of heavy plate.",
    icon: "MoveVertical",
  },
  {
    title: "Advanced Processing",
    body: "8 CNC profile cutting machines with a 3000 × 12000 mm bed, plus high-power laser cutting and CNC drilling.",
    icon: "Cpu",
  },
  {
    title: "Documented Quality",
    body: "Mill Test Certificates, heat and plate number traceability, and UT support on requirement.",
    icon: "ShieldCheck",
  },
  {
    title: "Competitive, Fast Delivery",
    body: "Ready stock for immediate dispatch and coordinated local and outstation transport.",
    icon: "Truck",
  },
  {
    title: "Drawing-Based Cutting",
    body: "Customized profile cutting as per customer drawing / DXF, from base plates to finished components.",
    icon: "FileCode2",
  },
] as const;
