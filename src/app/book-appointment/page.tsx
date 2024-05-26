"use client";

import BodyHeader from "@/components/body-header/body-header";
import Styles from "./style.module.css";
import profilePic from "/public/image/page-header.jpg";
import Image from "next/image";
import appointmentImg from "/public/image/clock.jpg";
import Link from "next/link";

export default function BookAppointment() {
  return (
    <main className={Styles.Meetings}>
      {/*  */}
      <BodyHeader
        pageTitle={"Book Appointment"}
        imageAlt={"Book Appointment Image"}
        pagePath={"HOME / Book Appointment"}
        imageSource={profilePic}
      />

      {/*  */}
      <section>
        <div className={Styles.appointmentFirstBox}>
          <h6 className={Styles.appointmentHeading}>DEADLINE</h6>
          <h2 className={Styles.appointmentDescription}>
            Make an appointment with one of our branches.
          </h2>
          <div className={Styles.appointmentFeaturesBox}>
            <div className={Styles.featureBox}>
              <div className={Styles.featureIconBox}>
                <span className={Styles.featureIcon}>
                  <i className="fa fa-clock-o" aria-hidden="true"></i>
                </span>
              </div>
              <div className={Styles.featureContent}>
                <h5 className={Styles.featureTitle}>Neuss Appointment</h5>
                <p className={Styles.featureDescription}>
                  Are you in Neuss? Book here.
                </p>
                <button type="button" className={Styles.featureButton}>
                  <Link href="https://www.doctolib.de/praxis/neuss/physio-luepke-okocha-duesseldorf/booking/insurance-sector?profile_skipped=true&specialityId=1231&telehealth=false&placeId=practice-459692&profileSkipped=true">
                    BOOK AN APPOINTMENT
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
                <h5 className={Styles.featureTitle}>Düsseldorf Termin</h5>
                <p className={Styles.featureDescription}>
                  Are you in Düsseldorf? Book here.
                </p>
                <button type="button" className={Styles.featureButton}>
                  <Link href="https://www.doctolib.de/praxis/neuss/physio-luepke-okocha-duesseldorf/booking/insurance-sector?profile_skipped=true&specialityId=1231&telehealth=false&placeId=practice-434752&profileSkipped=true">
                    BOOK AN APPOINTMENT
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
                <h5 className={Styles.featureTitle}>Duisburg Appointment</h5>
                <p className={Styles.featureDescription}>
                  Are you in Duisburg? Book here.
                </p>
                <button type="button" className={Styles.featureButton}>
                  <Link href="https://app1b.praxwin.de/praxwinshop.svc/Start?PraxisApiKey=9hHy/+lRkTM9hDRYHZCkhVSack0wn7ShxtbVcCrW+Wdnp1iEfdflqssTvfXRVn0Z6sjopDfwCHJ+t+9aQYjA/yviNVx2p2HO3EtKZWDK2/yTSagpUufSD5T1ZV5A7RN2SFIG8Foj1M5c3sFxgqGdz/qPbhDJEHjd&theme=">
                    BOOK AN APPOINTMENT
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
              Make an appointment with us
            </h2>
            <p className={Styles.appoinmentParagraph}>
              Your physical well-being is our priority. Make an appointment with
              us to receive quality treatment
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
