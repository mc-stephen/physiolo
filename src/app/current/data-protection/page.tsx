"use client";

import gfm from "remark-gfm";
import Styles from "./page.module.css";
import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useContext, useState } from "react";
import profilePic from "/public/image/page-header.jpg";
import { readMarkdown } from "@/helper/markdown_reader";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function Protection() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    (async () => {
      const content = await readMarkdown({
        fileName: "data-protection.md",
        filePath: `src/languages/${locale.data_protect_local}/pages`,
      });
      setMarkdownContent(content);
    })();
  }, [locale.data_protect_local]);
  return (
    <main className={Styles.blog}>
      <BodyHeader
        imageSource={profilePic}
        imageAlt={"Data Protection Image"}
        pageTitle={locale.data_protect_page_title}
        pagePath={"HOME / " + locale.data_protect_page_title}
      />

      {/*   */}
      <ReactMarkdown className={Styles.Container} remarkPlugins={[gfm]}>
        {markdownContent}
      </ReactMarkdown>
    </main>
  );
}
