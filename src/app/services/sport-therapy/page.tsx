"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function SportTherapy() {
  return (
    <main className={Style.sportTherapy}>
      <BodyHeader
        pageTitle={"SPORTS THERAPY"}
        imageAlt={"SPORTS THERAPY"}
        pagePath={"Home / Services / SPORTS THERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="SPORTS THERAPY" />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>SPORTS THERAPY</span>
          <b className={Style.title}>SPORTS THERAPY</b>
          <span className={Style.desc}>
            <p>
              Our sports therapy treatments are designed to help you optimize
              your athletic performance and prevent injuries. Whether you are a
              professional athlete or simply enjoy exercise, our experienced
              therapists are available to help you achieve your goals.
            </p>
            <p>
              Our approach is based on a holistic view of the body and sporting
              activities. We understand that every person is unique and has
              different needs. That&apos;s why we develop personalized treatment
              plans tailored to your individual goals and requirements.
            </p>
            <p>
              Our sports therapy treatments include a variety of techniques and
              approaches including manual therapy, physical therapy, massage,
              rehabilitation training and more. Our therapists are highly
              qualified and have extensive experience working with athletes of
              different disciplines and performance levels.
            </p>
            <p>
              Another important aspect of our sports therapy treatments is
              injury prevention. Our therapists work closely with you to
              identify potential risk factors and teach you proper techniques
              and exercises to avoid injury. Through regular sessions and close
              support, we help you optimally prepare your body for sporting
              activities and increase your performance.
            </p>
            <p>
              Our goal is to not only help you treat injuries, but also provide
              long-term solutions to improve your athletic performance. We
              believe that sports therapy should not just be a short-term
              measure, but an integral part of your sporting activities and
              well-being
            </p>
          </span>
        </div>
      </section>
    </main>
  );
}
