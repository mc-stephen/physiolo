"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import { useContext, useEffect, useState } from "react";
import img from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import bodyImg from "/public/image/services/bobath.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Bobath() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    (async () => {
      const content = await readMarkdown({
        fileName: "bobath.md",
        filePath: `src/languages/${locale.data_protect_local}/pages/services/`,
      });
      setMarkdownContent(content);
    })();
  }, [locale.data_protect_local, markdownContent]);

  return (
    <main className={Style.bobath}>
      <BodyHeader
        imageSource={img}
        imageAlt={"KG ZNS, PNF/BOBATH"}
        pageTitle={"KG ZNS, PNF/BOBATH"}
        pagePath={"Home / Services / KG ZNS, PNF/BOBATH"}
      />
      <section className={Style.body}>
        <Image
          src={bodyImg}
          className={Style.imgSide}
          alt="BUILDING AND TRAINING ATHLETES"
        />

        {/*   */}
        <ReactMarkdown className={Style.descSide} remarkPlugins={[gfm]}>
          {markdownContent}
        </ReactMarkdown>
      </section>
    </main>
  );
}
