import React from 'react'
import PrivacyPolicytext from '@/components/PrivacyPolicyText'

export default function page() {
  return (
    <div className='p-12 gap-5 flex flex-col'>
        <PrivacyPolicytext title={"REFUND & CANCELLATION POLICY"}/>
<div className="space-y-6 text-[#282828] text-base leading-relaxed">
  <p className="italic text-sm">Effective Date: March 3, 2025</p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">1. Booking Cancellations</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>More than 12 hours before the appointment:</strong> Full refund or free rescheduling.
        </li>
        <li>
          <strong>Less than 12 hours before the appointment:</strong> 50% cancellation fee applies.
        </li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">2. No-Show Policy</h2>
      <p>
        If the customer is unavailable, the booking will be canceled, and no refund will be issued.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">3. Refund Process</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Refunds are processed within 5–7 business days via the original payment method.</li>
        <li>HandyDandy credits may be offered as an alternative.</li>
      </ul>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">4. Service Quality Issues</h2>
      <p>
        If you are unsatisfied, contact us within 24 hours for a free re-clean or partial refund, subject to review.
      </p>

      <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-6">5. Refund Support</h2>
      <p>
        For refunds & support, contact{' '}
        <a href="mailto:hello@handydandy.ae" className="underline">
          hello@handydandy.ae
        </a>
      </p>
</div>


    </div>
  )
}
