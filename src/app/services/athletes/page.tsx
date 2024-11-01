"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import { useContext, useEffect, useState } from "react";
import img from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import bodyImg from "/public/image/services/athletes.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Athletes() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    (async () => {
      const content = await readMarkdown({
        fileName: "athletes.md",
        filePath: `src/languages/${locale.data_protect_local}/pages/services/`,
      });
      setMarkdownContent(content);
    })();
  }, [locale.data_protect_local, markdownContent]);
  return (
    <main className={Style.athletes}>
      <BodyHeader
        pageTitle={"BUILDING AND TRAINING ATHLETES"}
        imageAlt={"BUILDING AND TRAINING ATHLETES"}
        pagePath={"Home / Services / BUILDING AND TRAINING ATHLETES"}
        imageSource={img}
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
