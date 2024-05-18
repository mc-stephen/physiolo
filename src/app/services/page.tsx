"use client";

import Link from "next/link";
import style from "./style.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Services() {
  return (
    <main className={style.services}>
      <BodyHeader
        pageTitle={"SERVICES"}
        imageAlt={"services img"}
        pagePath={"Home / Services"}
        imageSource={img}
      />
      <section className={style.section}>
        <span className={style.label}>SERVICES</span>
        <b className={style.title}>PHYSIO LÜPKE-OKOCHA SERVICES</b>
        <div className={style.grid}>
          {data.map((val, i) => {
            return (
              <div key={i} className={style.servicesCont}>
                <div className={style.img}></div>
                <b className={style.title}>{val.title}</b>
                <span className={style.msg}>{val.message}</span>
                <Link href={`/services${val.path}`} className={style.button}>
                  <input type="button" value="Read More" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

//==========================
// SERVICES
//==========================
interface Services {
  icon: string;
  path: string;
  title: string;
  message: string;
}

//==========================
// SERVICES
//==========================
const data: Services[] = [
  {
    icon: "",
    path: "/bobath",
    title: "KG-ZNS / PNF/BOBATH",
    message: `Multiple sclerosis, Parkinson's disease, paraplegia, traumatic 
      brain injury, stroke, joint surgery, sports accidents, facial, oral and 
      swallowing problems (including jaw problems), back pain`,
  },
  {
    icon: "",
    path: "/physiotherapy",
    title: "PHYSIOTHERAPY",
    message: `Fractures, use of artificial joints, amputations, muscle and 
      tendon tears, strengthening and stabilization of patients, treatment 
      after accidents or long-term illnesses, reintegration into work, 
      osteoarthritis, spinal diseases`,
  },
  {
    icon: "",
    path: "/drainage",
    title: "Manual lymph drainage",
    message: `Chronic, lymphedema, chronic venous insufficiency, postoperative 
      swelling, torn muscle fibers, chronic polyarthritis, CRPS (complex regional 
      pain syndrome), post-stroke hemiplegia swelling, headache`,
  },
  {
    icon: "",
    path: "/massages",
    title: "Massages",
    message: "Healing massages, sports massages, relaxation massages",
  },
  {
    icon: "",
    path: "/cmd",
    title: "CMD",
    message: `Cranio (skull with upper jaw), mandibular (lower jaw) dysfunction 
      (functional disorder), muscle, jaw and/or temporomandibular joint function, 
      problems in the head, neck and shoulder area, cervical spine, jaw joints.`,
  },
  {
    icon: "",
    path: "/athletes",
    title: "Development and training of athletes",
    message: `Common problems experienced by athletes include injuries to the 
      musculoskeletal system such as strains, knee damage or torn muscle fibers. 
      These can be prevented or remedied with holistic therapy (heat/cold,
      physiotherapy and KG).`,
  },
  {
    icon: "",
    path: "/manual-therapy",
    title: "Manual therapy",
    message: `Heat causes muscle relaxation, improves blood circulation and the 
      elasticity of the collagenous connective tissue and has a 
      pain-relieving effect.`,
  },
  {
    icon: "",
    path: "/cryotherapy",
    title: "Cold/cryotherapy",
    message: `Cold has a pain-relieving and decongestant effect, both for acute 
      and chronic complaints. In acute injuries, the reduced blood flow caused 
      by cold reduces the formation of edema.`,
  },
  {
    icon: "",
    path: "/spots-therapy",
    title: "Sports therapy",
    message: `We offer personalized sports therapy treatments to improve 
      athletic performance and prevent injuries.`,
  },
  {
    icon: "",
    path: "/manual-therapy",
    title: "Manual therapy",
    message: `We offer high-quality manual therapy treatments to relieve 
      pain and restore mobility to help you live a pain-free life.`,
  },
];
