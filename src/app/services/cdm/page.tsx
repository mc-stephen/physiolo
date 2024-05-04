"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Cdm() {
  return (
    <main className={Style.cdm}>
      <BodyHeader
        pageTitle={"CDM"}
        imageAlt={"CDM"}
        pagePath={"Home / Services / CDM"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="CDM" />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>CDM</span>
          <b className={Style.title}>CDM</b>
          <div className={Style.desc}>
            <p>
              Cranio- (Schädel mit Oberkiefer) mandibuläre (Unterkiefer-)
              Dysfunktion (Funktionseinschränkung) umfasst alle schmerzhaften
              und nicht schmerzhaften Zustände, die auf einer Dysregulation der
              Muskel-, Kiefer- und/oder Kiefergelenksfunktion beruhen. Probleme
              im Kopf-, Nacken- und Schulterbereich sowie Fehlstellungen der
              Halswirbelsäule führen oft zu einer Über- oder Fehlbelastung der
              Kaumuskulatur und der Kiefergelenke. Insbesondere Stress fördert
              auch CMD. Bei unserer Therapie wird das Kiefergelenk mobilisiert,
              Schmerzpunkte behandelt, auch die Halswirbelsäule behandelt und
              die Nackenmuskulatur entspannt.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
