import LegalLayout, { H2, P, Bullets } from '../components/LegalLayout';

export default function Cookies() {
  return (
    <LegalLayout title="Cookie Policy" lastUpdated="May 21, 2026">
      <P>
        This Cookie Policy explains how <strong>CIFusion.ai</strong> ("we," "us," or "our"), operated
        by <strong>Allegiant InfoTech</strong>, uses cookies and similar technologies on our website
        (cifusion.ai) and platform (app.cifusion.ai). It should be read together with our Privacy
        Policy.
      </P>

      <H2>What Are Cookies?</H2>
      <P>
        Cookies are small text files placed on your device when you visit a website. Similar
        technologies — such as local storage and session storage — let a site remember information
        between pages or visits. We use the term "cookies" to cover all of these.
      </P>

      <H2>How We Use Them</H2>
      <P>We keep our use of cookies deliberately minimal. We use them for the following purposes:</P>
      <Bullets
        items={[
          <>
            <strong>Strictly necessary.</strong> Required for the site and platform to work — for
            example, keeping you signed in, maintaining your session securely, and remembering choices
            needed to deliver a page you requested. These cannot be turned off without breaking core
            functionality.
          </>,
          <>
            <strong>Functional and preferences.</strong> Used to remember settings that improve your
            experience, such as your light/dark theme preference and whether you have already seen our
            intro animation. These are not strictly required, but the site works better with them.
          </>,
          <>
            <strong>Analytics (if enabled).</strong> We may use privacy-conscious analytics to
            understand how visitors use our site — for example, which pages are most visited — so we
            can improve it. These help us measure performance in aggregate and are not used to build
            advertising profiles.
          </>,
        ]}
      />
      <P>
        We do <strong>not</strong> use cookies for third-party advertising, and we do not sell
        information collected through cookies.
      </P>

      <H2>Third-Party Cookies</H2>
      <P>
        Some cookies may be set by the trusted providers we use to run the Services (such as our
        hosting, authentication, and monitoring vendors). These are used to deliver and secure the
        Services. For the list of providers we work with, see the sub-processors described in our
        Privacy Policy.
      </P>

      <H2>Managing Cookies</H2>
      <P>
        Most browsers let you view, block, and delete cookies through their settings. You can usually
        choose to be notified before a cookie is stored, or to refuse cookies entirely. Note that
        blocking strictly necessary cookies may prevent parts of the site or platform from working.
      </P>
      <P>
        We do not currently respond to browser "Do Not Track" signals, as there is no common standard
        for how to interpret them.
      </P>

      <H2>Changes to This Policy</H2>
      <P>
        We may update this Cookie Policy from time to time. The updated version is effective when
        posted, and we will revise the "Last updated" date above.
      </P>

      <H2>Contact Us</H2>
      <P>
        Questions about our use of cookies: <strong>CIFusion.ai — Allegiant InfoTech</strong>, email{' '}
        <strong>privacy@cifusion.ai</strong>.
      </P>
    </LegalLayout>
  );
}
