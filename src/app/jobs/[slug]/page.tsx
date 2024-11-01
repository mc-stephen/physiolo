"use client";

import Image from "next/image";
import Style from "./page.module.css";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import img from "/public/image/page-header.jpg";
import fetchHygraphJobSingleData from "./api/single_job_data";
import BodyHeader from "@/components/body-header/body-header";

export default function SingleJobView() {
  const currentPath: string = usePathname();
  const [jobData, setJobData]: any = useState({});
  useEffect(() => {
    cc();
    async function cc() {
      await fetchHygraphJobSingleData(currentPath.split("/")[2])
        .then((val: any) => {
          console.log(val);
          setJobData(val.jobs[0]);
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  }, [currentPath]);
  return (
    <main className={Style.blogSingle}>
      <BodyHeader
        imageAlt={"Jobs Image"}
        pageTitle={jobData.title}
        pagePath={`Home / Jobs / ${jobData.title}`}
        imageSource={img}
      />
      <section className={Style.section}>
        <Image
          className={Style.img}
          src={jobData.image?.url}
          width={300}
          height={300}
          alt={""}
        />
        <article
          className={Style.article}
          dangerouslySetInnerHTML={{ __html: jobData.content?.html }}
        />
      </section>
    </main>
  );
}
