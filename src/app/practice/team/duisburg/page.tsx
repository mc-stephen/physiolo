"use client";

import Style from "./style.module.css"; 
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Duisburg() {
  const teams: team[] = [
    {
      image: "",
      name: "Denise Groß",
      skill: ["Standortleiterin", " Physiotherapeutin"],
    },
    {
      image: "",
      name: "Michael Zwaila",
      skill: ["Physiotherapeut"],
    },
    {
      image: "",
      name: "Christa Riedel-Zwaila",
      skill: ["Physiotherapeutin"],
    },
    {
      image: "",
      name: "Anke Greifzu",
      skill: ["Rezeptionistin"],
    },
    {
      image: "",
      name: "Monika Buchmüller",
      skill: ["Rezeptionistin"],
    },
  ];
  return (
    <main className={Style.duisburg}>
      <BodyHeader
        imageSource={img}
        pageTitle={"Duisburg"}
        imageAlt={"Duisburg Image"}
        pagePath={"Home / Teams / Duisburg"}
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
