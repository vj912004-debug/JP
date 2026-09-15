export const machineryList = [
  {
    name: "CNC Profile Cutting Machines",
    icon: "Scissors",
    count: "8 Nos.",
    spec: "Bed size 3000 mm × 12000 mm · oxy-fuel profile cutting · up to 350 mm thickness",
    imageCategory: "cnc-profile-cutting",
  },
  {
    name: "High-Power Laser Cutting System",
    icon: "Zap",
    count: "1 System",
    spec: "Bed size 3000 mm × 12000 mm · 1 mm – 35/40 mm thickness range",
    imageCategory: "laser-cutting",
  },
  {
    name: "CNC Drilling Machine",
    icon: "CircleDot",
    count: "1 Unit",
    spec: "Bed size 2500 mm × 6000 mm · drill capacity up to 60 mm dia.",
    imageCategory: "cnc-drilling",
  },
  {
    name: "Oxy / Pug Cutting Sets",
    icon: "Flame",
    count: "Multiple sets",
    spec: "Straight cutting and production support",
    imageCategory: "heavy-plate-cutting",
  },
  {
    name: "EOT Overhead Cranes",
    icon: "MoveVertical",
    count: "5 Nos.",
    spec: "20 Ton capacity each · safe plate lifting and handling",
    imageCategory: "crane-handling",
  },
  {
    name: "Hydra & Forklift Support",
    icon: "Truck",
    count: "Fleet",
    spec: "Magnet / forklift / crane support for internal movement and loading",
    imageCategory: "hydra",
  },
] as const;

export const capacityTable = [
  { process: "CNC Profile Cutting", capacity: "8 Nos. Machines", remarks: "Oxy-fuel profile cutting for heavy plates" },
  { process: "CNC Bed Size", capacity: "3000 mm × 12000 mm", remarks: "Suitable for large plate processing" },
  { process: "Profile Cutting Capacity", capacity: "Up to 350 mm thickness", remarks: "As per material grade and profile" },
  { process: "Laser Cutting", capacity: "High power laser system", remarks: "Precision cutting for clean components" },
  { process: "Laser Bed Size", capacity: "3000 mm × 12000 mm", remarks: "Large sheet / plate handling" },
  { process: "Laser Thickness Range", capacity: "1 mm to 35 / 40 mm", remarks: "Subject to material and grade" },
  { process: "CNC Drilling", capacity: "Bed size 2500 mm × 6000 mm", remarks: "Hole drilling and layout support" },
  { process: "Drill Capacity", capacity: "Up to 60 mm dia.", remarks: "Depending on thickness and tooling" },
  { process: "Oxy / Pug Cutting", capacity: "Multiple sets available", remarks: "Straight cutting and production support" },
  { process: "EOT Cranes", capacity: "5 Nos., 20 Ton capacity", remarks: "Safe plate lifting and handling" },
  { process: "Material Handling", capacity: "Magnet / forklift / crane support", remarks: "Internal movement and loading" },
  { process: "Input Support", capacity: "Drawing / DXF / NC based cutting", remarks: "Customer drawing-based job work" },
] as const;

export const valueAddedSupport = [
  "Drawing-based profile cutting",
  "Nesting and customized job work",
  "Marking / identification support",
  "CNC drilling support on requirement",
  "Heavy plate handling under one roof",
  "Quick turnaround for regular and urgent jobs",
] as const;
