"use client";

import Link from "next/link";
import Image from "next/image";
import { useContext } from "react";
import Styles from "./style.module.css";
import appointmentImg from "/public/image/clock.jpg";
import profilePic from "/public/image/page-header.jpg";
import BodyHeader from "@/components/body-header/body-header";
import { LocaleContext } from "@/contexts/translation-context";

export default function BookAppointment() {
  const { locale } = useContext(LocaleContext);
  return (
    <main className={Styles.Meetings}>
      {/*  */}
      <BodyHeader
        imageSource={profilePic}
        imageAlt={"Book Appointment Image"}
        pageTitle={locale.book_appoint_page_title}
        pagePath={"HOME / " + locale.book_appoint_page_title}
      />

      {/*  */}
      <section>
        <div className={Styles.appointmentFirstBox}>
          <h6 className={Styles.appointmentHeading}>
            {locale.book_appoint_page_deadline}
          </h6>
          <h2 className={Styles.appointmentDescription}>
            {locale.book_appoint_page_our_branch}
          </h2>
          <div className={Styles.appointmentFeaturesBox}>
            <div className={Styles.featureBox}>
              <div className={Styles.featureIconBox}>
                <span className={Styles.featureIcon}>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span>
              </div>
              <div className={Styles.featureContent}>
                <h5 className={Styles.featureTitle}>
                  Neuss {locale.book_appoint_page_appoint}
                </h5>
                <p className={Styles.featureDescription}>
                  {locale.book_appoint_page_are_you_in} Neuss?{" "}
                  {locale.book_appoint_page_book_here}.
                </p>
                <button type="button" className={Styles.featureButton}>
                  <Link href="https://www.doctolib.de/praxis/neuss/physio-luepke-okocha-duesseldorf/booking/insurance-sector?profile_skipped=true&specialityId=1231&telehealth=false&placeId=practice-459692&profileSkipped=true">
                    {locale.book_appoint_page_book_appoint}
                  </Link>
                </button>
              </div>
            </div>
            <div className={Styles.featureBox}>
              <div className={Styles.featureIconBox}>
                <span className={Styles.featureIcon}>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span>
              </div>
              <div className={Styles.featureContent}>
                <h5 className={Styles.featureTitle}>
                  Düsseldorf {locale.book_appoint_page_appoint}
                </h5>
                <p className={Styles.featureDescription}>
                  {locale.book_appoint_page_are_you_in} Düsseldorf?{" "}
                  {locale.book_appoint_page_book_here}.
                </p>
                <button type="button" className={Styles.featureButton}>
                  <Link href="https://www.doctolib.de/praxis/neuss/physio-luepke-okocha-duesseldorf/booking/insurance-sector?profile_skipped=true&specialityId=1231&telehealth=false&placeId=practice-434752&profileSkipped=true">
                    {locale.book_appoint_page_book_appoint}
                  </Link>
                </button>
              </div>
            </div>
            <div className={Styles.featureBox}>
              <div className={Styles.featureIconBox}>
                <span className={Styles.featureIcon}>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span>
              </div>
              <div className={Styles.featureContent}>
                <h5 className={Styles.featureTitle}>
                  Duisburg {locale.book_appoint_page_appoint}
                </h5>
                <p className={Styles.featureDescription}>
                  {locale.book_appoint_page_are_you_in} Duisburg{" "}
                  {locale.book_appoint_page_book_here}.
                </p>
                <button type="button" className={Styles.featureButton}>
                  <Link href="https://app1b.praxwin.de/praxwinshop.svc/Start?PraxisApiKey=9hHy/+lRkTM9hDRYHZCkhVSack0wn7ShxtbVcCrW+Wdnp1iEfdflqssTvfXRVn0Z6sjopDfwCHJ+t+9aQYjA/yviNVx2p2HO3EtKZWDK2/yTSagpUufSD5T1ZV5A7RN2SFIG8Foj1M5c3sFxgqGdz/qPbhDJEHjd&theme=">
                    {locale.book_appoint_page_book_appoint}
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.appointmentSecondBox}>
          <div className={Styles.appointmentImageBox}>
            <Image
              className={Styles.appointmentImage}
              src={appointmentImg}
              alt={"Make Appoinment Image"}
            />
          </div>
          <div className={Styles.appointmentInfo}>
            <h6 className={Styles.appointmentHeading}>DEADLINE</h6>
            <h2 className={Styles.appointmentDescription}>
              {locale.book_appoint_page_make_appoint}
            </h2>
            <p className={Styles.appoinmentParagraph}>
              {locale.book_appoint_page_your_physical}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
