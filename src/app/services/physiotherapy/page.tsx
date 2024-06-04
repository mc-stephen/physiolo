"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import { useContext, useState } from "react";
import img from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";
import ReactMarkdown from "react-markdown";

export default function Physiotherapy() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  (async () => {
    const content = await readMarkdown({
      fileName: "physiotherapy.md",
      filePath: `src/languages/${locale.data_protect_local}/pages/services`,
    });
    setMarkdownContent(content);
  })();
  return (
    <main className={Style.physiotherapy}>
      <BodyHeader
        imageSource={img}
        imageAlt={"PHYSIOTHERAPY"}
        pageTitle={"PHYSIOTHERAPY"}
        pagePath={"Home / Services / PHYSIOTHERAPY"}
      />
      <section className={Style.body}>
        <Image src={img} className={Style.imgSide} alt="PHYSIOTHERAPY" />

        {/*   */}
        <ReactMarkdown className={Style.descSide} remarkPlugins={[gfm]}>
          {markdownContent}
        </ReactMarkdown>
      </section>
    </main>
  );
}
