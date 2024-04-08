import BodyHeader from "@/components/body-header/body-header";
import profilePic from "/public/image/page-header.jpg";
import Styles from "./page.module.css";

export default function Protection() {
    return (
        <main className={Styles.blog}>
        <BodyHeader
          pageTitle={"DATA PROTECTION"}
          imageAlt={"Data Protection Image"}
          pagePath={"HOME / DATA PROTECTION"}
          imageSource={profilePic}
        />

        {/*   */}
        <section>
            <div className={Styles.Container}>
                <h5 className={Styles.header1}>PRIVACY INFORMATION</h5>
                <h2 className={Styles.header2}>PRIVACY INFORMATION</h2>
                <hr className={Styles.headerborder}/>
                <p className={Styles.content}>Welcome to the <b>Physio Lüpke-Okocha website.</b></p> 
                <p className={Styles.content}>In the following data protection information you will find out what happens to your data, the so-called personal data, and, above all, 
                    why. We will also tell you how we protect your data, when the data will be deleted and what rights you have thanks to data protection.</p>
                <p className={Styles.content}><b>First of all:</b> We comply with data protection laws and the European General Data Protection Regulation and protect your privacy as best we can.</p>
                <p className={Styles.content}>But we want to be completely open: the Internet thrives on data exchange and still has many security gaps.
                     Even if your data is encrypted when you visit our website, there is always a residual risk when it is exchanged 
                     with third-party websites. If you visit other websites - for example via a link on our website - 
                     please note that this data protection information does <b><u>not</u></b> apply to these external websites, but only to our website! 
                     We also ask you to note that emails are generally unencrypted and therefore fundamentally insecure communication medium. 
                    If you would like to exchange personal data with us, please coordinate the transmission method with us in advance.</p>
                <p className={Styles.content}>We are of the opinion that education and knowledge about data protection helps to better assess possible dangers and risks. For this reason,
                     we have developed this data protection information and compiled all relevant information. 
                     The compilation was made to the best of our knowledge and belief and in accordance with the requirements of Article 13 EU GDPR.
                      Because it is important to us that your trust is honored here.</p>
                <p className={Styles.content}>
                    <b>Business purpose and processing of personal data</b><br />
                    <span className={Styles.contentSpan}>We process personal data (hereinafter: data) of our customers/patients, suppliers, employees and business partners exclusively to provide our services of the highest quality and with the greatest reliability.
                     Data is processed in both automated and non-automated form.</span>
                </p>
                <p className={Styles.content}>This includes the following data: name and address/address as well as email address, account details and telephone numbers (landline and mobile). In addition, special category data can also be processed as part of our services, especially in treatment-related and personnel-related processes. 
                    This always takes into account necessity, legality and appropriate purpose, in accordance with Article 5 GDPR.</p>
                <p className={Styles.content}>“Processing of data” includes, for example, the following processes: collecting, recording, organizing, storing, using, 
                    transmitting, disseminating and deleting data (Article 4 No. 2 of the General Data Protection Regulation – GDPR).</p>
                <p className={Styles.content}>We process data that is necessary to justify and fulfill the contractual services and point out the necessity of providing them. 
                    Disclosure to external parties only occurs if it is really necessary as part of an order. When processing data provided to us as part of an order, we act in accordance with the instructions of the client and the legal requirements for order processing in accordance with Art. 
                    28 GDPR and do not process the data for any purpose other than the purpose specified in the order.</p>
                <p className={Styles.content}>
                    <b>Who can you reach out to?</b><br />
                    <span className={Styles.contentSpan}>Section 38 BDSG new version applies in the company. The responsible body within the meaning of data protection laws, 
                    in particular the EU General Data Protection Regulation (GDPR), is:</span>
                </p>
                <p className={Styles.content}>
                    <span className={Styles.contentSpan}>Physiotherapy practice</span><br />
                    <span className={Styles.contentSpan}><b>Physio Lüpke-Okocha,</b></span>
                </p>
                <p className={Styles.content}>
                    <span className={Styles.contentSpan}>Mpeza Christine Lüpke-Okocha,</span><br />
                    <span className={Styles.contentSpan}>Büchel 12-14,</span><br />
                    <span className={Styles.contentSpan}>41460 Neuss</span><br />
                    <span className={Styles.contentSpan}>Telephone: +49 (0) 2131-21858</span><br />
                    <span className={Styles.contentSpan}>Fax: +49 (0) 2131-3832120</span><br />
                    <span className={Styles.contentSpan}>Email: <a href="info@physiolo.de" className={Styles.ProtectionLinks}>info@physiolo.de</a></span>
                </p>
                <p className={Styles.content}>
                    <span className={Styles.contentSpan}>Person responsible for data processing:</span><br />
                    <span className={Styles.contentSpan}>Managing Director/Owner: <b>Mpeza Christine Lüpke-Okocha</b></span>
                </p>
                <p className={Styles.content}>
                    <b>Data protection officer</b><br />
                    <span>In addition, we have voluntarily appointed an <b>external data protection officer</b> who supports us in implementing data protection-related requirements. 
                    This person is available to you as your direct contact for all data protection matters that concern our company. You can reach them at:</span>
                    </p>
                <p className={Styles.content}>
                    <b>Rennings implementation consultancy Neuss,</b><br />
                    <span className={Styles.contentSpan}>Daniela Rennings</span><br />
                    <i>Certified data protection officer/data protection auditor/money laundering officer</i>
                </p>
                <p className={Styles.content}>
                    <span className={Styles.contentSpan}>Cooperation partner of DEKRA Assurance Services GmbH</span><br />
                    <span className={Styles.contentSpan}>Am Hagelkreuz 6 •</span><br />
                    <span className={Styles.contentSpan}>41469 Neuss</span><br />
                    <span className={Styles.contentSpan}>Tel: 0211-87 939 160</span><br />
                    <span className={Styles.contentSpan}>Email: <a href="dsb@run-neuss.de" className={Styles.ProtectionLinks}>dsb@run-neuss.de</a></span>
                </p>
                <p className={Styles.content}>
                    <span className={Styles.contentSpan}><b>What are your rights?</b></span><br />
                    <span className={Styles.contentSpan}>You can contact us at any time if you have any questions about your data protection rights or 
                        would like to exercise one of your following rights:</span><br />
                    <ul className={Styles.contentList}>
                        <li><b>Right of withdrawal</b> in accordance with Article 7 Paragraph 3 GDPR (e.g. you can contact us if you would like to revoke your previously given consent to a newsletter)</li>
                        <li><b>Right to information</b> in accordance with Art. 15 GDPR (e.g. you can contact us if you would like to know what data we have stored about you)</li>
                        <li><b>Correction</b> in accordance with Art. 16 GDPR (e.g. you can contact us if your email address has changed and we should replace the old email address)</li>
                        <li><b>Deletion</b> in accordance with Art. 17 GDPR (e.g. you can contact us if you want us to delete certain data that we have stored about you)</li>
                        <li><b>Restriction of processing</b> in accordance with Article 18 GDPR (e.g. you can contact us if you do not want us to delete your email address, but only use it to send absolutely necessary emails)</li>
                        <li><b>Data portability</b> in accordance with Art. 20 GDPR (e.g. you can contact us to receive the data we store in a compressed format, e.g. because you want to make the data available to another service provider)</li>
                        <li><b>Objection</b> in accordance with Article 21 of the GDPR in the case of processing in accordance with Article 6 Paragraph 1, Letter f. (e.g. you can contact us if you do not agree with one of the advertising or analysis procedures specified here)</li>
                        <li><b>Right to complain</b> to the responsible supervisory authority in accordance with Article 77 Paragraph 1, f. GDPR (e.g. if you have a complaint, you can also contact the data protection supervisory authority directly)</li>
                    </ul>
                </p>
                <p className={Styles.content}>
                    <b>The responsible supervisory authority is:</b><br />
                    <span className={Styles.contentSpan}>State Commissioner for Data Protection and Freedom of Information North Rhine-Westphalia</span><br />
                    <span className={Styles.contentSpan}>Kavalleriestraße 2-4</span><br />
                    <span className={Styles.contentSpan}>40213 Düsseldorf</span><br />
                    <span className={Styles.contentSpan}>Telephone: 0211 38424-0</span><br />
                    <span className={Styles.contentSpan}>Fax: 0211 38424-10</span><br />
                    <span className={Styles.contentSpan}>Email: poststelle@ldi.nrw.de</span>
                </p>
                <p className={Styles.content}>
                    <b>Categories of data subjects</b><br />
                    <span className={Styles.contentSpan}>Visitors and users of our online offering (hereinafter we refer to the affected persons collectively as “users”). 
                    Furthermore, customers, suppliers, service providers and business partners who work with us in a trusting manner.</span>
                </p>
                <p className={Styles.content}>
                    <b>Purpose of processing</b>
                    <ul className={Styles.contentList1}>
                        <li>– Provision of the online offer, its functions and content</li>
                        <li>– Answering contact requests and communicating with users</li>
                        <li>– Safety and protection measures</li>
                        <li>– Range measurement/marketing (cookies and analysis tools)</li>
                    </ul>
                </p>
                <p className={Styles.content}>In addition, personal data will only be used within the scope of our business purpose, taking into account Article 6 GDPR and Article 9 GDPR Paragraph 2 lit. h. processed. 
                This always takes into account necessity, legality and appropriate purpose, in accordance with Article 5 GDPR.</p>
                <p className={Styles.content}>The data will only be passed on to third parties if we are legally obliged to do so. There is no transfer of data to third countries.</p>
                <p className={Styles.content}>
                    <b>Relevant legal bases for processing</b><br />
                    <span className={Styles.contentSpan}>In accordance with Art. 13 GDPR, we inform the users of our website and our customers about the legal basis for our data processing. For users from the scope of the General Data Protection Regulation (GDPR),
                         i.e. the EU and the EEC, the following applies, unless the legal basis is stated in the data protection declaration:</span><br />
                    <ul className={Styles.contentList}>
                        <li>The legal basis for obtaining <u>consent</u> is Article 6 Paragraph 1 Letter a and Article 7 GDPR;</li>
                        <li>The legal basis for processing <u>to fulfill our services</u> and <u>carry out contractual measures</u> as well as answer inquiries is Article 6 (1) (b) GDPR;</li>
                        <li>The legal basis for processing to fulfill our <u>legal obligations</u> is Article 6 (1) (c) GDPR;</li>
                        <li>In the event that <u>the vital interests</u> of the data subject or another natural person require the processing of personal data, Article 6 Paragraph 1 Letter d GDPR serves as the legal basis.</li>
                        <li>The legal basis for the processing necessary to carry out a task that is <u>in the public interest</u> or in the exercise of <u>official authority</u> vested in the person responsible is Article 6 (1) (e) GDPR.</li>
                        <li>The legal basis for processing to protect our <u>legitimate interest</u> is Article 6 (1) (f) GDPR.</li>
                        <li>The processing of data for purposes other than those for which they were collected is determined in accordance with the provisions of Article 6 (4) GDPR.</li>
                        <li>The processing of <u>special categories</u> of data (according to Art. 9 Para. 1 GDPR) is determined in accordance with the provisions of Art. 9 Para. 2 GDPR.</li>
                    </ul>
                </p>
                <p className={Styles.content}>
                    <span className={Styles.contentSpan}><b>Deletion of data and storage period</b></span><br />
                    <span className={Styles.contentSpan}>Unless otherwise stated, we delete your data as soon as it is no longer needed, for example the email address after unsubscribing from our newsletter. Your data will also be blocked or deleted if a storage period prescribed by law expires, unless there is a need for further storage of the data to conclude or fulfill a contract. Certain data may need to be retained longer for legal reasons. You can of course request information about the stored data and its retention periods at any time. We regularly check the necessity of storing the data; In the case of statutory retention obligations, deletion occurs after their expiry 
                        (e.g.: 6 years, in accordance with Section 257 Paragraph 1 HGB, 10 Years, in accordance with Section 147 Paragraph 1 AO).</span>
                </p>
                <p className={Styles.content}>
                    <b>Visit our website</b><br />
                    <span className={Styles.contentSpan}>When you visit our website, an SSL or. TLS encryption used. You can recognize an encrypted connection by the fact that the address line of the browser begins with “https://” and by the lock symbol in the browser line. 
                        If you just want to browse our website, no personal data will be collected, with the exception of the data that your browser transmits to enable you to visit the website, especially:</span>
                    <ul className={Styles.contentList}>
                        <li>Name of the website accessed (e.g. the website that was just accessed)</li>
                        <li>Date and time of retrieval (e.g. 11:45 on May 25, 2018)</li>
                        <li>Amount of data transferred (e.g. 2427 bytes)</li>
                        <li>Message about successful retrieval (e.g. information as to whether there was an error when accessing the page)</li>
                        <li>Browser type and version (e.g. the browser used is Firefox 60.0.1)</li>
                        <li>the {"user's"} operating system (e.g. MacOS 10.13.4)</li>
                        <li>Referrer URL (the previously visited page)</li>
                        <li>IP address and the requesting provider (e.g. 95.91.215.example or 2a02:8109:9440:1198:bdb1:551f:example)</li>
                        <li>Status codes (e.g. status code 200: request processed successfully)</li>
                    </ul>
                </p>
                <p className={Styles.content}>The most interesting thing for you as a visitor to our website is the IP address, as this is data that can theoretically be traced back to you as a person. 
                As a protective measure for your privacy, all data will be deleted from the website after your visit. The purpose of temporarily storing the data at the beginning is to ensure the connection as well as the accessibility and correct display of our website. The IP address and the technical data already mentioned are required to display the website, avoid display problems for visitors and resolve error messages. 
                The legal basis is our so-called legitimate interest in accordance with Article 6 Paragraph 1 Letter f of the GDPR.</p>
                <p className={Styles.content}>
                    <b>SSL encryption</b><br />
                    <span className={Styles.contentSpan}>This site uses SSL encryption for security reasons and to protect the transmission of confidential content, such as the requests that you send to us as the site operator. You can recognize an encrypted connection by the browser address line changing from “http://” to “https://” and by the lock symbol in your browser line. 
                        If SSL encryption is activated, the data that you submit, for example via the contact form, cannot be read by third parties.</span>
                </p>
                <p className={Styles.content}>
                    <b>Collection, processing and transfer of personal data when commissioned</b><br />
                    <span className={Styles.contentSpan}>When ordering our service, we only collect and process personal data to the extent that this is necessary to fulfill and process the order and to process the request. 
                        The provision of the data is necessary for the conclusion of the contract or for the execution of the order. Failure to provide it will result in no contract being concluded. The processing is carried out on the basis of Article 6 Paragraph 1 Letter b GDPR and is necessary for the fulfillment of the contract with you. Your data will only be passed on if there is a legal obligation and as part of contractually regulated processes. 
                        In all cases we strictly observe the legal requirements. The amount of data transmission is limited to a minimum. </span>
                </p>
                <p className={Styles.content}>
                    <b>Types of data processed</b><br />
                    <ul className={Styles.contentList1}>
                        <li>– Inventory data (e.g. personal master data, names or addresses).</li>
                        <li>– Contact details (e.g., email, telephone numbers).</li>
                        <li>– Content data (e.g., text entries, photographs, videos).</li>
                        <li>– Usage data (e.g., websites visited, interest in content, access times).</li>
                        <li>– Meta/communication data (e.g., device information, IP addresses). </li>
                    </ul>
                </p>
                <p className={Styles.content}>
                    <b>Contact</b><br />
                    <span className={Styles.contentSpan}>When contacting us (e.g. by email, telephone, contact form or via social media), the {"user's"} information, including all resulting personal data (name, email address), is used to process the contact request and process it in accordance with Art. 6 Paragraph 1 Letter b. (as part of contractual/pre-contractual relationships), Art. 6 Para. 1 lit. f. GDPR (other inquiries). User information can be stored in a system-supported environment (e.g. patient management system) or comparable applications. We delete the requests if they are no longer necessary. The necessity is checked regularly. The statutory archiving and storage obligations also apply. 
                        Requests that are not relevant or do not need to be saved will be deleted. This also applies to unsolicited applications and advertising. </span>
                </p>
                <p className={Styles.content}>
                    <b>Inquiries by email, telephone or fax</b><br />
                    <span className={Styles.contentSpan}>If you contact us by email or telephone, your request, including all resulting personal data (name, request), 
                        will be stored and processed by us for the purpose of processing your request. We will not pass on this data without your consent.</span>
                </p>
                <p className={Styles.content}>This data is processed on the basis of Art. 6 Para. 1 lit. b GDPR, provided your request is related to the fulfillment of a contract or is necessary to carry out pre-contractual measures. In all other cases, the processing is based on your consent (Art. 6 Para. 1 lit. a GDPR) and/or on our legitimate interest (Art. 6 Para. 1 lit. f GDPR), as we are very interested in the effective processing of the data inquiries addressed to us. Treatment-relevant information and diagnoses are provided for the purpose of providing our service on the basis of Article 9 Paragraph 2 lit h. GDPR processed. In this context and when billing our services vs. Carriers also have to pass on the information to insurance carriers,
                 health insurance companies, nursing care funds, etc. This is always under the aspect of necessity and conformity. </p>
                <p className={Styles.content}>
                    <b>Safety measures</b><br />
                    <span className={Styles.contentSpan}>We take appropriate technical and organizational measures in accordance with the legal requirements, taking into account the state of the art, the implementation costs and the type, scope, circumstances and purposes of the processing as well as the different probability of
                         occurrence and severity of the risk for the rights and freedoms of natural persons Measures (TOM) to ensure a level of protection appropriate to the risk.</span>
                </p>
                <p className={Styles.content}>The measures include, in particular, ensuring the confidentiality, integrity and availability of data by controlling physical access to the data, as well as the access, input, distribution, ensuring availability and its separation. 
                Furthermore, procedures have been set up to ensure that the rights of those affected are exercised, data are deleted and data are at risk. Furthermore, we take the protection of personal data into account when developing or selecting hardware, software and processes, in accordance with the principle of data protection through technology design and through data protection-friendly default settings. 
                Here in particular our online offer and the information compiled here. System and process GoBD conformity is also taken into account.</p>
                <p className={Styles.content}>
                    <b>Collaboration with processors, joint controllers and third parties</b><br />
                    <span className={Styles.contentSpan}>If, as part of our processing, we disclose data to other people and companies (processors, joint controllers or third parties), transfer it to them or otherwise grant them access to the data, this will only be done on the basis of legal permission.</span>
                </p>
                <p className={Styles.content}>We ensure that collaborations with business partners and service providers are either regulated by an order processing agreement or a declaration of commitment to confidentiality and compliance with data and business secrecy has been concluded. When we share responsibility, we ensure that our business partners are also committed to data protection.</p>
                <p className={Styles.content}>
                    <b>Transfers to third countries</b><br />
                    <span className={Styles.contentSpan}>If data is processed in a third country (i.e. countries outside the European Union) or if this occurs as part of the use of third-party services (software, applications, etc.), this only occurs if it is necessary to fulfill our (pre-)contractual obligations, or we have given your consent to do so. Subject to legal or contractual permissions, we only process or have the data processed in a third country if the legal requirements are met. 
                        This means that processing takes place, for example, on the basis of special guarantees or compliance with officially recognized, special contractual obligations. The EU standard contractual clauses that will become binding in 2021 are our benchmark here. providers from third countries.</span>
                </p>
                <p className={Styles.content}><b>Cookie banner and cookie notice (insufficient or not up to date!)</b></p>
                <p className={Styles.content}>
                    <b>The site visitor must have the opportunity to choose (yes|no|customize) - the cookie banner from User-Centrics is recommended here - please check</b><br />
                    <span className={Styles.contentSpan}>According to the current ruling by the Federal Court of Justice, an active cookie banner is required if cookies (of whatever type) are used. Our website uses Borlabs {"Cookie's"} cookie consent technology to obtain your consent to store certain cookies in your browser and to document them in accordance with data protection regulations. 
                        The provider of this technology is Borlabs – Benjamin A. Bornschein, Georg-Wilhelm-Str. 17, 21107 Hamburg (hereinafter Borlabs)</span>
                </p>
                <p className={Styles.content}>When you enter our website, a Borlabs cookie is stored in your browser in which the consent you have given or the revocation of this consent is stored. This data is not passed on to the provider of Borlabs Cookie.</p>
                <p className={Styles.content}>The data collected will be stored until you request us to delete it or delete the Borlabs cookie yourself or the purpose for data storage no longer applies. Mandatory statutory retention periods remain unaffected. Details on the data processing of Borlabs Cookie can be found at <a href="https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie/" className={Styles.ProtectionLinks}>https://de.borlabs.io/kb/welche-daten-speichert-borlabs-cookie</a></p>
                <p className={Styles.content}>The Borlabs cookie consent technology is used to obtain the legally required consent for the use of cookies. The legal basis for this is Article 6 Paragraph 1 Sentence 1 Letter c GDPR. </p>
                <p className={Styles.content}>
                    <b>Note on deactivating or deleting cookies</b><br />
                    <span className={Styles.contentSpan}>Every user can set their web browser so that the storage of cookies on their device is generally prevented or they are asked each time whether they agree to the setting of cookies. Once cookies have been set, the user can delete them at any time. How the whole thing works is described in the help function of the respective web browser.</span>
                </p>
                <p className={Styles.content}>Please note: a general deactivation of cookies may lead to functional restrictions on websites. </p>
                <p className={Styles.content}>
                    <b>Right to object to direct advertising</b><br />
                    <span className={Styles.contentSpan}>A <u>general objection</u> to the use of cookies used for online marketing purposes can be made for a large number of services, especially in the case of tracking, via the US website <a href="https://www.aboutads.info/choices/" className={Styles.ProtectionLinks}>https://www.aboutads.info/choices/</a> or the EU website <a href="https://www.youronlinechoices.com/" className={Styles.ProtectionLinks}>https://www.youronlinechoices.com/</a> can be explained. Furthermore, the storage of cookies can be achieved by switching them off in the browser settings. Please note that functions on websites may then only be able to be used to a limited extent.</span>
                </p>
                <p className={Styles.content}>You can configure, block and delete cookies in your browser settings. The Federal Office for Information Security provides helpful information and instructions for common browsers: <a href="https://www.bsi-fuer-buerger.de/BSIFB/DE/Empkommenungen/EinrwirtungSoftware/EinrwirtungBrowser/sicherheitsmassnahme/Cookies/cookies_node.html" className={Styles.ProtectionLinks}> https://www.bsi-fuer-buerger.de/BSIFB/DE/Empkommenungen/EinrwirtungSoftware/EinrwirtungBrowser/sicherheitsmassnahme/Cookies/cookies_node.html</a></p>
                <p className={Styles.content}>
                    <b> Hosting and email delivery</b><br />
                    <span className={Styles.contentSpan}>The hosting services we use from our provider serve to provide the following services: infrastructure and platform services, computing capacity, storage space and database services, email delivery, security services and technical maintenance services, which we use for the purpose of operating this online offering.</span>
                </p>
                <p className={Styles.content}>In doing so, we, or our hosting provider, process inventory data, contact data, content data, contract data, usage data, meta and communication data from customers, interested parties and visitors to this online offering on the basis of our legitimate interest in the efficient and secure provision of this online offering in accordance with Art. 6 Para. 1 lit. f GDPR in conjunction with Art. 28 GDPR (conclusion of order processing contract).</p>
                <p className={Styles.content}>
                    <b>Data protection information in the application process</b><br />
                    <span className={Styles.contentSpan}>We process applicant data only for the purpose and as part of the application process in accordance with the legal requirements. The processing of applicant data takes place to fulfill our (pre-)contractual obligations as part of the application process within the meaning of Article 6 Paragraph 1 Letter b. GDPR and Art. 6 Para. 1 lit. f. GDPR if the data processing is necessary for us, for example in the context of legal proceedings (in Germany, Section 26 BDSG also applies).</span>
                </p>
                <p className={Styles.content}>The application process requires that applicants provide us with their applicant data. The necessary applicant data can be found in the job descriptions and basically includes personal information, postal and contact addresses and the documents associated with the application, such as a cover letter, CV and certificates. In addition, applicants can voluntarily provide us with additional information.</p>
                <p className={Styles.content}>By submitting their application to us, applicants agree to the processing of their data for the purposes of the application process in accordance with the type and scope set out in this data protection information.</p>
                <p className={Styles.content}>If special categories of personal data within the meaning of Art. 9 Para. 1 GDPR are voluntarily communicated as part of the application process, their processing will also take place in accordance with Art. 9 Para. 2 lit. b GDPR (e.g. health data, such as severely disabled status or ethnic origin). . If special categories of personal data within the meaning of Art. 9 Para. 
                1 GDPR are requested from applicants as part of the application process, their processing will also take place in accordance with Art. 9 Para. 2 lit. a GDPR (e.g. health data if this is necessary for the exercise of the profession are).</p>
                <p className={Styles.content}>Applicants can send us their applications via email. However, we ask you to note that emails are generally not sent encrypted and applicants must ensure encryption themselves. We cannot therefore assume any responsibility for the transmission path of the application between the sender and receipt on our server and therefore recommend using postal delivery. In this context, we ask that you only send us attachments in PDF format and that you adhere to a maximum file size of up to 10 MB.</p>
                <p className={Styles.content}>If the application is successful, the data provided by the applicants can be further processed by us for the purposes of the employment relationship. Otherwise, if the application for a job offer is not successful, the {"applicant's"} data will be deleted. {"Applicants'"} data will also be deleted if an application is withdrawn, which applicants are entitled to do at any time. If the application is sent by post, the documents will be returned to the {"applicant's"} postal address for our convenience.</p>
                <p className={Styles.content}>The deletion will take place, subject to a legitimate revocation by the applicant, after a period of six months has elapsed so that we can answer any follow-up questions about the application and meet our obligations to provide proof under the Equal Treatment Act. Invoices for any reimbursement of travel expenses are archived in accordance with tax law requirements.</p>
                <p className={Styles.content}>
                    <b>Tools and products on our website</b><br />
                    <span className={Styles.contentSpan}>In order to keep websites not only interesting and modern, but also safe, it is necessary to integrate specialized services into the website. Our website was created using the WordPress content management system. Below you will find an overview of the services and products we include on our site with brief explanations of how they work.</span>
                </p>
                <p className={Styles.content}>We have compiled this information to the best of our knowledge and belief and refer to the data protection guidelines/data protection declarations provided by the provider.</p>
                <p className={Styles.content}><b>Google products, applications and tools</b></p>
                <p className={Styles.content}>
                    <b>Google Analytics</b><br />
                    <span className={Styles.contentSpan}>We use Google Analytics, a web analysis service provided by Google Inc. 1600 Amphitheater Pkwy, Mountain View, CA 94043-1351, USA. (“Google”). Google Analytics uses so-called “cookies”, text files that are stored on your computer and that enable your use of the website to be analyzed. 
                        The information generated by the cookie about your use of this website is usually transmitted to a Google server in the USA and stored there. However, if IP anonymization is activated on this website, Google will first shorten your IP address within member states of the European Union or in other contracting states to the Agreement on the European Economic Area. Only in exceptional cases will the full IP address be transmitted to a Google server in the USA and shortened there. On behalf of the operator of this website, Google will use this information to evaluate your use of the website, to compile reports on website activity and to provide other services related to website activity and internet usage to the website operator. 
                        The IP address transmitted by your browser as part of Google Analytics is not combined with other Google data.</span>
                </p>
                <p className={Styles.content}>You can prevent the storage of cookies by setting your browser software accordingly. However, we would like to point out that in this case you may not be able to use all functions of this website to their full extent. You can also prevent Google from collecting the data generated by the cookie and relating to your use of the website (including your IP address) and from processing this data by Google by downloading the browser plug-in available under the following link and install. 
                As an alternative to the browser plug-in or within browsers on mobile devices, please click on the following link to set an opt-out cookie, which will prevent future collection by Google Analytics within this website 
                (this opt-out cookie only works in this browser and only for this domain, if you delete your cookies in this browser, you must click this link again):</p>
                <p className={Styles.content}>
                    <b>Deactivate Google Analytics</b><br />
                    <span>Further information and {"Google's"} data protection regulations can be found at:</span><br />
                    <span className={Styles.contentSpan}><a href="https://www.google.de/intl/de/policies/privacy/" className={Styles.ProtectionLinks}>https://www.google.de/intl/de/policies/privacy/</a></span><br />
                    <span className={Styles.contentSpan}><a href="http://www.google.com/analytics/terms/de.html" className={Styles.ProtectionLinks}>http://www.google.com/analytics/terms/de.html</a></span><br />
                    <span className={Styles.contentSpan}><a href="https://www.google.com/intl/de_de/analytics/" className={Styles.ProtectionLinks}>https://www.google.com/intl/de_de/analytics/</a></span>
                </p>
                <p className={Styles.content}>
                    <b>Google Fonts</b><br />
                    <span className={Styles.contentSpan}>We use Google Fonts on our pages. These are fonts that can be downloaded from {"Google's"} servers by your browser. This occurs without any further data being transmitted to Google other than your IP address and the desired font. About {"Google's"} use of your IP address for requests for fonts, please read {"Google's"} privacy policy. Further information about Google Web Fonts can be found at 
                        <a href="https://developers.google.com/fonts/faq" className={Styles.ProtectionLinks}>https://developers.google.com/fonts/faq</a>   and in {"Google's"} privacy policy: <a href="https://www.google.com/policies/privacy/" className={Styles.ProtectionLinks}>https://www.google.com/policies/privacy/</a></span>
                </p>
                <p className={Styles.content}>Provider: Google LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043, USA. Data protection declaration: https://www.google.com/policies/privacy/, opt-out: <a href="https://adssettings.google.com/authenticated" className={Styles.ProtectionLinks}>https://adssettings.google.com/authenticated</a></p>
                <p className={Styles.content}>
                    <b>Sumo plugin via WordPress</b><br />
                    <span className={Styles.contentSpan}>This plug-in supports the editing and design of our website, which was created in the WordPress environment. For example, our email registration form is supported here. This can also be used to create evaluations about the behavior of our site visitors. For more information, visit https://sumo.com/. The Sumo Group is based in Austin Texas. <a href="https://sumo.com/tos">https://sumo.com/tos</a></span>
                </p>
                <p className={Styles.content}>
                    <b>Video conferences/communication (online media)</b><br />
                    <span className={Styles.contentSpan}>In order to be able to communicate with our customers and business partners as personally as possible, even in special times and situations, we use the appropriate software solutions available if necessary to be able to offer telephone conferences, online meetings and video conferences.</span>
                </p>
                <p className={Styles.content}>In order to take part in “online meetings” or enter a “meeting room”, you may need to. asked to at least provide information about your name. This is so that the moderator can grant you access. Anonymous participation is often also possible.</p>
                <p className={Styles.content}>Personal data processed in connection with participation in “online meetings” will generally not be passed on to third parties unless they are specifically intended to be passed on. Please note that content from “online meetings” as well as personal meetings are often used to communicate information with customers, interested parties or third parties and are therefore intended to be passed on.</p>
                <p className={Styles.content}>Meeting metadata: topic, description (optional), participant IP addresses, device/hardware information. For recordings: MP4 file of all video, audio and presentation recordings,</p>
                <p className={Styles.content}>M4A file of all audio recordings, text file of online meeting chat.</p>
                <p className={Styles.content}>Other recipients: The provider of the online conference necessarily receives knowledge of the above-mentioned data. It should be noted that, depending on the provider, data may be processed outside the European Union. If the service is provided by a provider from the USA, the personal data is usually processed in a third country.</p>
                <p className={Styles.content}>
                    <b>Online presence in social media</b><br />
                    <span className={Styles.contentSpan}>We maintain online presences within social networks and platforms in order to be able to communicate with customers, interested parties and users who are active there and inform them about our services.</span>
                </p>
                <p className={Styles.content}>We would like to point out that user data may be processed outside the European Union. This can result in risks for users because, for example, it could make it more difficult to enforce {"users'"} rights.</p>
                <p className={Styles.content}>Furthermore, user data is usually processed for market research and advertising purposes. For example, usage profiles can be created based on user behavior and the resulting interests of the user. The usage profiles can in turn be used, for example, to place advertisements inside and outside the platforms that presumably correspond to the interests of the users. For these purposes, cookies are usually stored on the {"users'"} computers, 
                in which the usage behavior and interests of the users are stored. Furthermore, data can also be stored in the usage profiles regardless of the devices used by the users (particularly if the users are members of the respective platforms and are logged in to them).</p>
                <p className={Styles.content}>The processing of {"users'"} personal data is based on our legitimate interests in effectively informing users and communicating with users in accordance with Article 6 Paragraph 1 Letter f of the GDPR. If the users are asked by the respective platform providers for their consent to the data processing described above, the legal basis for the processing is Article 6 Paragraph 1 Letter a., Article 7 GDPR.</p>
                <p className={Styles.content}>For a detailed description of the respective processing and the objection options (opt-out), we refer to the information provided by the providers linked below.</p>
                <p className={Styles.content}>Even in the case of requests for information and the assertion of user rights, we would like to point out that these can most effectively be asserted with the providers. Only the providers have access to user data and can take appropriate measures and provide information directly. If you still need help, you can contact us.</p>
                <p className={Styles.content}>
                    <b>Facebook </b>
                    <span className={Styles.contentSpan}>, pages, groups, (Facebook Ireland Ltd., 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Ireland) on the basis of an agreement on joint processing of personal data - data protection declaration: <a href="https://www.facebook.com/about/privacy/" className={Styles.ProtectionLinks}>https://www.facebook.com/about/privacy/</a> , especially for pages: 
                    <a href="https://www.facebook.com/legal/terms/information_about_page_insights_data" className={Styles.ProtectionLinks}>https://www.facebook.com/legal/terms/information_about_page_insights_data</a> , opt-out: https://www.facebook.com/settings?tab=ads and <a href="http://www.youronlinechoices.com" className={Styles.ProtectionLinks}>http://www.youronlinechoices.com</a> .</span>
                </p>
                <p className={Styles.content}><b>We also have a company page (fan page) on Facebook. Here you will find a separate data protection declaration.</b></p>
                <p className={Styles.content}>
                    <b>Google/YouTube</b> 
                    <span className={Styles.contentSpan}>(Google LLC, 1600 Amphitheater Parkway, Mountain View, CA 94043, USA) – Data protection declaration: https://policies.google.com/privacy, Opt-Out: <a href="https://adssettings.google.com/authenticated" className={Styles.ProtectionLinks}>https://adssettings.google.com/authenticated</a></span>
                </p>
                <p className={Styles.content}>
                    <b>Instagram</b> 
                    <span className={Styles.contentSpan}>(Instagram Inc., 1601 Willow Road, Menlo Park, CA, 94025, USA) – Privacy Policy/Opt-Out: <a href="http://instagram.com/about/legal/privacy/" className={Styles.ProtectionLinks}>http://instagram.com/about/legal/privacy/</a> .</span>
                </p>
                <p className={Styles.content}>
                    <b>Objection to advertising emails</b><br />
                    <span className={Styles.contentSpan}>The use of our contact details published as part of the imprint obligation to send unsolicited advertising and information materials is hereby objected to. As the site operator of the pages offered, we expressly reserve the right to take legal action in the event of unsolicited advertising information being sent, such as spam emails.</span>
                </p>
                <p className={Styles.content}>
                    <b>Changes and updates to the privacy policy</b><br />
                    <span className={Styles.contentSpan}>Please inform yourself regularly about the content of this data protection information. These are updated as soon as changes to the data processing we carry out make this necessary or legal requirements require this.</span>
                </p>
                <p className={Styles.content}><b>As of 08/2021</b></p>
            </div>
        </section>

        </main>
    );
}