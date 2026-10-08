import { msg } from "@/lib/i18n-shared";

export type NavItem = {
  href: string;
  label: string;
  icon: string;
  ownerOnly?: boolean;
};

export const EVERYDAY_NAV: NavItem[] = [
  { href: "/dashboard", label: msg("Dashboard"), icon: "layout-dashboard" },
  { href: "/customers", label: msg("Customers"), icon: "users" },
  { href: "/visits", label: msg("Visits"), icon: "map-pin" },
  { href: "/orders", label: msg("Orders"), icon: "package" },
  { href: "/map", label: msg("Territory Map"), icon: "map" },
  { href: "/tours", label: msg("Tour Plan"), icon: "calendar" },
  { href: "/travel", label: msg("Travel Log"), icon: "car" },
];

export const GROWTH_NAV: NavItem[] = [
  { href: "/catalog", label: msg("Product Master"), icon: "library" },
  { href: "/learn", label: msg("Learning"), icon: "graduation-cap" },
  { href: "/products", label: msg("Order Price List"), icon: "tags" },
  { href: "/targets", label: msg("Targets"), icon: "target" },
  { href: "/payments", label: msg("Payment Dues"), icon: "indian-rupee" },
  { href: "/expenses", label: msg("Expenses"), icon: "receipt" },
  { href: "/advances", label: msg("Advances"), icon: "wallet" },
  { href: "/trials", label: msg("Product Trials"), icon: "flask-conical" },
  { href: "/competitor-intel", label: msg("Competitor Intel"), icon: "binoculars" },
  { href: "/brochures", label: msg("Brochures"), icon: "book-open" },
  { href: "/reports", label: msg("Reports"), icon: "bar-chart-3" },
  { href: "/team", label: msg("Team"), icon: "user-cog", ownerOnly: true },
  { href: "/zones", label: msg("Zones & States"), icon: "compass", ownerOnly: true },
];

export const MOBILE_PRIMARY: NavItem[] = [
  { href: "/dashboard", label: msg("Home"), icon: "layout-dashboard" },
  { href: "/visits", label: msg("Visits"), icon: "map-pin" },
  { href: "/orders", label: msg("Orders"), icon: "package" },
  { href: "/expenses", label: msg("Expenses"), icon: "receipt" },
  { href: "/customers", label: msg("Customers"), icon: "users" },
  { href: "/more", label: msg("More"), icon: "menu" },
];
