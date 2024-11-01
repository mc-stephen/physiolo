"use client";

import gfm from "remark-gfm";
import Image from "next/image";
import Style from "./styles.module.css";
import ReactMarkdown from "react-markdown";
import { useContext, useEffect, useState } from "react";
import img from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import bodyImg from "/public/image/services/cryotherapy.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Cryotherapy() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    (async () => {
      const content = await readMarkdown({
        fileName: "cryotherapy.md",
        filePath: `src/languages/${locale.data_protect_local}/pages/services/`,
      });
      setMarkdownContent(content);
    })();
  }, [locale.data_protect_local]);
  return (
    <main className={Style.cryotherapy}>
      <BodyHeader
        imageAlt={"COLD / CRYOTHERAPY"}
        pageTitle={"COLD / CRYOTHERAPY"}
        pagePath={"Home / Services / COLD / CRYOTHERAPY"}
        imageSource={img}
      />
      <section className={Style.body}>
        <Image
          src={bodyImg}
          className={Style.imgSide}
          alt="COLD / CRYOTHERAPY"
        />

        {/*   */}
        <ReactMarkdown className={Style.descSide} remarkPlugins={[gfm]}>
          {markdownContent}
        </ReactMarkdown>
      </section>
    </main>
  );
}
