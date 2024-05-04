"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function ManualTherapy() {
  return (
    <main className={Style.manualTherapy}>
      <BodyHeader
        pageTitle={"MANUAL THERAPY"}
        imageAlt={"MANUAL THERAPY"}
        pagePath={"Home / Services / MANUAL THERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="MANUAL THERAPY" />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>MANUAL THERAPY</span>
          <b className={Style.title}>MANUAL THERAPY</b>
          <div className={Style.desc}>
            <p>
              We offer high-quality manual therapy treatments to relieve pain
              and restore mobility.
            </p>
            <p>
              Our dedicated team of therapists specialize in harnessing the
              benefits of manual therapy to improve your health and well-being.
              With an individual approach to each patient, we offer tailored
              treatments to meet your specific needs.
            </p>
            <p>
              Manual therapy is a gentle but effective method aimed at treating
              dysfunctions of the musculoskeletal system. Our therapists use
              special techniques to mobilize joints, relieve muscle tension and
              restore natural mobility.
            </p>
            <p>
              Whether you suffer from back pain, neck discomfort, joint
              problems, or other musculoskeletal conditions, our manual therapy
              can help you relieve pain and regain range of motion. Our
              experienced therapists work closely with you to identify the
              underlying causes of your symptoms and develop an individual
              treatment plan.
            </p>
            <p>
              We attach great importance to your health and well-being. That&apos;s
              why we not only offer you high-quality treatments, but also a
              supportive and trusting environment. Our team is here to answer
              your questions, address your concerns, and guide you on the road
              to recovery
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
