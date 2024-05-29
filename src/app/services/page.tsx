"use client";

import Link from "next/link";
import { useContext } from "react";
import Styles from "./services.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext, LocaleType } from "@/contexts/translation-context";

export default function Services() {
  const { locale } = useContext(LocaleContext);
  return (
    <main className={Styles.services}>
      <BodyHeader
        imageSource={img}
        imageAlt={"services img"}
        pageTitle={locale.services_page_title}
        pagePath={"Home / " + locale.services_page_title}
      />
      <section className={Styles.section}>
        <span className={Styles.label}>{locale.services_page_title}</span>
        <b className={Styles.title}>PHYSIO LÜPKE-OKOCHA SERVICES</b>
        <div className={Styles.grid}>
          {data(locale).map((val, i) => {
            return (
              <div key={i} className={Styles.servicesCont}>
                <div className={Styles.img}></div>
                <b className={Styles.title}>{val.title}</b>
                <span className={Styles.msg}>{val.message}</span>
                <Link href={`/services${val.path}`} className={Styles.button}>
                  <input type="button" value={locale.services_read_more} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

//==========================
// SERVICES
//==========================
interface Services {
  icon: string;
  path: string;
  title: string;
  message: string;
}

//==========================
// SERVICES
//==========================
const data = (locale: LocaleType): Services[] => [
  {
    icon: "",
    path: "/bobath",
    title: locale.services.bobath,
    message: locale.services_bobath_desc,
  },
  {
    icon: "",
    path: "/physiotherapy",
    title: locale.services.physiotherapy,
    message: locale.services_physio_desc,
  },
  {
    icon: "",
    path: "/drainage",
    title: locale.services.drainage,
    message: locale.services_drainage_desc,
  },
  {
    icon: "",
    path: "/massages",
    title: locale.services.massages,
    message: locale.services_massages_desc,
  },
  {
    icon: "",
    path: "/cmd",
    title: locale.services.cdm,
    message: locale.services_cmd_desc,
  },
  {
    icon: "",
    path: "/athletes",
    title: locale.services.athletes,
    message: locale.services_athletes_desc,
  },
  {
    icon: "",
    path: "/manual-therapy",
    title: locale.services.manual_therapy,
    message: locale.services_manual_desc,
  },
  {
    icon: "",
    path: "/cryotherapy",
    title: locale.services.cryotherapy,
    message: locale.services_cold_desc,
  },
  {
    icon: "",
    path: "/spots-therapy",
    title: locale.services.sports_therapy,
    message: locale.services_sports_desc,
  },
];
