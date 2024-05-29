"use client";

import Link from "next/link";
import { useContext } from "react";
import Styles from "./footer.module.css";
import { LocaleContext } from "@/contexts/translation-context";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <FirstFooter />
      <BottomFooter />
    </footer>
  );
}

//====================================
//
//====================================
function FirstFooter() {
  const { locale } = useContext(LocaleContext);
  return (
    <section className={Styles.firstFooter}>
      <h2 className={Styles.title}>Physio</h2>
      <span className={Styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt,
        dolore suscipit deserunt corrupti quis aliquid excepturi ex est
        blanditiis ipsam. Doloribus nemo optio blanditiis, doloremque odio amet
        vel esse.
      </span>
      <div className={Styles.footerAddresses}>
        <div className={Styles.addressContainer}>
          <div className={Styles.addressBox}>
            <h4 className={Styles.addressHeading}>Neuss</h4>
            <span className={Styles.info}>Büchel 12-14,</span>
            <span className={Styles.info}>41460 Neuss</span>
            <span className={Styles.info}>
              <b>Phone:</b> 02131-21858
            </span>
            <span className={Styles.info}>
              <b>Fax:</b> 02131-3832120
            </span>
            <span className={Styles.info}>
              <b>Mobile/WhatsApp:</b> 01579-2471990
            </span>
            <span className={Styles.info}>
              <b>E-mail:</b> Neuss@physiolo.de
            </span>
          </div>
          <div className={Styles.addressBox}>
            <h4 className={Styles.addressHeading}>Dusseldorf</h4>
            <span className={Styles.info}>Bilker Allee 183,</span>
            <span className={Styles.info}>40217 Düsseldorf</span>
            <span className={Styles.info}>
              <b>Phone:</b> 0211-345997
            </span>
            <span className={Styles.info}>
              <b>Fax:</b> 0211-31125648
            </span>
            <span className={Styles.info}>
              <b>Mobile/WhatsApp:</b> 01579-2305865
            </span>
            <span className={Styles.info}>
              <b>Email:</b> Duesseldorf@physiolo.de
            </span>
          </div>
          <div className={Styles.addressBox}>
            <h4 className={Styles.addressHeading}>Duisburg</h4>
            <span className={Styles.info}>Düsseldorfer Landstr. 87-89,</span>
            <span className={Styles.info}>47249 Duisburg</span>
            <span className={Styles.info}>
              <b>Phone:</b> 02037-08317
            </span>
            <span className={Styles.info}>
              <b>Fax:</b> 0203-9352874
            </span>
            <span className={Styles.info}>
              <b>Mobile/WhatsApp:</b> 01579-2305600
            </span>
            <span className={Styles.info}>
              <b>Email:</b> Duisburg@physiolo.de
            </span>
          </div>
        </div>
        <hr className={Styles.bottomBorder} />
        <div className={Styles.addressContainer}>
          {[0, 1, 2].map((val, i) => {
            return (
              <div key={i} className={Styles.addressBox1}>
                <span className={Styles.info}>
                  <b>{locale.monday}:</b> 8 a.m. - 12 p.m., 1 p.m. - 6 p.m.
                </span>
                <span className={Styles.info}>
                  <b>{locale.tuesday}:</b> 8 a.m. - 12 p.m., 1 p.m. - 6 p.m.
                </span>
                <span className={Styles.info}>
                  <b>{locale.wednesday}:</b> 8 a.m. - 12 p.m., 1 p.m. - 6 p.m.
                </span>
                <span className={Styles.info}>
                  <b>{locale.thursday}:</b> 8 a.m. - 12 p.m., 13:00 - 18:00
                </span>
                <span className={Styles.info}>
                  <b>{locale.friday}:</b> 08:00 - 14:00
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

//====================================
//
//====================================
function BottomFooter() {
  const socialMedialLinks = [
    {
      icon: "fa fa-facebook",
      link: "https://www.facebook.com/profile.php?id=100057791464478",
    },
    {
      icon: "fa fa-instagram",
      link: "https://www.instagram.com/physio_lue_ok/",
    },
    { icon: "fa fa-whatsapp", link: "https://physiolo.de/#" },
    { icon: "fa fa-linkedin", link: "https://physiolo.de/#" },
  ];
  return (
    <section className={Styles.bottomFooter}>
      <span className={Styles.copyright}>
        Copyright © 2024 All Rights Reserved | PHYSIO LÜPKE-OKOCHA
      </span>
      <div className={Styles.role}>
        {socialMedialLinks.map((val) => {
          return (
            <Link href={val.link} key={val.icon} className={Styles.link}>
              <li className={`${Styles.socialMedialIcon} ${val.icon}`}></li>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
