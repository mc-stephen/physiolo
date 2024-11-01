"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import { useContext, useEffect, useState } from "react";
import img from "/public/image/page-header.jpg";
import bodyImg from "/public/image/services/cmd.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Cdm() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    (async () => {
      const content = await readMarkdown({
        fileName: "cdm.md",
        filePath: `src/languages/${locale.data_protect_local}/pages/services/`,
      });
      setMarkdownContent(content);
    })();
  }, [locale.data_protect_local]);
  return (
    <main className={Style.cdm}>
      <BodyHeader
        pageTitle={"CDM"}
        imageAlt={"CDM"}
        pagePath={"Home / Services / CDM"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image src={bodyImg} className={Style.imgSide} alt="CDM" />

        {/*   */}
        <ReactMarkdown className={Style.descSide} remarkPlugins={[gfm]}>
          {markdownContent}
        </ReactMarkdown>
      </section>
    </main>
  );
}
