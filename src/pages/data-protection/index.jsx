import React from "react";
import styles from "./DataProtection.module.css";
import { Typography } from "antd";

function DataProtection() {
  const { Title } = Typography;

  return (
    <div className={styles.container}>
      <div className={styles.pageHeader}>
        <Title>Data Protection</Title>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Liability for content</Title>
        <p>
          The contents of our pages were created with great care. However, we
          cannot guarantee that the content is correct, complete or up-to-date.
          As a service provider, we are responsible for our own content on these
          pages according to Section 7, Paragraph 1 of the German Telemedia Act
          (TMG). According to §§ 8 to 10 TMG, however, we as a service provider
          are not obliged to monitor transmitted or stored third-party
          information or to investigate circumstances that indicate illegal
          activity. Obligations to remove or block the use of information
          according to general laws remain unaffected. However, liability in
          this regard is only possible from the point in time at which knowledge
          of a specific infringement of the law is known. As soon as we become
          aware of any violations of the law, we will remove this content
          immediately.
        </p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>data protection</Title>
        <p>
          This data protection declaration applies to the processing of personal
          data of customers who place an order on one of the foodyfoody.de
          platforms. The person responsible for the processing of this personal
          data is FoodyFoody. FoodyFoody.de is responsible for the processing of
          this personal data and fully respects your privacy. Therefore,
          FoodyFoody.de follows the General Data Protection Regulation (GDPR)
          when processing personal data.
        </p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>What personal data do we process and why</Title>
        <p>
          FoodyFoody.de processes your personal data because you use our
          services. We use the following personal data for the following
          purposes.
        </p>
        <p>Ordering process</p>
        <p>
          We process the personal data that you provide to us when you place
          your order. This personal data is required to fulfill your order, to
          confirm your order and to evaluate your order, payment and possible
          refund. The legal basis for this processing of personal data is that
          it is necessary for the performance of a contract as defined in the
          GDPR. We process the following personal data in the ordering process:
        </p>
        <p>- Surname</p>
        <p>- Address data</p>
        <p>- Order</p>
        <p>- Payment details</p>
        <p>- Comments (if applicable)</p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>How long do we keep personal data</Title>
        <p>
          How long do we keep personal data FoodyFoody.de will not keep your
          personal data longer than is strictly necessary for the purposes for
          which your personal data is collected. We will only keep your personal
          data longer if we are required to do so by law. We delete your
          personal data immediately after you have received your order.
        </p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Disclosure to others</Title>
        <p>
          FoodyFoody.de will not sell your personally identifiable information
          to third parties, and we will only provide this information to third
          parties if this is necessary for the performance of our contract with
          you, for analytical and marketing purposes, or as necessary to comply
          with a legal obligation.
        </p>
        <p>Your personal data may be shared with the following parties:</p>
        <p>- Software provider</p>
        <p>- Implementation partner</p>
        <p>- Advertising platforms (e.g. Google and Facebook)</p>
        <p>
          Sobald wir Drittunternehmen mit der Verarbeitung Ihrer
          personenbezogenen Daten in unserem Namen beauftragen, werden wir einen
          Datenverarbeitungsvertrag abschließen, um dasselbe Niveau an Schutz
          und vertraulicher Behandlung Ihrer personenbezogenen Daten zu
          gewährleisten. FoodyFoody.de hat in diesem Fall weiterhin die
          letztendliche Verantwortung für solche Verarbeitungsaktivitäten.
        </p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Third Party Websites</Title>
        <p>
          Our website may contain links to third party websites. When accessing
          such third-party websites, remember that each of these websites has
          its own privacy statement. Although FoodyFoody.de takes great care in
          selecting websites for such links, we cannot be responsible for the
          handling of your personal data by the operators of these websites.
        </p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>
          Data protection declaration for the use of Google Analytics
        </Title>
        <p>
          This website uses Google Analytics, a web analytics service provided
          by Google Inc. "Google". Google Analytics uses so-called "cookies",
          text files that are stored on your computer and enable an analysis of
          your use of the website. The information generated by the cookie about
          your use of this website (including your IP address) is transmitted to
          a Google server in the USA and stored there. Google will use this
          information to evaluate your use of the website, to compile reports on
          website activity for website operators and to provide other services
          related to website activity and internet usage. Google may also
          transfer this information to third parties if required to do so by law
          or if third parties process this data on Google's behalf. Under no
          circumstances will Google associate your IP address with other data
          held by Google Inc. You can prevent the installation of cookies by
          setting your browser software accordingly; we would like to point out
          to you however that in this case you can if applicable not use all
          functions of this website in full. By using this website, you consent
          to the processing of data about you by Google in the manner and for
          the purposes set out above.
        </p>
      </div>
      <div className={styles.mt1}>
        <Title level={4}>Contact details</Title>
        <p>FoodyFoody Koblenz</p>
        <p>Loehrstrasse 60</p>
        <p>56068 Koblenz</p>
        <p>Email: info@foodyfoody.de</p>
      </div>
    </div>
  );
}

export default DataProtection;
