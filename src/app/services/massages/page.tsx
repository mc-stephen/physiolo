"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Massages() {
  return (
    <main className={Style.massages}>
      <BodyHeader
        pageTitle={"MASSAGES"}
        imageAlt={"MASSAGES"}
        pagePath={"Home / Services / MASSAGES"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="MASSAGES" />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>MASSAGES</span>
          <b className={Style.title}>MASSAGES</b>
          <div className={Style.desc}>
            <p>
              Massagen dienen der mechanischen Beeinflussung von Haut,
              Bindegewebe und Muskulatur mit Hilfe von Dehnungs-, Zug- und
              Druckreizen.
            </p>
            <p>
              Die Wirkung der Massage erstreckt sich von der behandelten
              Körperpartie auf den gesamten Organismus und schließt auch die
              Psyche mit ein. Wir behandeln alle Arten von Rückenproblemen,
              Sportmassagen und auch Entspannungsmassagen.
            </p>
            <p>
              Muskelverhärtungen werden durch unsere klassischen
              Massagetherapien reduziert oder ganz beseitigt
            </p>
            <p>
              <ul style={{ marginLeft: 40 }}>
                <li>Therapeutische Massagen</li>
                <li>Sportmassagen</li>
                <li>Entspannungsmassagen</li>
              </ul>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
