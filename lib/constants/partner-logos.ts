export type PartnerLogo = {
  name: string;
  src: string;
  className?: string;
  href?: string;
};

export const partnerLogos: PartnerLogo[] = [
  {
    name: "Techstars",
    src: "/logos/partners/techstars.svg",
    className: "h-8",
    href: "https://www.techstars.com",
  },
  {
    name: "Lux",
    src: "/logos/partners/lux.svg",
    className: "h-7",
    href: "https://lux.network",
  },
  {
    name: "NVIDIA",
    src: "/logos/partners/nvidia.svg",
    className: "h-7",
    href: "https://www.nvidia.com",
  },
  {
    name: "Google Cloud",
    src: "/logos/partners/googlecloud.svg",
    className: "h-7",
    href: "https://cloud.google.com",
  },
  {
    name: "AWS",
    src: "/logos/partners/aws.svg",
    className: "h-8",
    href: "https://aws.amazon.com",
  },
  {
    name: "Azure",
    src: "/logos/partners/azure.svg",
    className: "h-7",
    href: "https://azure.microsoft.com",
  },
  {
    name: "DigitalOcean",
    src: "/logos/partners/digitalocean.svg",
    className: "h-7",
    href: "https://www.digitalocean.com",
  },
  {
    name: "Nebius",
    src: "/logos/partners/nebius.svg",
    className: "h-7",
    href: "https://nebius.com",
  },
  {
    name: "Zoo Labs Foundation",
    src: "/logos/partners/zoo-labs-foundation.svg",
    className: "h-6",
    href: "https://zoo.ngo",
  },
];
