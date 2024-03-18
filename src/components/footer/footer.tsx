import Link from "next/link";
import Styles from "./footer.module.css";

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
  return (
    <section className={Styles.firstFooter}>
      <h2 className={Styles.title}>Physio</h2>
      <span className={Styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum incidunt,
        dolore suscipit deserunt corrupti quis aliquid excepturi ex est
        blanditiis ipsam. Doloribus nemo optio blanditiis, doloremque odio amet
        vel esse.
      </span>
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
        Copyright © 2023 All Rights Reserved | PHYSIO LÜPKE-OKOCHA
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
