import LegalLayout, { H2, P, Bullets } from '../components/LegalLayout';

export default function Terms() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="May 21, 2026">
      <P>
        These Terms of Service ("Terms") govern your access to and use of the continuous improvement
        and Lean Six Sigma platform at app.cifusion.ai, the website at cifusion.ai, and related
        services (collectively, the "Services"), provided by <strong>CIFusion.ai</strong>, operated by{' '}
        <strong>Allegiant InfoTech</strong> ("CIFusion," "we," "us," or "our"). By accessing or using
        the Services, or by signing an order or agreement that references these Terms, you ("you" or
        "Customer") agree to be bound by them. If you are using the Services on behalf of an
        organization, you represent that you have authority to bind that organization.
      </P>

      <H2>1. The Services</H2>
      <P>
        Subject to these Terms and any applicable order, we grant you a non-exclusive,
        non-transferable right to access and use the Services during your subscription term, solely
        for your internal business purposes. We may update, improve, or modify the Services from time
        to time. Certain features may depend on third-party services, and their availability is not
        guaranteed.
      </P>

      <H2>2. Accounts and Eligibility</H2>
      <P>
        To use most features you must create an account or be granted access by your organization's
        administrator. You are responsible for maintaining the confidentiality of your credentials and
        for all activity under your account. You must promptly notify us of any unauthorized use. The
        Services are intended for business use by individuals who are at least 18 years old.
      </P>

      <H2>3. Acceptable Use</H2>
      <P>You agree not to, and not to permit others to:</P>
      <Bullets
        items={[
          'Use the Services in violation of any applicable law or regulation;',
          'Upload or transmit malicious code, or attempt to gain unauthorized access to the Services or related systems;',
          'Interfere with or disrupt the integrity or performance of the Services;',
          'Reverse engineer, copy, or create derivative works of the Services, except as permitted by law;',
          'Resell, sublicense, or make the Services available to third parties outside your organization without our consent; or',
          'Use the Services to store or transmit content that is unlawful, infringing, or harmful.',
        ]}
      />

      <H2>4. Customer Data and Ownership</H2>
      <P>
        As between you and us, you retain all rights to the data you and your users submit to the
        Services ("Customer Data"). You grant us a limited license to host, process, and use Customer
        Data solely to provide and improve the Services and as described in our Privacy Policy and
        Data Processing Addendum. You are responsible for the accuracy and legality of Customer Data
        and for having the necessary rights to submit it.
      </P>

      <H2>5. Artificial Intelligence Features</H2>
      <P>
        The Services include AI-powered features that generate outputs such as analyses,
        recommendations, and coaching ("AI Outputs"). AI Outputs are generated automatically and may
        contain errors or omissions. They are provided to support — not replace — your own judgment,
        and you are responsible for reviewing and validating any AI Output before relying on it. We do
        not warrant that AI Outputs are accurate, complete, or fit for any particular purpose.
      </P>

      <H2>6. Fees and Payment</H2>
      <P>
        Fees for the Services are set out in your applicable order or subscription plan. Unless stated
        otherwise, fees are payable in advance, are non-refundable except as required by law, and are
        exclusive of taxes. We may suspend access for non-payment after reasonable notice. We may
        change pricing for future terms with advance notice.
      </P>

      <H2>7. Term, Suspension, and Termination</H2>
      <P>
        These Terms apply for as long as you use the Services. Either party may terminate a
        subscription as set out in the applicable order, or for material breach that remains uncured
        after reasonable notice. We may suspend or terminate access if we reasonably believe your use
        poses a security risk, violates these Terms, or violates law. Upon termination, your right to
        use the Services ends, and we will make Customer Data available for export for a limited period
        before deletion, consistent with our data retention practices.
      </P>

      <H2>8. Intellectual Property</H2>
      <P>
        We and our licensors own all rights, title, and interest in the Services, including all
        software, content, and trademarks, excluding Customer Data. No rights are granted except as
        expressly set out in these Terms. If you provide feedback or suggestions, you grant us a
        perpetual, royalty-free license to use them without restriction.
      </P>

      <H2>9. Confidentiality</H2>
      <P>
        Each party may receive confidential information from the other. The receiving party will
        protect such information with reasonable care, use it only to perform under these Terms, and
        not disclose it except to those who need to know and are bound by similar obligations. This
        does not apply to information that is public, independently developed, or rightfully obtained
        from a third party.
      </P>

      <H2>10. Disclaimers</H2>
      <P>
        THE SERVICES AND ALL AI OUTPUTS ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF
        ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF
        MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. We do not warrant that
        the Services will be uninterrupted, error-free, or secure, or that results obtained from the
        Services will meet your requirements.
      </P>

      <H2>11. Limitation of Liability</H2>
      <P>
        TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE LIABLE FOR ANY INDIRECT,
        INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR FOR LOST PROFITS, REVENUE, OR DATA,
        ARISING OUT OF OR RELATING TO THESE TERMS OR THE SERVICES. Each party's total aggregate
        liability arising out of or relating to these Terms will not exceed the amounts you paid to us
        for the Services in the twelve (12) months preceding the event giving rise to the claim. These
        limitations do not apply to liability that cannot be limited under applicable law.
      </P>

      <H2>12. Indemnification</H2>
      <P>
        You agree to defend and indemnify us against third-party claims arising from your Customer
        Data, your use of the Services in violation of these Terms, or your violation of applicable
        law, except to the extent caused by our own breach of these Terms.
      </P>

      <H2>13. Changes to the Services or Terms</H2>
      <P>
        We may update these Terms from time to time. The updated version is effective when posted, and
        we will revise the "Last updated" date above. For material changes, we will provide reasonable
        notice. Your continued use of the Services after changes take effect constitutes acceptance.
      </P>

      <H2>14. Governing Law and Disputes</H2>
      <P>
        These Terms are governed by the laws of the State of New Jersey, United States, without regard
        to its conflict-of-law principles. The parties agree to the exclusive jurisdiction of the
        state and federal courts located in New Jersey for any dispute that cannot be resolved
        informally, except that either party may seek injunctive relief in any court of competent
        jurisdiction.
      </P>

      <H2>15. Contact Us</H2>
      <P>
        Questions about these Terms: <strong>CIFusion.ai — Allegiant InfoTech</strong>, email{' '}
        <strong>legal@cifusion.ai</strong>.
      </P>
    </LegalLayout>
  );
}
