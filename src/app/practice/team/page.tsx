"use client";

import style from './team.module.css';
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Practice() {
  return (
    <main className={style.team}>
      <BodyHeader
        pageTitle={"TEAM"}
        imageAlt={"TEAM Image"}
        pagePath={"Home / Practice / TEAM"}
        imageSource={img}
      />
      <section className={style.section}>Coming soon</section>
    </main>
  );
}
