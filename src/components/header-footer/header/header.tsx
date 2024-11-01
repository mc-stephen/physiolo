"use client";

import Link from "next/link";
import Image from "next/image";
import Style from "./header.module.css";
import LogoImage from "/public/image/physio-logo.png";
import { useContext, useEffect, useState } from "react";
import { LocaleContext } from "@/contexts/translation-context";
import LocaleSwitcher from "@/widget/local_switcher/local_switcher";
import HeaderLinks, { HeaderLinksInterface } from "./header_pages_data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 130);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={Style.header}>
      <TopHeader />
      <BottomHeader isScrolled={isScrolled} />
    </header>
  );
}

//====================================
//
//====================================
function TopHeader() {
  const whatsapp = "https://wa.me/+4915792471990";
  const instagram = "https://www.instagram.com/physio_lue_ok/";
  const facebook = "https://www.facebook.com/profile.php?id=100057791464478";
  const tiktok = "https://www.tiktok.com/@physiolpkeokocha?_t=8mtD9Lphn5l&_r=1";
  const youtube = "";
  return (
    <section className={Style.topHeader}>
      <aside className={Style.leftAside}>
        <span className={Style.span}>
          <i className={`fa fa-map-marker ${Style.icon}`}></i>
          Büchel 12-14 41460 Neuss, Germany
        </span>
        <div className={Style.divider}></div>
        <span className={Style.span}>
          <i className={`fa fa-envelope ${Style.icon}`} aria-hidden="true"></i>
          <Link href="mailto:info@physiolo.de">info@physiolo.de</Link>
        </span>
      </aside>
      <aside className={Style.rightAside}>
        <Link href={facebook} className={Style.link}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>
        <Link href={instagram} className={Style.link}>
          <i className="fa-brands fa-square-instagram"></i>
        </Link>
        <Link href={whatsapp} className={Style.link}>
          <i className="fa-brands fa-square-whatsapp"></i>
        </Link>
        <Link href={youtube} className={Style.link}>
          <i className="fa fa-youtube" aria-hidden="true"></i>
        </Link>
        <Link href={tiktok} className={Style.link}>
          <i className="fa-brands fa-tiktok"></i>
        </Link>
        <LocaleSwitcher />
      </aside>
    </section>
  );
}

//====================================
//
//====================================
function BottomHeader({ isScrolled }: { isScrolled: boolean }) {
  const { locale } = useContext(LocaleContext);
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <section
      className={`${Style.bottomHeader} ${isScrolled && Style.fixedHeader}`}
    >
      <Link href="/" className={Style.link}>
        <Image src={LogoImage} alt="physiolo-logo" className={Style.img} />
      </Link>
      <ul className={`${Style.navBarItems} ${navIsOpen && Style.open}`}>
        {HeaderLinks(locale).map((val) => {
          return (
            <li key={val.label} className={Style.navItem}>
              <Link href={val.link} className={Style.label}>
                {val.label}
              </Link>
              {val.children.length != 0 && (
                <MenuDropdownWidget
                  link={val.link}
                  alignRight={false}
                  menuItem={val.children}
                />
              )}
            </li>
          );
        })}
      </ul>

      {/*---------------------------------Bars Icon ------------------- */}
      <div
        className={Style.navBarsBox}
        onClick={() => setNavIsOpen(!navIsOpen)}
      >
        {navIsOpen ? (
          <i className={`fa fa-close ${Style.navBars}`} aria-hidden="true"></i>
        ) : (
          <i className={`fa fa-bars ${Style.navBars}`} aria-hidden="true"></i>
        )}
      </div>

      {/*-------------------Phone Icon-----------------------------*/}
      <div className={Style.navPhoneBox}>
        <div className={Style.navPhoneIcon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            className={Style.svg}
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <div className={Style.navPhoneInfo}>
          <p className={Style.navPhoneName}>{locale.call_now}</p>
          <Link href="tel:02131-21858" className={Style.navPhoneNo}>
            <p>02131-21858</p>
          </Link>
        </div>
      </div>

      {/*--------------------Meeting------------------------*/}
      <button className={Style.navButton}>
        <Link href="/book-appointment" className={Style.link}>
          {locale.book_appointment}
        </Link>
      </button>
    </section>
  );
}

//====================================
//
//====================================
function MenuDropdownWidget({
  link,
  menuItem,
  alignRight,
}: {
  link: string;
  alignRight: boolean;
  menuItem: Array<HeaderLinksInterface>;
}) {
  const className = alignRight ? Style.subDropDownMenu : Style.dropDownMenu;
  const className1 = alignRight
    ? Style.subDropDownMenuItem
    : Style.dropDownMenuItem;
  return (
    <ul className={className}>
      {menuItem.map((val) => {
        let url = "";
        url = link + val.link;
        return (
          <li key={val.label} className={className1}>
            <Link className={Style.label} href={url}>
              {val.label}
            </Link>
            {val.children.length != 0 && (
              <MenuDropdownWidget
                link={url}
                alignRight={true}
                menuItem={val.children}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}
