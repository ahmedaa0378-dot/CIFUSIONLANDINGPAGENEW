import LegalLayout, { H2, P, Bullets } from '../components/LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="May 21, 2026">
      <P>
        This Privacy Policy explains how <strong>CIFusion.ai</strong>, operated by{' '}
        <strong>Allegiant InfoTech</strong> ("CIFusion," "we," "us," or "our"), handles personal
        data in connection with our continuous improvement and Lean Six Sigma platform at
        app.cifusion.ai, our website at cifusion.ai, and related services (collectively, the
        "Services").
      </P>
      <P>We handle personal data in two distinct roles, and the difference matters:</P>
      <Bullets
        items={[
          <>
            <strong>As a processor</strong> — When our business customers (the organizations that
            license CIFusion for their teams) put data into the platform, we process that data on
            their behalf and under their instructions. This is <strong>Customer Data</strong> (for
            example, improvement ideas, project records, and information about an organization's own
            employees). If you use CIFusion through your employer, that employer controls this data —
            direct any requests to your organization's CIFusion administrator. Customer Data is
            governed by our agreement and Data Processing Addendum with the customer, not by this
            policy.
          </>,
          <>
            <strong>As a controller</strong> — For data we collect for our own purposes, this policy
            describes our practices directly. This covers <strong>Account Data</strong> (billing
            contacts, administrators, and authorized users we deal with about a CIFusion account) and{' '}
            <strong>Prospect Data</strong> (visitors to our website and people who contact us, request
            a demo, or otherwise engage with our marketing).
          </>,
        ]}
      />
      <P>You are not required to provide personal data, but some features won't work without it.</P>

      <H2>1. Information We Collect</H2>
      <P>
        <strong>Information you provide.</strong> Your name, work email, company, job title, phone
        number, and any details you submit through demo requests, contact forms, support tickets, or
        account setup. For customers, this includes billing and contractual contact details.
      </P>
      <P>
        <strong>Account and authentication data.</strong> Login credentials, or — where your
        organization uses single sign-on — the identity information passed to us by your identity
        provider (such as Microsoft Entra ID).
      </P>
      <P>
        <strong>Usage and device data.</strong> Collected automatically when you use the Services: IP
        address and approximate location derived from it, browser and device type, pages viewed,
        features used, and activity logs. This helps us operate, secure, and improve the Services.
      </P>
      <P>
        <strong>Communications.</strong> The contents of messages, support requests, and feedback you
        send us, including survey responses and testimonials.
      </P>
      <P>
        For purposes of the California Consumer Privacy Act ("CCPA"), the categories of personal
        information we collect are: identifiers, professional or employment-related information,
        internet/network activity information, and geolocation information. We do not collect or
        process sensitive personal information as defined by the CCPA, and we do not sell personal
        information.
      </P>

      <H2>2. How We Use Information</H2>
      <P>We use personal data to:</P>
      <Bullets
        items={[
          'Provide, operate, secure, and improve the Services;',
          'Set up and manage accounts, authenticate users, and process payments;',
          'Respond to demo requests, support tickets, and inquiries;',
          'Send service-related messages (account notices, security alerts, billing) — you cannot opt out of these while you have an account;',
          'Send marketing communications about features and offerings, which you can opt out of at any time;',
          'Understand how the Services are used so we can improve them;',
          'Detect, prevent, and address fraud, abuse, and security issues; and',
          'Comply with our legal obligations.',
        ]}
      />
      <P>
        Where required by law, our legal bases for processing are: performance of our contract with
        you, our legitimate interests in operating and improving the Services, your consent (which you
        may withdraw), and compliance with legal obligations.
      </P>

      <H2>3. Artificial Intelligence Features</H2>
      <P>
        CIFusion uses third-party AI providers (currently <strong>OpenAI</strong>) to power features
        such as AI analysis, methodology recommendations, and Lean Six Sigma coaching. When you use
        these features, the relevant content you submit is transmitted to the AI provider to generate
        a response and returned to you.
      </P>
      <P>
        Under our agreement with our AI provider, data submitted through their API is not used to
        train their general-purpose models and is retained only for limited periods to provide the
        service and monitor for abuse. We do not use your Customer Data to train any AI model of our
        own.
      </P>

      <H2>4. How We Share Information</H2>
      <P>We do not sell personal data. We share it only as described here:</P>
      <P>
        <strong>Service providers (sub-processors).</strong> We use trusted vendors to run the
        Services — including Supabase (database hosting), Vercel (application and website hosting),
        OpenAI (AI features), Resend (email delivery), Microsoft Azure (single sign-on), Sentry (error
        monitoring), and Better Stack (uptime monitoring). They may access personal data only as
        needed to perform their function and only under contract. Our sub-processors are primarily
        located in the United States.
      </P>
      <P>
        <strong>Within a customer organization.</strong> If you use CIFusion through an employer, your
        profile and activity may be visible to that organization's administrators and other authorized
        users, consistent with their configuration and role permissions.
      </P>
      <P>
        <strong>Legal and safety.</strong> We may disclose personal data if required by law, subpoena,
        or court order, or where we believe in good faith it is necessary to protect the rights,
        safety, or property of CIFusion, our users, or the public.
      </P>
      <P>
        <strong>Business transfers.</strong> If CIFusion or Allegiant InfoTech is involved in a
        merger, acquisition, or sale of assets, personal data may be transferred as part of that
        transaction. We will notify you of any change that materially affects your data.
      </P>

      <H2>5. Data Security</H2>
      <P>
        We use industry-standard administrative, technical, and physical safeguards to protect
        personal data, including encryption of data in transit and at rest; tenant isolation enforced
        at the database layer (row-level security), so one customer's data is not accessible to
        another; role-based access controls; and continuous error and uptime monitoring.
      </P>
      <P>
        We are currently undergoing a <strong>SOC 2 Type II audit</strong>. No system is perfectly
        secure, and we cannot guarantee absolute security, but we work continuously to protect your
        data.
      </P>

      <H2>6. Data Retention</H2>
      <P>
        We retain personal data for as long as needed to provide the Services, maintain our
        relationship with you, comply with legal and contractual obligations, resolve disputes, and
        enforce our agreements. Customer Data is retained and deleted according to our agreement with
        the relevant customer. Prospect and marketing data is kept only as long as needed for the
        purpose it was collected, and then deleted or anonymized.
      </P>

      <H2>7. Cookies and Tracking</H2>
      <P>
        Our website uses cookies and similar technologies that are necessary for the site to function
        and to understand how it is used. We do not respond to browser "Do Not Track" signals. Most
        browsers let you block or remove cookies. For details, see our Cookie Policy.
      </P>

      <H2>8. Your Privacy Rights</H2>
      <P>
        Depending on where you live, you may have the right to access, correct, delete, or obtain a
        copy of your personal data; to object to or restrict certain processing; and to opt out of
        marketing. California residents have rights under the CCPA, including the right to know,
        delete, and not be discriminated against for exercising those rights. Residents of the EEA or
        UK have rights under the GDPR, including the right to lodge a complaint with a supervisory
        authority.
      </P>
      <P>
        To exercise any of these rights, email us at <strong>privacy@cifusion.ai</strong>. We may need
        to verify your identity before acting on a request. If your data is held as part of an
        employer's account, we will direct your request to that organization's administrator, who
        controls the data.
      </P>

      <H2>9. International Users</H2>
      <P>
        CIFusion is operated from the United States, and our sub-processors are primarily located in
        the United States. If you access the Services from outside the US, your personal data will be
        transferred to and processed in the US, which may have data protection laws different from
        those in your country.
      </P>

      <H2>10. Children</H2>
      <P>
        The Services are intended for workplace use by adults and are not directed to children. We do
        not knowingly collect personal data from anyone under 18 (or under 16 for CCPA purposes). If
        you believe a child has provided us personal data, contact us at privacy@cifusion.ai and we
        will delete it.
      </P>

      <H2>11. Third-Party Links</H2>
      <P>
        The Services may link to or integrate with third-party sites and services. Their privacy
        practices are governed by their own policies, not this one. We encourage you to review them.
      </P>

      <H2>12. Changes to This Policy</H2>
      <P>
        We may update this Privacy Policy from time to time. The updated version will be effective
        when posted, and we will note the "Last updated" date above. For material changes, we will
        provide additional notice as appropriate.
      </P>

      <H2>13. Contact Us</H2>
      <P>
        Questions or concerns about this policy or your personal data:{' '}
        <strong>CIFusion.ai — Allegiant InfoTech</strong>, email <strong>privacy@cifusion.ai</strong>.
      </P>
    </LegalLayout>
  );
}
