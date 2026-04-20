// Header section data
export type NavigationItem = {
  label: string;
  href: string;
};

export const navigationItems: readonly NavigationItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about-us" },
  { label: "Our Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "Blogs", href: "#blogs" },
  { label: "Contact Us", href: "#contact" },
];
