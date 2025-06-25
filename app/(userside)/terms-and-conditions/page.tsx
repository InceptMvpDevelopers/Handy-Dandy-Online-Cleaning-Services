import React from 'react'
import PrivacyPolicytext from '@/components/PrivacyPolicyText'

export default function page() {
  return (
    <div className='p-12 gap-5 flex flex-col'>
        <PrivacyPolicytext title={"TERMS & CONDITIONS"}/>
<div className="space-y-6 text-[#282828] text-base leading-relaxed">
      <p className="text-sm italic">
        HandyDandy.ae is a trading name of Handy Dandy Technical Services L.L.C
      </p>

      <p className="text-sm italic">Effective Date: March 3, 2025</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">1. Introduction</h2>
      <p>
        Welcome to <strong>HandyDandy.ae</strong>! HandyDandy.ae is a trading name of Handy Dandy
        Technical Services L.L.C. By using our website and services, you agree to comply with the
        following Terms & Conditions. Please read them carefully before booking a service.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">2. Services Provided</h2>
      <p>
        HandyDandy.ae offers professional cleaning and technical services, including home cleaning,
        office cleaning, deep cleaning, AC duct cleaning, maintenance, and various technical
        services.
      </p>

      <h3 className="text-lg font-semibold mt-4">3. Booking & Payments</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>All bookings must be made through our website or mobile app.</li>
        <li>
          Payments can be made via credit/debit card, online transfer, or through available credits.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">4. Cancellations & Rescheduling</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Bookings can be cancelled or rescheduled up to 6 hours before the scheduled time without a
          penalty.
        </li>
        <li>
          Cancellations within less than 6 hours of service will incur a 50% cancellation fee.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">5. Service Guarantee</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Our professionals are vetted and trained to deliver high-quality service.</li>
        <li>
          If you are not satisfied with the cleaning, you must notify us within 24 hours for a free
          re-clean.
        </li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">6. User Responsibilities</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>Ensure access to the property at the scheduled time.</li>
        <li>Secure any valuables before service begins.</li>
        <li>Inform us of any specific cleaning instructions or special requests.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">7. Liability & Damage Policy</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>HandyDandy.ae is not responsible for pre-existing damages.</li>
        <li>Any claims for damage must be reported within 24 hours of service completion.</li>
      </ul>

      <h3 className="text-lg font-semibold mt-4">8. Privacy Policy</h3>
      <p>
        We value your privacy. All personal details provided to us are secure and not shared with
        third parties.
      </p>

      <h3 className="text-lg font-semibold mt-4">9. Amendments to Terms</h3>
      <p>
        HandyDandy.ae reserves the right to update these Terms & Conditions at any time.
      </p>

      <p className="italic">
        📩 For any questions, contact us at{' '}
        <a href="mailto:hello@handydandy.ae" className="underline">
          hello@handydandy.ae
        </a>
      </p>
    </div>


    </div>
  )
}
