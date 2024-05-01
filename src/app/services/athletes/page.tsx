"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Athletes() {
  return (
    <main className={Style.athletes}>
      <BodyHeader
        pageTitle={"BUILDING AND TRAINING ATHLETES"}
        imageAlt={"BUILDING AND TRAINING ATHLETES"}
        pagePath={"Home / Services / BUILDING AND TRAINING ATHLETES"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image
          src={img}
          className={Style.imgSide}
          alt="BUILDING AND TRAINING ATHLETES"
        />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>BUILDING AND TRAINING ATHLETES</span>
          <b className={Style.title}>BUILDING AND TRAINING ATHLETES</b>
          <span className={Style.desc}>
            Common problems experienced by athletes include injuries to the
            musculoskeletal system such as strains, knee damage or torn muscle
            fibers. These can be prevented or remedied with holistic therapy
            (heat/cold, physiotherapy and KG). This is primarily about
            prevention with the aim of being able to do sport in the long term.
            Here we create an individual treatment concept that supports the
            patient in rehabilitation and restores the old functionality, for
            example through rehabilitation training. We have a lot of experience
            with footballers and we got each of them back on the pitch in a very
            short time.
          </span>
        </div>
      </section>
    </main>
  );
}
