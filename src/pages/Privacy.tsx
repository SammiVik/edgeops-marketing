import LegalLayout from '../components/LegalLayout'

export default function Privacy() {
  return (
    <LegalLayout title="Privacy Policy" effectiveDate="15 March 2026">

      <h2>1. Introduction</h2>
      <p>EdgeOps is a SaaS platform designed for scaffolding trade businesses, providing job scheduling, workforce management, and real-time reporting. EdgeOps is operated by Edge Ops (ABN registered), a sole trader based in Australia.</p>
      <p>This Privacy Policy explains how we collect, use, store, and protect personal information when you use our platform at <a href="https://app.edgeops.com.au">app.edgeops.com.au</a> or our marketing website at <a href="https://edgeops.com.au">edgeops.com.au</a>. We are committed to handling personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).</p>

      <h2>2. Who We Collect Information From</h2>
      <p>EdgeOps is a business-to-business (B2B) platform. We collect information from:</p>
      <ul>
        <li>Authorised representatives of scaffolding businesses who sign up for or trial the platform</li>
        <li>Operations managers and staff who are granted access by the account holder</li>
        <li>Visitors to our marketing website</li>
      </ul>

      <h2>3. What Personal Information We Collect</h2>

      <h3>3.1 Account & Contact Information</h3>
      <ul>
        <li>Full name</li>
        <li>Business email address</li>
        <li>Phone number (including mobile numbers for SMS notifications)</li>
      </ul>

      <h3>3.2 Business Information</h3>
      <ul>
        <li>Business name</li>
        <li>Australian Business Number (ABN)</li>
        <li>Business address and contact details</li>
      </ul>

      <h3>3.3 Payment Information</h3>
      <p>We collect payment-related information to process subscriptions. Payment card details are collected and processed directly by Stripe, Inc. EdgeOps does not store full card numbers or CVV codes on our systems. We retain transaction records and billing history associated with your account.</p>

      <h3>3.4 Usage & Technical Data</h3>
      <ul>
        <li>Log data (IP addresses, browser type, pages visited, timestamps)</li>
        <li>Error and crash data collected via Sentry for platform stability</li>
        <li>Feature usage data to improve the platform</li>
      </ul>

      <h2>4. How We Collect Information</h2>
      <p>We collect information:</p>
      <ul>
        <li>Directly from you when you register, set up your account, or contact us</li>
        <li>Automatically when you use the platform (usage data, logs)</li>
        <li>From third-party services integrated with your account (e.g. Stripe for payments, Twilio for SMS)</li>
      </ul>

      <h2>5. Why We Collect and Use Your Information</h2>
      <p>We use your personal information to:</p>
      <ul>
        <li>Create and manage your EdgeOps account</li>
        <li>Provide the platform's core features including job scheduling, workforce management, and reporting</li>
        <li>Process your subscription payments via Stripe</li>
        <li>Send transactional SMS notifications via Twilio (e.g. job updates, crew alerts)</li>
        <li>Send account-related emails via Resend (e.g. invoices, product updates, onboarding)</li>
        <li>Monitor platform performance and diagnose errors via Sentry</li>
        <li>Comply with our legal obligations</li>
        <li>Communicate with you about your account, support requests, or product changes</li>
      </ul>

      <h2>6. Data Storage & Security</h2>
      <p>Your data is stored on Supabase, our database and authentication provider. Data may be stored on infrastructure outside Australia. We take reasonable steps to protect your personal information from misuse, interference, loss, and unauthorised access through:</p>
      <ul>
        <li>Encrypted data transmission (HTTPS/TLS)</li>
        <li>Row-level security policies on our database</li>
        <li>Access controls limiting staff access to personal data</li>
        <li>Error monitoring to detect and respond to security incidents</li>
      </ul>
      <p>While we implement strong safeguards, no method of electronic transmission or storage is 100% secure.</p>

      <h2>7. Disclosure of Personal Information</h2>
      <p>We do not sell your personal information. We may disclose it to the following third parties to operate our platform:</p>
      <ul>
        <li>Stripe, Inc. — payment processing</li>
        <li>Twilio Inc. — SMS delivery</li>
        <li>Resend — transactional email delivery</li>
        <li>Supabase Inc. — database hosting and authentication</li>
        <li>Sentry — error monitoring</li>
        <li>Vercel — website and application hosting</li>
      </ul>
      <p>These providers are engaged to help us deliver the platform and are not permitted to use your information for their own purposes beyond providing their services to us.</p>
      <p>We may also disclose personal information if required by law, a court order, or in connection with legal proceedings.</p>

      <h2>8. Your Rights</h2>
      <p>Under the Australian Privacy Principles, you have the right to:</p>
      <ul>
        <li>Request access to the personal information we hold about you</li>
        <li>Request correction of inaccurate or outdated information</li>
        <li>Request deletion of your personal information (subject to legal and contractual obligations)</li>
        <li>Opt out of marketing communications at any time</li>
      </ul>
      <p>To exercise any of these rights, contact us at <a href="mailto:sammi@edgeops.com.au">sammi@edgeops.com.au</a>.</p>

      <h2>9. Cookies & Tracking</h2>
      <p>Our website may use cookies and similar technologies to improve your experience and collect usage data. You can configure your browser to refuse cookies, though this may affect platform functionality. We use analytics tools solely to understand platform usage and improve our product — we do not use advertising cookies or sell data to advertisers.</p>

      <h2>10. Retention</h2>
      <p>We retain personal information for as long as your account is active or as needed to provide our services. We may retain certain information after account closure to comply with legal obligations, resolve disputes, or enforce our agreements. You may request deletion of your data by contacting us directly.</p>

      <h2>11. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. We will notify you of material changes by email or via an in-app notification. Continued use of EdgeOps after changes are published constitutes acceptance of the updated policy.</p>

      <h2>12. Contact Us</h2>
      <p>If you have questions about this Privacy Policy or wish to make a privacy complaint, please contact:</p>
      <p>Edge Ops<br />
      Email: <a href="mailto:sammi@edgeops.com.au">sammi@edgeops.com.au</a><br />
      Website: <a href="https://edgeops.com.au">edgeops.com.au</a></p>
      <p>If you are not satisfied with our response, you may contact the Office of the Australian Information Commissioner (OAIC) at <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer">www.oaic.gov.au</a>.</p>

    </LegalLayout>
  )
}
