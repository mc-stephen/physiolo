import Link from "next/link";
import Search from "../search/search";
import Style from "./header.module.css";

export default function Header() {
  return (
    <header>
      <TopHeader />
      <BottomHeader />
      <ResponsiveHeader />
    </header>
  );
}

//====================================
//
//====================================
function TopHeader() {
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
          Neuss@physiolo.de
        </span>
      </aside>
      <aside className={Style.rightAside}>
        <Link href="" className={Style.link}>
          <i className="fa fa-facebook" aria-hidden="true"></i>
        </Link>
        <Link href="" className={Style.link}>
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </Link>
        <Link href="" className={Style.link}>
          <i className="fa fa-whatsapp" aria-hidden="true"></i>
        </Link>
        <i className="fa fa-search" aria-hidden="true"></i>
      </aside>
    </section>
  );
}

//====================================
//
//====================================
function BottomHeader() {
  return (
    <>
      <Search />
    </>
  );
}

//====================================
//
//====================================
function ResponsiveHeader() {
  return (
    <>
      <Search />
    </>
  );
}
