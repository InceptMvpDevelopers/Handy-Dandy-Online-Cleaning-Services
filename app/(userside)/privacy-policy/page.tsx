import React from 'react'
import PrivacyPolicytext from '@/components/PrivacyPolicyText'

export default function page() {
  return (
    <div className='p-12 gap-5 flex flex-col'>
        <PrivacyPolicytext title={"PRIVACY POLICY"}/>
<div className="space-y-6 text-[#282828] text-base leading-relaxed">
  <p className="italic text-sm">Effective Date: March 3, 2025</p>

  <p>
    At <strong>HandyDandy.ae</strong>, we value your privacy and are committed to protecting your personal data.
    This Privacy Policy explains how we collect, use, and safeguard your information when you use our services.
  </p>

  <h2 className="text-xl font-semibold mt-4">1. Information We Collect</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Personal Information:</strong> Name, email, phone number, and address.
    </li>
    <li>
      <strong>Payment Information:</strong> Securely processed through encrypted third-party payment providers.
    </li>
    <li>
      <strong>Usage Data:</strong> Information on how you interact with our website and app.
    </li>
  </ul>

  <h2 className="text-xl font-semibold mt-4">2. How We Use Your Information</h2>
  <p>We use your information to:</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Provide and Improve Our Services:</strong> Ensuring the best experience for all our services.
    </li>
    <li>
      <strong>Process Payments Securely:</strong> No financial data is stored on our servers.
    </li>
    <li>
      <strong>Send Updates & Promotions:</strong> Keeping you informed about offers and new features.
    </li>
    <li>
      <strong>Enhance Customer Support:</strong> Quick resolution of inquiries and requests.
    </li>
  </ul>

  <h2 className="text-xl font-semibold mt-4">3. How We Protect Your Data</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>SSL Encryption:</strong> For secure data transmission.
    </li>
    <li>
      <strong>Strict Access Controls:</strong> Only authorized personnel can access your data.
    </li>
    <li>
      <strong>Third-Party Compliance:</strong> We work with trusted, GDPR-compliant providers.
    </li>
  </ul>

  <h2 className="text-xl font-semibold mt-4">4. Sharing of Information</h2>
  <p>We do not sell or rent your personal data.</p>
  <p>However, we may share it with:</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Service Providers:</strong> To facilitate services and payment processing.
    </li>
    <li>
      <strong>Legal Authorities:</strong> If required by law or to protect our rights.
    </li>
  </ul>

  <h2 className="text-xl font-semibold mt-4">5. Cookies & Tracking</h2>
  <p>
    We use cookies to enhance your browsing experience. You can manage or disable cookies through your browser settings.
  </p>

  <h2 className="text-xl font-semibold mt-4">6. Your Rights</h2>
  <p>You have the right to:</p>
  <ul className="list-disc pl-6 space-y-2">
    <li>
      <strong>Access Your Data:</strong> Request a copy of your stored information.
    </li>
    <li>
      <strong>Update or Delete Data:</strong> Modify or request deletion of personal details.
    </li>
    <li>
      <strong>Opt-Out of Marketing:</strong> Unsubscribe from promotional emails anytime.
    </li>
  </ul>

  <h2 className="text-xl font-semibold mt-4">7. Changes to This Policy</h2>
  <p>
    We may update this Privacy Policy periodically. Any changes will be communicated via email or website updates.
  </p>

  <h2 className="text-xl font-semibold mt-4">8. Need Assistance?</h2>
  <p>
    Contact us at <a href="mailto:hello@handydandy.ae" className="underline">hello@handydandy.ae</a> for privacy-related inquiries.
  </p>

  <p className="italic text-sm">📅 Last Updated: March 3, 2025</p>
</div>


    </div>
  )
}
