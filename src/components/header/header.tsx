import Link from "next/link";
import Search from "../search/search";
import Style from "./header.module.css";
import Image from 'next/image';

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
    <section className={Style.bottomHeader}>
      <div className={Style.logo}>
        <img className={Style.logoImg} src="http://physiolo.de/wp-content/uploads/2023/04/physio-logo.png" alt="logo"/>
      </div>
      <nav className={Style.navBar}>
        <ul className={Style.navBarItems}>
          <li className={Style.navItem}><a href="#">HOME</a>
            <div className={Style.dropDownMenu}>
              <ul className={Style.dropDownMenuItems}>
                <li className={Style. dropDownMenuItem}><a href="#">PRAXIS</a>
                  <div className={Style.subDropDownMenu}>
                    <ul className={Style.subDropDownMenuItems}>
                      <li className={Style.subDropDownMenuItem}><a href="#">UBER UNS</a></li>
                      <li className={Style.subDropDownMenuItem}><a href="#">TEAM</a></li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className={Style.navItem}><a href="#">LEISTUNGEN</a>
            <div className={Style.dropDownMenu}>
              <ul className={Style.dropDownMenuItems} id={Style.dropDownMenuItem2}>
                <li className={Style. dropDownMenuItem}><a href="#">KG ZNS, PNF/BOBATH</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">KRANKENGYMNASTIK</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">MANUELLE LYMPHDRAINAGE</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">MASSAGEN</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">CDM</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">AUFBAU UND TRAINING VON SPORTLERN</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">KÄLTE / KRYOTHERAPIE</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">WÄRMETHERAPIE</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">SPORTTHERAPIE</a></li>
                <li className={Style. dropDownMenuItem}><a href="#">MANUELLE THERAPIE</a></li>
              </ul>
            </div>
          </li>
          <li className={Style.navItem}><a href="#">JOBS</a></li>
          <li className={Style.navItem}><a href="#">BLOG</a></li>
          <li className={Style.navItem}><a href="#">AKTUELLE</a></li>
          <li className={Style.navItem}><a href="#">FOTOGALERIE</a></li>
          <li className={Style.navItem}><a href="#">KONTAKT</a></li>
          <li className={Style.navItem}><a href="#">DATENSCHUTZ</a>
          <div className={Style.dropDownMenu}>
            <ul className={Style.dropDownMenuItems}>
              <li className={Style. dropDownMenuItem}><a href="#">COOKIE POLICY (EU)</a></li>
            </ul>
          </div>
          </li>
        </ul>
      </nav>
      <div className={Style.navPhoneBox}>
        <div className={Style.navPhoneIcon}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-outbound-fill" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5"/>
          </svg>
        </div >
        <div className={Style.navPhoneInfo}>
          <p className={Style.navPhoneName}>JEZTZ ANRUFEN</p>
          <p className={Style.navPhoneNo}>02131-21858</p>
        </div>
      </div>
      <button className={Style.navButton}>TERMIN</button>
    </section>
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
