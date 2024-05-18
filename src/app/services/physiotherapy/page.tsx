"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Physiotherapy() {
  return (
    <main className={Style.physiotherapy}>
      <BodyHeader
        pageTitle={"PHYSIOTHERAPY"}
        imageAlt={"PHYSIOTHERAPY"}
        pagePath={"Home / Services / PHYSIOTHERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="PHYSIOTHERAPY" />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>
            MEDICAL GYMNASTICS / PHYSIOTHERAPY IN NEUSS
          </span>
          <b className={Style.title}>
            In our practices in Neuss, Düsseldorf and Duisburg we offer you
            professional physiotherapy treatments.
          </b>
          <span className={Style.desc}>
            <p>Physiotherapy/physiotherapy</p>
            <p>
              Physiotherapy is a highly effective form of treatment for
              illnesses from all medical disciplines. Active and passive
              therapies can be used to treat and prevent illnesses and injuries.
              The overall goal is to improve the body&apos;s mobility and
              functionality and to provide valuable self-help advice. Our
              outstanding physical therapy has helped many patients avoid
              surgery and better manage their illness.
            </p>
            <p>
              In physical therapy, we treat a variety of health conditions,
              including fractures, the use of artificial joints, amputations,
              hamstring tears, tendon tears, patient strengthening and
              stabilization, treatment after accidents or long-term illnesses,
              return to work, osteoarthritis and spinal disorders.
            </p>
            <p>
              Our highly qualified therapists adapt the treatment individually
              to each patient to achieve optimal results. With our physiotherapy
              you can improve your health, relieve pain, restore mobility and
              increase quality of life. Trust in our experience and expertise to
              accompany you on the path to recovery.
            </p>
            <p>
              <ul>
                <li>Fractions</li>
                <li>Use of an artificial joint</li>
                <li>amputation</li>
                <li>Torn muscles and tendons</li>
                <li>Strengthen and stabilize patients</li>
                <li>Treatment after accidents or</li>
                <li>Long-term illnesses</li>
                <li>Return to work</li>
                <li>arthrosis</li>
                <li>Diseases of the spine</li>
              </ul>
            </p>
          </span>
        </div>
      </section>
    </main>
  );
}
