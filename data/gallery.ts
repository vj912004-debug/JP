export type GalleryCategory =
  | "Factory & Yard"
  | "CNC & Laser"
  | "Cranes & Handling"
  | "Finished Components"
  | "Transport & Dispatch";

export type GalleryItem = {
  id: string;
  title: string;
  category: GalleryCategory;
  imageCategory: string;
};

export const galleryCategories: GalleryCategory[] = [
  "Factory & Yard",
  "CNC & Laser",
  "Cranes & Handling",
  "Finished Components",
  "Transport & Dispatch",
];

export const galleryItems: GalleryItem[] = [
  { id: "g1", title: "Covered Processing Shed", category: "Factory & Yard", imageCategory: "factory" },
  { id: "g2", title: "Steel Plate Storage Yard", category: "Factory & Yard", imageCategory: "steel-yard" },
  { id: "g3", title: "Ready Stock — Thickness Marked", category: "Factory & Yard", imageCategory: "steel-stock" },
  { id: "g4", title: "CNC Profile Cutting in Progress", category: "CNC & Laser", imageCategory: "cnc-profile-cutting" },
  { id: "g5", title: "Laser Cutting Head", category: "CNC & Laser", imageCategory: "laser-cutting" },
  { id: "g6", title: "CNC Drilling Setup", category: "CNC & Laser", imageCategory: "cnc-drilling" },
  { id: "g7", title: "20 Ton EOT Crane", category: "Cranes & Handling", imageCategory: "crane-handling" },
  { id: "g8", title: "Hydra Loading", category: "Cranes & Handling", imageCategory: "hydra" },
  { id: "g9", title: "Forklift Movement", category: "Cranes & Handling", imageCategory: "forklift" },
  { id: "g10", title: "Rings & Flanges", category: "Finished Components", imageCategory: "components-rings" },
  { id: "g11", title: "Profile-Cut Machine Parts", category: "Finished Components", imageCategory: "components-parts" },
  { id: "g12", title: "Circles & Base Plates", category: "Finished Components", imageCategory: "components" },
  { id: "g13", title: "Trailer Loading", category: "Transport & Dispatch", imageCategory: "transport" },
  { id: "g14", title: "Dispatch Yard", category: "Transport & Dispatch", imageCategory: "dispatch" },
];

export const documents = [
  { name: "Company Profile", icon: "FileText", status: "available" as const },
  { name: "Product Brochure", icon: "BookOpen", status: "available" as const },
  { name: "ISO 9001:2015 Certificate", icon: "ShieldCheck", status: "available" as const, ref: "Cert No. 25RN03AQ" },
  { name: "MSME / UDYAM Certificate", icon: "BadgeCheck", status: "available" as const, ref: "UDYAM-GJ-24-0019040" },
  { name: "GST Certificate", icon: "Receipt", status: "available" as const, ref: "GSTIN 24AJGPP9863R1Z5" },
  { name: "Other Company Certificates", icon: "FolderCheck", status: "pending" as const },
];
