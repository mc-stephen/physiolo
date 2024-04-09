"use client";

import Link from "next/link";
import Image from "next/image";
import Style from "./style.module.css";

export default function FloatingBanner() {
  return (
    <div className={Style.contr}>
      <span className={Style.span}>
        Book an appointment
        <br />
        online
      </span>
      <br />
      <Image
        width={100}
        height={40}
        className={Style.img}
        src="https://www.doctolib.de/external_button/doctolib-white-transparent.png"
        alt="Doctolib"
      />
      <Link
        className={Style.link}
        href="https://www.doctolib.de/praxis/duesseldorf/physio-luepke-okocha-duesseldorf?pid=practice-459692&amp;?utm_campaign=website-button&amp;utm_source=physio-luepke-okocha-duesseldorf?pid=practice-459692&amp;-website-button&amp;utm_medium=referral&amp;utm_content=option-8&amp;utm_term=physio-luepke-okocha-duesseldorf?pid=practice-459692&amp;;"
        target="_blank"
        rel="noopener noreferrer"
      >
        Neuss
      </Link>
      <Link
        className={Style.link}
        href="https://www.doctolib.de/praxis/neuss/physio-luepke-okocha-duesseldorf?pid=practice-434752&amp;?utm_campaign=website-button&amp;utm_source=physio-luepke-okocha-duesseldorf?pid=practice-434752&amp;-website-button&amp;utm_medium=referral&amp;utm_content=option-8&amp;utm_term=physio-luepke-okocha-duesseldorf?pid=practice-434752&amp;;"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dusseldorf
      </Link>

      <br />
      <span className={Style.span}>via Praxwin</span>
      <br />

      <Link
        className={Style.link}
        href="https://app1b.praxwin.de/praxwinshop.svc/Start?PraxisApiKey=9hHy/+lRkTM9hDRYHZCkhVSack0wn7ShxtbVcCrW+Wdnp1iEfdflqssTvfXRVn0Z6sjopDfwCHJ+t+9aQYjA/yviNVx2p2HO3EtKZWDK2/yTSagpUufSD5T1ZV5A7RN2SFIG8Foj1M5c3sFxgqGdz/qPbhDJEHjd&amp;theme="
        target="_blank"
        rel="noopener noreferrer"
      >
        Duisburg
      </Link>
    </div>
  );
}
