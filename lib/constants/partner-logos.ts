export type PartnerLogo = {
  name: string;
  src: string;
  className?: string;
  href?: string;
};

export const partnerLogos: PartnerLogo[] = [
  {
    name: "Amazon",
    src: "/logos/partners/amazon.svg",
    className: "h-6",
    href: "https://aws.amazon.com",
  },
  {
    name: "DigitalOcean",
    src: "/logos/partners/digitalocean.svg",
    className: "h-6",
    href: "https://www.digitalocean.com",
  },
  {
    name: "Google",
    src: "/logos/partners/google.svg",
    className: "h-6",
    href: "https://cloud.google.com",
  },
  {
    name: "Lux",
    src: "/logos/partners/lux.svg",
    className: "h-6",
    href: "https://lux.fund",
  },
  {
    name: "Microsoft",
    src: "/logos/partners/microsoft.svg",
    className: "h-6",
    href: "https://azure.microsoft.com",
  },
  {
    name: "Nebius",
    src: "/logos/partners/nebius.svg",
    className: "h-6",
    href: "https://nebius.com",
  },
  {
    name: "NVIDIA",
    src: "/logos/partners/nvidia.svg",
    className: "h-6",
    href: "https://www.nvidia.com",
  },
  {
    name: "Techstars",
    src: "/logos/partners/techstars.svg",
    className: "h-14",
    href: "https://www.techstars.com",
  },
  {
    name: "Zoo Labs Foundation",
    src: "/logos/partners/zoo-labs-foundation.svg",
    className: "h-10",
    href: "https://zoo.ngo",
  },
];
