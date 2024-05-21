"use client";

import Style from "./style.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Duisburg() {
  const teams: team[] = [
    {
      image: "",
      name: "Mpheza Christine,\bLÜPKE-OKOCHA",
      skill: ["Inhaberin", " Bachelor of physiotherapy"],
    },
    {
      image: "",
      name: "Francis Okocha",
      skill: ["Praxis Manager"],
    },
    {
        image: "",
        name: "Dyana Saiid",
        skill: ["PR Manager"],
      },
    {
      image: "",
      name: "Denise Groß",
      skill: ["Dusseldorf Standortleiterin", "\nPhysiotherapeutin"],
    },
    {
      image: "",
      name: "Jean Paul ONANA",
      skill: ["Nuess Standortleiter", "\bPhysiotherapeut"],
    },
  ];
  return (
    <main className={Style.duisburg}>
      <BodyHeader
        imageSource={img}
        pageTitle={"Management"}
        imageAlt={"Management Image"}
        pagePath={"Home / Management"}
      />
      <section className={Style.body}>
        {/*=====================================*/}
        <section className={Style.teamSection}>
          {teams.map((val, i) => {
            return (
              <div key={i} className={Style.teamCont}>
                <div className={Style.img}></div>
                <b className={Style.title}>{val.name}</b>
                <span>{val.skill.join(",")}</span>
              </div>
            );
          })}
        </section>
      </section>
    </main>
  );
}

interface team {
  name: string;
  image: string;
  skill: string[];
}
