"use client";

import Image from "next/image";
import Style from "./styles.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Bobath() {
  return (
    <main className={Style.bobath}>
      <BodyHeader
        pageTitle={"KG ZNS, PNF/BOBATH"}
        imageAlt={"KG ZNS, PNF/BOBATH"}
        pagePath={"Home / Services / KG ZNS, PNF/BOBATH"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image
          src={img}
          className={Style.imgSide}
          alt="BUILDING AND TRAINING ATHLETES"
        />
        <div className={Style.descSide}>
          <span className={Style.subTitle}>
            KG -CNS AFTER PNF IN NEUSS MEDICAL GYMNASTICS / PROPRIOCEPTIVE
            NEUROMUSCULAR FACILITATION IN NEUSS
          </span>
          <b className={Style.title}>
            In our practices in Neuss, Düsseldorf and Duisburg, we at Physio
            Lüpke-Okocha have been offering neurological physiotherapy (KG-ZNS
            after PNF) for several years.
          </b>
          <div className={Style.desc}>
            <p>
              MEDICAL GYMNASTICS AFTER PROPRIOCEPTIVE NEUROMUSCULAR FACILITATION
              IN NEUSS
            </p>
            <p>
              Neurological physiotherapy - treatment of diseases of the central
              nervous system Neurological physiotherapy is a specialized
              approach to physiotherapy to treat diseases of the central nervous
              system.{" "}
            </p>
            <p>
              Different concepts such as the Bobath concept or PNF are used to
              retrain disturbed posture and movement patterns, relieve pain and
              improve movement safety in everyday life. Through holistic therapy
              approaches, many patients have already noticed positive changes
              through the restoration of the interaction between nerves and
              muscles. This led to the solution of many problems and improved
              the quality of life.{" "}
            </p>
            <p>
              Neurological physiotherapy is effective for various neurological
              diseases, including:
              <ul style={{ marginLeft: 30 }}>
                <li>multiple sclerosis</li>
                <li>Parkinson&apos;s disease</li>
                <li>Paraplegia</li>
                <li>traumatic brain injury</li>
                <li>stroke</li>
                <li>Spinal cord injuries</li>
                <li>
                  disc prolapse
                  <ol style={{ marginLeft: 40 }}>
                    <li>
                      Physiotherapy can improve mobility in this chronic
                      inflammatory disease of the central nervous system.
                    </li>
                    <li>
                      Specific physiotherapy exercises can improve movement
                      disorders, muscle stiffness and balance problems in
                      Parkinson&apos;s patients.
                    </li>
                    <li>
                      For spinal cord injuries, neurological physiotherapy aims
                      to improve muscle function, train balance and conditioning
                      and restore independence in everyday life.
                    </li>
                    <li>
                      After a traumatic brain injury, physical therapy can help
                      improve mobility and motor skills and support the
                      rehabilitation process.
                    </li>
                    <li>
                      Neurological physiotherapy promotes the ability to move,
                      coordination and speech rehabilitation.
                    </li>
                  </ol>
                </li>
              </ul>
            </p>
            <p>
              In addition, neurological physiotherapy can also be used
              effectively for joint operations, sports injuries, facial, mouth
              and swallowing problems as well as back pain
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
