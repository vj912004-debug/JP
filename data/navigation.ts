export type NavChild = { label: string; href: string; blurb?: string };
export type NavItem = { label: string; href: string; children?: NavChild[] };

export const headerNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export const primaryNav: NavItem[] = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Steel Plates", href: "/products/steel-plates", blurb: "3 mm – 300 mm ready stock" },
      { label: "Steel Makes", href: "/products/steel-makes", blurb: "Jindal, SAIL, JSW, Tata, AM/NS" },
      { label: "Material Categories", href: "/products/material-categories", blurb: "Carbon, alloy, wear-resistant" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "CNC Profile Cutting", href: "/services/cnc-profile-cutting" },
      { label: "Laser Cutting", href: "/services/laser-cutting" },
      { label: "CNC Drilling", href: "/services/cnc-drilling" },
      { label: "Heavy Plate Cutting", href: "/services/heavy-plate-cutting" },
      { label: "UT Testing", href: "/services/ut-testing" },
      { label: "Thickness Measurement", href: "/services/thickness-measurement" },
      { label: "Inspection & Traceability", href: "/services/inspection-traceability" },
      { label: "Handling & Delivery", href: "/services/handling-delivery" },
    ],
  },
  { label: "Machinery", href: "/machinery" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Quality", href: "/quality" },
  { label: "Grades & Data", href: "/grades" },
  { label: "Industries", href: "/industries" },
  { label: "Gallery", href: "/gallery" },
  { label: "Downloads", href: "/downloads" },
];

export const footerColumns: { title: string; links: NavChild[] }[] = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Infrastructure", href: "/infrastructure" },
      { label: "Quality & UT", href: "/quality" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Products & Services",
    links: [
      { label: "Steel Plates", href: "/products/steel-plates" },
      { label: "Steel Makes", href: "/products/steel-makes" },
      { label: "CNC Profile Cutting", href: "/services/cnc-profile-cutting" },
      { label: "Laser Cutting", href: "/services/laser-cutting" },
      { label: "Machinery", href: "/machinery" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Grades & Technical Data", href: "/grades" },
      { label: "Industries We Serve", href: "/industries" },
      { label: "Transport & Logistics", href: "/transport" },
      { label: "Downloads & Certifications", href: "/downloads" },
    ],
  },
  {
    title: "Get a Quote",
    links: [
      { label: "Stock Enquiry", href: "/stock-enquiry" },
      { label: "Request a Quote", href: "/quote" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
];
