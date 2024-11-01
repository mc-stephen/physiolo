"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import { useContext, useEffect, useState } from "react";
import img from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import bodyImg from "/public/image/services/massages.png";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Massages() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  
  useEffect(() => {

    (async () => {
      const content = await readMarkdown({
        fileName: "massages.md",
        filePath: `src/languages/${locale.data_protect_local}/pages/services/`,
      });
      setMarkdownContent(content);
    })();
  },[locale.data_protect_local]);
  return (
    <main className={Style.massages}>
      <BodyHeader
        pageTitle={"MASSAGES"}
        imageAlt={"MASSAGES"}
        pagePath={"Home / Services / MASSAGES"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={bodyImg} className={Style.imgSide} alt="MASSAGES" />

        {/*   */}
        <ReactMarkdown className={Style.descSide} remarkPlugins={[gfm]}>
          {markdownContent}
        </ReactMarkdown>
      </section>
    </main>
  );
}
