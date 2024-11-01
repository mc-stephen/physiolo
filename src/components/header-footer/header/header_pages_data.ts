import { LocaleType } from "@/contexts/translation-context";

const HeaderLinks = (val: LocaleType): Array<HeaderLinksInterface> => {
  const services = val.services;
  return [
    {
      link: "/",
      label: val.home,
      children: [
        {
          label: val.practice,
          link: "practice",
          children: [
            { label: val.about_us, link: "/about-us", children: [] },
            { label: val.management, link: "/management", children: [] },
            {
              label: val.team,
              link: "/team",
              children: [
                { label: "Neuss", link: "/neuss", children: [] },
                { label: "Dusseldorf", link: "/dusseldorf", children: [] },
                { label: "Duisburg", link: "/duisburg", children: [] },
              ],
            },
          ],
        },
      ],
    },
    {
      label: val.service,
      link: "/services",
      children: [
        { label: services.bobath, link: "/bobath", children: [] },
        { label: services.physiotherapy, link: "/physiotherapy", children: [] },
        { label: services.drainage, link: "/drainage", children: [] },
        { label: services.massages, link: "/massages", children: [] },
        { label: services.cdm, link: "/cdm", children: [] },
        { label: services.athletes, link: "/athletes", children: [] },
        { label: services.cryotherapy, link: "/cryotherapy", children: [] },
        { label: services.heat_therapy, link: "/heat-therapy", children: [] },
        {
          label: services.sports_therapy,
          link: "/sports-therapy",
          children: [],
        },
        {
          label: services.manual_therapy,
          link: "/manual-therapy",
          children: [],
        },
      ],
    },
    { label: val.jobs, link: "/jobs", children: [] },
    { label: val.blog, link: "/blogs", children: [] },
    {
      label: val.current,
      link: "/current",
      children: [
        { label: val.photo_gallery, link: "/photo-gallery", children: [] },
        { label: val.cookie_policy, link: "/cookie-policy", children: [] },
        { label: val.data_protection, link: "/data-protection", children: [] },
      ],
    },
    {
      label: val.contact,
      link: "/contact",
      children: [],
    },
  ];
};

interface HeaderLinksInterface {
  link: string;
  label: string;
  children: Array<HeaderLinksInterface>;
}

export default HeaderLinks;
export type { HeaderLinksInterface };
