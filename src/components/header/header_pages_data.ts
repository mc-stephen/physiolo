const HeaderLinks: Array<HeaderLinksInterface> = [
  {
    link: "/",
    label: "home",
    children: [
      {
        label: "practice",
        link: "practice",
        children: [
          { label: "about us", link: "/about-us", children: [] },
          {
            label: "team",
            link: "/team",
            children: [
              { label: "Neuss", link: "/nuess", children: [] },
              { label: "Dusseldorf", link: "/dusseldorf", children: [] },
              { label: "Duisburg", link: "/duisburg", children: [] },
            ],
          },
        ],
      },
    ],
  },
  {
    label: "services",
    link: "/services",
    children: [
      { label: "KG ZNS, PNF/BOBATH", link: "/bobath", children: [] },
      { label: "PHYSIOTHERAPY", link: "/physiotherapy", children: [] },
      { label: "MANUAL LYMPH DRAINAGE", link: "/drainage", children: [] },
      { label: "MASSAGEs", link: "/messages", children: [] },
      { label: "CDM", link: "/cdm", children: [] },
      {
        label: "BUILDING AND TRAINING ATHLETES",
        link: "/athletes",
        children: [],
      },
      { label: "COLD / CRYOTHERAPY", link: "/cryotherapy", children: [] },
      { label: "HEAT THERAPY", link: "/heat-therapy", children: [] },
      { label: "SPORTS THERAPY", link: "/spots-therapy", children: [] },
      { label: "MANUAL THERAPY", link: "/manual-therapy", children: [] },
    ],
  },
  { label: "JOBS", link: "/jobs", children: [] },
  { label: "BLOG", link: "/blogs", children: [] },
  { label: "Current", link: "/current", children: [] },
  { label: "Photo Gallery", link: "/photo-gallery", children: [] },
  { label: "Contact", link: "/contact", children: [] },
  {
    label: "DATA PROTECTION",
    link: "/data-protection",
    children: [
      { label: "COOKIE POLICY (EU)", link: "/cookie-policy", children: [] },
    ],
  },
];

interface HeaderLinksInterface {
  link: string;
  label: string;
  children: Array<HeaderLinksInterface>;
}

export default HeaderLinks;
export type { HeaderLinksInterface };
