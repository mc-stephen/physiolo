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

export default function CookiePolicy() {
  const { locale } = useContext(LocaleContext);
  const [markdownContent, setMarkdownContent] = useState("");
  useEffect(() => {
    (async () => {
      const dataProtectionMd = await readMarkdown({
        fileName: "cookie-policy.md",
        filePath: `src/languages/${locale.cookie_policy_local}/pages`,
      });
      setMarkdownContent(dataProtectionMd);
    })();
  }, [locale.cookie_policy_local]);
  return (
    <main className={Styles.CookiePolicy}>
      {/*  */}
      <BodyHeader
        imageSource={profilePic}
        imageAlt={"Cookie Policy Image"}
        pageTitle={locale.cookie_policy_page_title}
        pagePath={"HOME / " + locale.cookie_policy_page_title}
      />

      {/*   */}
      <ReactMarkdown className={Styles.policySection} remarkPlugins={[gfm]}>
        {markdownContent}
      </ReactMarkdown>
    </main>
  );
}
