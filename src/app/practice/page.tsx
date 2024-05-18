"use client";

import style from './page.module.css';
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Practice() {
  return (
    <main className={style.practice}>
      <BodyHeader
        pageTitle={"Practice"}
        imageAlt={"Practice Image"}
        pagePath={"Home / Practice"}
        imageSource={img}
      />
      <section className={style.section}>Coming soon</section>
    </main>
  );
}
