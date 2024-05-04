"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Drainage() {
  return (
    <main className={Style.drainage}>
      <BodyHeader
        pageTitle={"MANUAL LYMPH DRAINAGE"}
        imageAlt={"MANUAL LYMPH DRAINAGE"}
        pagePath={"Home / Services / MANUAL LYMPH DRAINAGE"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image
          src={img}
          className={Style.imgSide}
          alt="MANUAL LYMPH DRAINAGE"
        />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>MANUAL LYMPH DRAINAGE IN NUESS</span>
          <b className={Style.title}>
            PHYSIO LÜPKE-OKOCHA: Our highly trained therapists offer customized
            manual lymphatic drainage sessions to relieve your symptoms and
            improve your overall health
          </b>
          <div className={Style.desc}>
            <p>MANUAL LYMPH DRAINAGE</p>
            <p>
              Manual lymphatic drainage is an extremely effective therapy for
              treating tissue swelling caused by congenital or acquired
              lymphatic drainage disorders. Edema can also occur after
              accidents, operations or during pregnancy. Various techniques are
              used to support and stimulate lymphatic drainage. The therapeutic
              effect is further enhanced through the use of compression bandages
              and specific body positions. In addition to treating lymphatic
              drainage disorders, we also focus on lipedema, a disease that
              leads to an uneven distribution of body fat.
            </p>
            <p>
              The following conditions and complaints can be treated with manual
              lymphatic drainage:
              <ul style={{marginLeft: 40}}>
                <li>Chronic lymphedema</li>
                <li>Chronic venous insufficiency</li>
                <li>Post-operative swelling</li>
                <li>Hamstring tears</li>
                <li>Chronic polyarthritis</li>
                <li>CRPS (complex regional pain syndrome)</li>
                <li>Swelling after hemiplegia resulting from a stroke</li>
              </ul>
            </p>
            <p>
              Our highly trained therapists offer tailored manual lymphatic
              drainage sessions to relieve your symptoms and improve your
              overall health
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
