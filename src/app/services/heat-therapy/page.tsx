"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import { useContext, useState } from "react";
import img from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function HeatTherapy() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  (async () => {
    const content = await readMarkdown({
      fileName: "heatTherapy.md",
      filePath: `src/languages/${locale.data_protect_local}/pages/services/`,
    });
    setMarkdownContent(content);
  })();
  return (
    <main className={Style.heatTherapy}>
      <BodyHeader
        pageTitle={"HEAT THERAPY"}
        imageAlt={"HEAT THERAPY"}
        pagePath={"Home / Services / HEAT THERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="HEAT THERAPY" />
        
        {/*   */}
        <ReactMarkdown className={Style.descSide} remarkPlugins={[gfm]}>
          {markdownContent}
        </ReactMarkdown>
      </section>
    </main>
  );
}
