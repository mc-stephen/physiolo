"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Cryotherapy() {
  return (
    <main className={Style.cryotherapy}>
      <BodyHeader
        imageAlt={"COLD / CRYOTHERAPY"}
        pageTitle={"COLD / CRYOTHERAPY"}
        pagePath={"Home / Services / COLD / CRYOTHERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="COLD / CRYOTHERAPY" />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>COLD / CRYOTHERAPY</span>
          <b className={Style.title}>COLD / CRYOTHERAPY</b>
          <div className={Style.desc}>
            <p>
              Kälte wirkt schmerzlindernd und abschwellend, sowohl bei akuten
              als auch bei chronischen Beschwerden. Bei akuten Verletzungen
              reduziert die durch Kälte verursachte Minderdurchblutung die
              Ödembildung.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
