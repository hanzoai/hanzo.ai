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
    className: "h-10",
  },
  {
    name: "Lux",
    src: "/logos/partners/lux.svg",
    className: "h-8",
    href: "https://lux.network",
  },
  {
    name: "NVIDIA",
    src: "/logos/partners/nvidia.svg",
    className: "h-6",
  },
  {
    name: "Google Cloud",
    src: "/logos/partners/googlecloud.svg",
    className: "h-6",
  },
  {
    name: "AWS",
    src: "/logos/partners/aws.svg",
    className: "h-6",
  },
  {
    name: "DigitalOcean",
    src: "/logos/partners/digitalocean.svg",
    className: "h-6",
  },
  {
    name: "Nebius",
    src: "/logos/partners/nebius.svg",
    className: "h-6",
  },
  {
    name: "Zoo Labs Foundation",
    src: "/logos/partners/zoo-labs-foundation.svg",
    className: "h-6",
  },
];
