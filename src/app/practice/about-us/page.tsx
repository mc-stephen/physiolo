"use client";

import Image from "next/image";
import { useContext } from "react";
import Style from "./page.module.css";
import headerImg from "/public/image/page-header.jpg";
import img from "/public/image/gallery/gallery-6.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function AboutUs() {
  const { locale } = useContext(LocaleContext);

  //====================================
  //
  //====================================
  const list = [
    locale.about_us_list_kg,
    locale.about_us_list_prevention,
    locale.about_us_list_physio,
    locale.about_us_list_massage,
    locale.about_us_list_manual,
    locale.about_us_list_cmd,
    locale.about_us_list_sports,
  ];

  return (
    <main className={Style.aboutUs}>
      <BodyHeader
        imageSource={headerImg}
        imageAlt={"About Us Image"}
        pageTitle={locale.about_us_page_title}
        pagePath={"Home / " + locale.about_us_page_title}
      />

      {/*-----------------------------------*/}
      <section className={Style.firstRow}>
        <Image
          src={img}
          width={500}
          height={500}
          alt={"imageAlt"}
          className={Style.img}
        />
        <div className={Style.content}>
          <span className={Style.welcome}>{locale.about_us_welcome}</span>
          <b className={Style.b}>{locale.about_us_lupke}</b>
          <span className={Style.span}>{locale.about_us_lupke_desc}</span>
          <ul className={Style.ul}>
            {list.map((val) => {
              return <li key={val}>{val}</li>;
            })}
          </ul>
        </div>
      </section>

      {/*-----------------------------------*/}
      <section className={Style.approach}>
        <b className={Style.b}>{locale.about_us_approach}</b>
        <span className={Style.span}>{locale.about_us_approach_desc}</span>
      </section>

      {/*-----------------------------------*/}
      <section className={Style.whyWe}>
        <b className={Style.b}>{locale.about_us_why_we}</b>
        <span className={Style.span}>{locale.about_us_why_we_desc}</span>
        <u className={Style.u}>{locale.about_us_qualified}</u>
        <span className={Style.span}>{locale.about_us_qualified_desc}</span>
        <u className={Style.u}>{locale.about_us_home_visit}</u>
        <span className={Style.span}>{locale.about_us_home_visit_desc}</span>
        <u className={Style.u}>{locale.about_us_prescriptions}</u>
        <span className={Style.span}>{locale.about_us_prescriptions_desc}</span>
        <u className={Style.u}>{locale.about_us_modern}</u>
        <span className={Style.span}>{locale.about_us_modern_desc}</span>
      </section>

      {/*-----------------------------------*/}
      <section className={Style.successes}>
        <b className={Style.b}>{locale.about_us_successes}</b>
        <div className={Style.wrap}>
          {successes.map((val) => {
            return <div key={val.label} className={Style.cont}></div>;
          })}
        </div>
      </section>
    </main>
  );
}

const successes = [
  {
    icon: "",
    number: "",
    label: "",
  },
  {
    icon: "",
    number: "",
    label: "",
  },
  {
    icon: "",
    number: "",
    label: "",
  },
  {
    icon: "",
    number: "",
    label: "",
  },
];
