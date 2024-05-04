"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function HeatTherapy() {
  return (
    <main className={Style.heatTherapy}>
      <BodyHeader
        pageTitle={"HEAT THERAPY"}
        imageAlt={"HEAT THERAPY"}
        pagePath={"Home / Services / HEAT THERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="HEAT THERAPY" />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>HEAT THERAPY</span>
          <b className={Style.title}>HEAT THERAPY</b>
          <span className={Style.desc}>
            Wärme bewirkt eine Muskelentspannung, verbessert die Durchblutung
            und die Elastizität des kollagenen Bindegewebes und wirkt
            schmerzlindernd. Wärme wird insbesondere bei Nackenschmerzen,
            chronischen Rückenschmerzen und Gelenkbeschwerden sowie
            Muskelverspannungen eingesetzt. Hitze sollte nicht bei entzündlichen
            Erkrankungen eingesetzt werden.
          </span>
        </div>
      </section>
    </main>
  );
}
