import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatNumber(n: number) {
  return new Intl.NumberFormat("en-IN").format(n);
}
