// Header section data
export type NavigationItem = {
  label: string;
  href: string;
  active?: boolean;
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "#", active: true },
  { label: "About", href: "#about" },
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];
