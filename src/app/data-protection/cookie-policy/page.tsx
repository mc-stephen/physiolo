"use client";

import Styles from "./page.module.css";
import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";

export default function CookiePolicy() {
  return (
    <main className={Styles.CookiePolicy}>
      {/*  */}
      <BodyHeader
        pageTitle={"COOKIE POLICY (EU)"}
        imageAlt={"Cookie Policy Image"}
        pagePath={"HOME / COOKIE POLICY (EU)"}
        imageSource={profilePic}
      />

      <section>
        <div className={Styles.policySection}>
          <div className={Styles.policyInfoBox}>
            <p className={Styles.policyParagraph}>
              <i>
                This Cookie Policy was last updated on July 3, 2023 and applies
                to citizens and legal permanent residents of the European
                Economic Area and Switzerland
              </i>
            </p>
            <h2 className={Styles.policyHeading}>1. Introduction</h2>
            <p className={Styles.policyParagraph}>
              Our website, <a href="https://physiolo.de">https://physiolo.de</a>{" "}
              (hereinafter: {"the website "}) uses cookies and other related
              technologies (for convenience all technologies are referred to as{" "}
              {"cookies "}). Cookies are also placed by third parties we have
              engaged. In the document below we inform you about the use of
              cookies on our website.
            </p>
            <h2 className={Styles.policyHeading}>2. What are cookies?</h2>
            <p className={Styles.policyParagraph}>
              A cookie is a small simple file that is sent along with pages of
              this website and stored by your browser on the hard drive of your
              computer or another device. The information stored therein may be
              returned to our servers or to the servers of the relevant third
              parties during a subsequent visit.
            </p>
            <h2 className={Styles.policyHeading}>3. What are scripts</h2>
            <p className={Styles.policyParagraph}>
              A script is a piece of program code that is used to make our
              website function properly and interactively. This code is executed
              on our server or on your device.
            </p>
            <h2 className={Styles.policyHeading}>4. What is a web bacon</h2>
            <p className={Styles.policyParagraph}>
              A web beacon (or a pixel tag) is a small, invisible piece of text
              or image on a website that is used to monitor traffic on a
              website. In order to do this, various data about you is stored
              using web beacons.
            </p>
            <h2 className={Styles.policyHeading}>5. Cookies</h2>
            <h4 className={Styles.policySubHeading}>
              5.1 Technical or functional cookies
            </h4>
            <p className={Styles.policyParagraph}>
              Some cookies ensure that certain parts of the website work
              properly and that your user preferences remain known. By placing
              functional cookies, we make it easier for you to visit our
              website. This way, you do not need to repeatedly enter the same
              information when visiting our website and, for example, the items
              remain in your shopping cart until you have paid. We may place
              these cookies without your consent.
            </p>
            <h4 className={Styles.policySubHeading}>
              5.2 Marketing/Tracking cookies
            </h4>
            <p className={Styles.policyParagraph}>
              Marketing/Tracking cookies are cookies or any other form of local
              storage, used to create user profiles to display advertising or to
              track the user on this website or across several websites for
              similar marketing purposes.
            </p>
            <h4 className={Styles.policySubHeading}>5.3 Social media</h4>
            <p className={Styles.policyParagraph}>
              On our website, we have included content from Facebook and
              Instagram to promote web pages (e.g. “like”, “pin”) or share (e.g.
              “tweet”) on social networks like Facebook and Instagram. This
              content is embedded with code derived from Facebook and Instagram
              and places cookies. This content might store and process certain
              information for personalised advertising.
            </p>
            <p className={Styles.policyParagraph}>
              Please read the privacy statement of these social networks (which
              can change regularly) to read what they do with your (personal)
              data which they process using these cookies. The data that is
              retrieved is anonymised as much as possible. Facebook and
              Instagram are located in the United States.
            </p>
            <h2 className={Styles.policyHeading}>6. Consent</h2>
            <p className={Styles.policyParagraph}>
              When you visit our website for the first time, we will show you a
              pop-up with an explanation about cookies. As soon as you click on{" "}
              {"Einstellungen speichern"}, you consent to us using the
              categories of cookies and plug-ins you selected in the pop-up, as
              described in this Cookie Policy. You can disable the use of
              cookies via your browser, but please note that our website may no
              longer work properly
            </p>
            <h4 className={Styles.policySubHeading}>
              7.1 Manage your consent setting
            </h4>

            <details className={Styles.consentSettingDetails}>
              <summary className={Styles.consentSettingSummary}>
                <span className={Styles.consentSettingHeading}>
                  <span className={Styles.consentSettingTitle}>Funtional</span>
                  <span className={Styles.consentSettingActive}>
                    Always Active
                  </span>
                  <span className={Styles.consentSettingArrow}>
                    <i
                      className="fa fa-angle-down"
                      id="down-arrow"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </summary>
              <div
                className={Styles.consentSettingDescriptionBox}
                id="descriptionContent"
              >
                <span className={Styles.consentSettingDescription}>
                  <p>
                    Technical storage or access is strictly necessary for the
                    legitimate purpose of enabling the use of a specific service
                    expressly requested by the subscriber or user or for the
                    sole purpose of carrying out the transmission of a message
                    over an electronic communications network.
                  </p>
                </span>
              </div>
            </details>
            <details className={Styles.consentSettingDetails}>
              <summary className={Styles.consentSettingSummary}>
                <span className={Styles.consentSettingHeading}>
                  <span className={Styles.consentSettingTitle}>
                    <label htmlFor="checked">Marketing</label>
                  </span>
                  <span className={Styles.consentSettingCheck}>
                    <input type="checkbox" id="checked" size={40} />
                  </span>
                  <span className={Styles.consentSettingArrow}>
                    <i
                      className="fa fa-angle-down"
                      id="down-arrow"
                      aria-hidden="true"
                    ></i>
                  </span>
                </span>
              </summary>
              <div
                className={Styles.consentSettingDescriptionBox}
                id="descriptionContent"
              >
                <span className={Styles.consentSettingDescription}>
                  <p>
                    Technical storage or access is necessary to create user
                    profiles, to send advertising or to track the user on a
                    website or across multiple websites for similar marketing
                    purposes.
                  </p>
                </span>
              </div>
            </details>
            <h2 className={Styles.policyHeading}>
              7. Enabling/disabling and deleting cookies
            </h2>
            <p className={Styles.policyParagraph}>
              You can use your internet browser to automatically or manually
              delete cookies. You can also specify that certain cookies may not
              be placed. Another option is to change the settings of your
              internet browser so that you receive a message each time a cookie
              is placed. For more information about these options, please refer
              to the instructions in the Help section of your browser.
            </p>
            <p className={Styles.policyParagraph}>
              Please note that our website may not work properly if all cookies
              are disabled. If you do delete the cookies in your browser, they
              will be placed again after your consent when you visit our website
              again.
            </p>
            <h2 className={Styles.policyHeading}>
              8. Your rights with respect to personal data
            </h2>
            <p className={Styles.policyParagraph}>
              You have the following rights with respect to your personal data:
            </p>
            <ul className={Styles.policyLists}>
              <li className={Styles.policyList}>
                You have the right to know why your personal data is needed,
                what will happen to it, and how long it will be retained for.
              </li>
              <li className={Styles.policyList}>
                Right of access: You have the right to access your personal data
                that is known to us
              </li>
              <li className={Styles.policyList}>
                Right to rectification: you have the right to supplement,
                correct, have deleted or blocked your personal data whenever you
                wish.
              </li>
              <li className={Styles.policyList}>
                If you give us your consent to process your data, you have the
                right to revoke that consent and to have your personal data
                deleted.
              </li>
              <li className={Styles.policyList}>
                Right to transfer your data: you have the right to request all
                your personal data from the controller and transfer it in its
                entirety to another controller.
              </li>
              <li className={Styles.policyList}>
                Right to object: you may object to the processing of your data.
                We comply with this, unless there are justified grounds for
                processing.
              </li>
            </ul>
            <p className={Styles.policyParagraph}>
              To exercise these rights, please contact us. Please refer to the
              contact details at the bottom of this Cookie Policy. If you have a
              complaint about how we handle your data, we would like to hear
              from you, but you also have the right to submit a complaint to the
              supervisory authority (the Data Protection Authority).
            </p>
            <h2 className={Styles.policyHeading}>9. Contact details</h2>
            <p className={Styles.policyContactParagraphIntro}>
              For questions and/or comments about our Cookie Policy and this
              statement, please contact us by using the following contact
              details:
            </p>
            <p className={Styles.policyContactParagraph}>Physio Lüpke-Okocha</p>
            <p className={Styles.policyContactParagraph}>
              Mpeza Christine Lüpke-Okocha,
            </p>
            <p className={Styles.policyContactParagraph}>Büchel 12-14,</p>
            <p className={Styles.policyContactParagraph}>41460 Neuss</p>
            <p className={Styles.policyContactParagraph}>Germany</p>
            <p className={Styles.policyContactParagraph}>
              Website: <a href="https://physiolo.de">https://physiolo.de</a>
            </p>
            <p className={Styles.policyContactParagraph}>
              Email: info@physiolo.de
            </p>
            <p className={Styles.policyContactParagraph}>
              Phone number: +49 (0) 2131-21858
            </p>
            <p className={Styles.policyContactParagraphLink}>
              This Cookie Policy was synchronised with{" "}
              <a href="https://cookiedatabase.org/"></a> on July 3, 2023.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
