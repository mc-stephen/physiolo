"use client";

import Style from "./style.module.css"; 
import img from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";

export default function Nuess() {
  const teams: team[] = [
    {
      image: "",
      name: "Jean Paul ONANA",
      skill: ["Standortleiter", " Physiotherapeut"],
    },
    {
      image: "",
      name: "Paula Garcia Amores",
      skill: ["Physiotherapeutische", "Praktikantin"],
    },
    {
      image: "",
      name: "Philipp JENSEN",
      skill: ["Physiotherapeut"],
    },
    {
      image: "",
      name: "Destiny ABUBAKAR",
      skill: ["Rezeptionistin"],
    },
    {
      image: "",
      name: "Monika Buchmüller",
      skill: ["Physiotherapeut"],
    },
    {
      image: "",
      name: "Marita BEHR",
      skill: ["Rezeptionistin"],
    },
    {
      image: "",
      name: "Brigitte HLAWENKA",
      skill: ["Rezeptionistin"],
    },
  ];
  return (
    <main className={Style.nuess}>
      <BodyHeader
        imageSource={img}
        pageTitle={"Nuess"}
        imageAlt={"Nuess Image"}
        pagePath={"Home / Teams / Nuess"}
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
