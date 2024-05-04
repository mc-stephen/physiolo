"use client";

import Style from "./style.module.css";
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Dusseldorf() {
  const teams: team[] = [
    {
      image: "",
      name: "Denise Groß",
      skill: ["Standortleiterin", " Physiotherapeutin"],
    },
    {
      image: "",
      name: "Dyana Saiid",
      skill: ["Physiotherapeutin"],
    },
  ];
  return (
    <main className={Style.dusseldorf}>
      <BodyHeader
        imageSource={img}
        pageTitle={"Dusseldorf"}
        imageAlt={"Dusseldorf Image"}
        pagePath={"Home / Teams / Dusseldorf"}
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
