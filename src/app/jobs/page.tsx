"use client";

import Image from "next/image";
import Style from "./page.module.css";
import img from "/public/image/page-header.jpg";
import fetchHygraphJobData from "./api/jobs_api";
import { useContext, useEffect, useState } from "react";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Jobs() {
  const { locale } = useContext(LocaleContext);
  const [jobsData, setJobsData]: any = useState([]);
  useEffect(() => {
    cc();
    async function cc() {
      await fetchHygraphJobData()
        .then((val: any) => {
          console.log(val);
          setJobsData(val.jobs);
        })
        .catch((err: any) => {
          console.error(err);
        });
    }
  }, []);
  return (
    <main className={Style.jobs}>
      <BodyHeader
        pageTitle={locale.job_page_title}
        imageAlt={"Jobs Image"}
        pagePath={"Home / " + locale.job_page_title}
        imageSource={img}
      />
      <section className={Style.jobsCont}>
        {jobsData.map((val: BlogData, i: number) => {
          return (
            <div key={i} className={Style.job}>
              <Image
                className={Style.img}
                src={val.image?.url}
                width={300}
                height={300}
                alt={""}
              />
              <span className={Style.date}>{val.createdAt}</span>
              <b className={Style.title}>{val.title}</b>
              <a href={`/jobs/${val.slug}`} className={Style.btnCont}>
                <input type="button" value="Read More" className={Style.btn} />
              </a>
            </div>
          );
        })}
      </section>
    </main>
  );
}

interface BlogImage {
  url: string;
}

interface BlogData {
  title: string;
  slug: string;
  createdAt: string;
  image: BlogImage;
}
