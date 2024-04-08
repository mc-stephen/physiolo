"use client";

import PublicRoundedSwitch from "@/widget/switch/switch";
import Style from "./cookie.module.css";
import { useState } from "react";
import Link from "next/link";

//============================================
//
//============================================
export default function Policy() {
  const [showCookieCont, setShowCookieCont] = useState(true);
  const [showCookieSettingCont, setShowCookieSettingCont] = useState(false);

  //
  const showOrHideCookieCont = (val: boolean, click: number) => {
    if (showCookieCont == true && click == 1) return;
    setShowCookieCont(!val);
  };

  //
  const showOrHideCookieSettingCont = () => {
    setShowCookieSettingCont(!showCookieSettingCont);
  };

  return (
    <section
      className={`${Style.cookieCont} ${!showCookieCont ? Style.minimize : ""}`}
    >
      <i
        className={`fa fa-times ${Style.closeBtn}`}
        onClick={() => showOrHideCookieCont(showCookieCont, 0)}
      ></i>
      <b
        className={Style.title}
        onClick={() => showOrHideCookieCont(showCookieCont, 1)}
      >
        Manage cookie consent
      </b>
      <div className={Style.scroll}>
        <span className={Style.desc}>
          To provide you with the best possible experience, we use technologies
          such as cookies to store and/or access device information. If you
          agree to these technologies, we may process data such as browsing
          behavior or unique IDs on this website. If you do not give or withdraw
          your consent, certain features and functionality may be affected.
        </span>
        <CookieSetting showCookieSettingCont={showCookieSettingCont} />
      </div>
      <div className={Style.actionBtn}>
        <button className={Style.btn}>Accept</button>
        <button className={Style.btn}>Refuse</button>
        <button
          className={Style.btn}
          onClick={() => showOrHideCookieSettingCont()}
        >
          {!showCookieSettingCont ? "View " : "Close "}
          settings
        </button>
      </div>
      <div className={Style.links}>
        <Link href="/data-protection/cookie-policy" className={Style.link}>
          <span>Cookie policy</span>
        </Link>
        <Link href="/data-protection" className={Style.link}>
          <span>Data protection</span>
        </Link>
      </div>
    </section>
  );
}

//============================================
//
//============================================
function CookieSetting({
  showCookieSettingCont,
}: {
  showCookieSettingCont: boolean;
}) {
  return (
    <div
      className={`${Style.dropdownCont}  ${
        showCookieSettingCont ? Style.show : ""
      }`}
    >
      {/*  */}
      <div className={Style.dropdown}>
        <div className={Style.dropdownHeader}>
          <b>Function</b>
          <aside className={Style.aside}>
            <span>Always active</span>
            <i className="fa fa-angle-down" />
          </aside>
        </div>
        <span className={Style.dropdownContent}>
          Technical storage or access is strictly necessary for the legitimate
          purpose of enabling the use of a specific service expressly requested
          by the subscriber or user or for the sole purpose of carrying out the
          transmission of a message over an electronic communications network.
        </span>
      </div>
      <br />
      {/*  */}
      <div className={Style.dropdown}>
        <div className={Style.dropdownHeader}>
          <b>Marketing</b>
          <aside className={Style.aside}>
            <PublicRoundedSwitch />
            <i className="fa fa-angle-down" />
          </aside>
        </div>
        <span className={Style.dropdownContent}>
          Technical storage or access is necessary to create user profiles, to
          send advertising or to track the user on a website or across multiple
          websites for similar marketing purposes.
        </span>
      </div>
    </div>
  );
}
