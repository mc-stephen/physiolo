import BodyHeader from "@/components/body-header/body-header";
import headerImg from "/public/image/page-header.jpg";
import img from "/public/image/gallery/gallery-6.jpg";
import Style from "./page.module.css";
import Image from "next/image";

export default function AboutUs() {
  return (
    <main className={Style.aboutUs}>
      <BodyHeader
        pageTitle={"About Us"}
        imageAlt={"About Us Image"}
        pagePath={"Home / About Us"}
        imageSource={headerImg}
      />

      {/*-----------------------------------*/}
      <section className={Style.firstRow}>
        <Image
          src={img}
          width={500}
          height={500}
          alt={"imageAlt"}
          className={Style.img}
        />
        <div className={Style.content}>
          <span className={Style.welcome}>Welcome to</span>
          <b className={Style.b}>PHYSIO LÜPKE-OKOCHA</b>
          <span className={Style.span}>
            We, Physiotherapy Lüpke-Okocha, are a team consisting of young and
            experienced physiotherapists. Together we have set ourselves the
            goal of ensuring the best possible, holistic treatment for our
            patients. At 3 locations (Neuss, Düsseldorf, Duisburg) we treat you
            in our modern treatment rooms in a pleasant atmosphere and with a
            high level of professional knowledge. This is not only used in our
            therapies, our dynamic team also works in close cooperation, which
            creates a great atmosphere in the practice
          </span>
          <ul className={Style.ul}>
            {list.map((val) => {
              return <li key={val}>{val}</li>;
            })}
          </ul>
        </div>
      </section>

      {/*-----------------------------------*/}
      <section className={Style.approach}>
        <b className={Style.b}>Our approach</b>
        <span className={Style.span}>
          Since the patient comes first for us, we place great emphasis on the
          quality of our therapy. An individual treatment plan is created for
          each of our patients, with great consideration given to questions and
          problems. With our well-trained team and our different rooms, we have
          a variety of treatment options to offer, which are tailored to you,
          the patient.{"\n"}You are always welcome and can contact any of us
          at any time! You don&apos;t have to wait weeks or months. Our
          registration staff will help us find a date for you to start treatment
          as quickly as possible.
        </span>
      </section>

      {/*-----------------------------------*/}
      <section className={Style.whyWe}>
        <b className={Style.b}>Why we?</b>
        <span className={Style.span}>
          Our therapy offers are aimed at both chronic patients and pre- or
          postoperative measures. We work in the areas of trauma surgery,
          orthopedics, pain therapy, sports medicine, maxillofacial medicine and
          phlebology and, above all, with back problems. During the therapy, you
          have access to well-equipped individual rooms, as well as a large
          sports room with a variety of fitness equipment and multi-gyms. A
          physiotherapist&apos;s hands are his tools, but motivation during
          therapy is crucial for rapid treatment success. Thanks to the
          motivation and available resources of our therapists, nothing stands
          in the way of your recovery.
        </span>
        <u className={Style.u}>Qualified specialists</u>
        <span className={Style.span}>
          Thanks to our wide range of training and further education, we cover
          every therapeutic area in order to be able to offer you individual and
          successful treatment.
        </span>
        <u className={Style.u}>Home visit service</u>
        <span className={Style.span}>
          If there are mobility restrictions and you cannot leave the house, we
          offer you a home visit service in which one of the therapists will
          carry out the therapy on site.
        </span>
        <u className={Style.u}>Prescriptions and payments</u>
        <span className={Style.span}>
          We look after patients with statutory and private insurance, but you
          can also take advantage of our services as a self-payer.
        </span>
        <u className={Style.u}>Modern techniques</u>
        <span className={Style.span}>
          We use a combination of traditional and modern techniques
        </span>
      </section>

      {/*-----------------------------------*/}
      <section className={Style.successes}>
        <b className={Style.b}>Our successes</b>
        <div className={Style.wrap}>
          {successes.map((val) => {
            return <div key={val.label} className={Style.cont}></div>;
          })}
        </div>
      </section>
    </main>
  );
}

//====================================
//
//====================================
const list = [
  "KG ZNS, PNF/BOBATH",
  "PREVENTION",
  "PHYSIOTHERAPY",
  "MASSAGES",
  "MANUAL LYMPH DRAINAGE",
  "CDM",
  "Sports therapy",
];

const successes = [
  {
    icon: "",
    number: "",
    label: "",
  },
  {
    icon: "",
    number: "",
    label: "",
  },
  {
    icon: "",
    number: "",
    label: "",
  },
  {
    icon: "",
    number: "",
    label: "",
  },
];
