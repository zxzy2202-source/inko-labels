import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | INKO Custom Labels",
  description: "Terms of Use for INKO Custom Labels website and services.",
};

export default function TermsPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0F2744] pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl font-black text-white uppercase leading-tight mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
            Terms of Use
          </h1>
          <p className="text-white/60 text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-10 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">1. Acceptance of Terms</h2>
              <p>By accessing and using the INKO Custom Labels website (<strong>inkolabels.com</strong>), you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website. These terms apply to all visitors, users, and others who access or use the website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">2. Use of Website</h2>
              <p>You may use our website for lawful purposes only. You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Use the website in any way that violates applicable laws or regulations</li>
                <li>Transmit any unsolicited or unauthorized advertising or promotional material</li>
                <li>Attempt to gain unauthorized access to any part of the website or its related systems</li>
                <li>Use automated tools to scrape, crawl, or extract data from the website without permission</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                <li>Engage in any conduct that restricts or inhibits anyone&apos;s use or enjoyment of the website</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">3. Intellectual Property</h2>
              <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of INKO Custom Labels (Xi&apos;an Haoz Printing Labels Co., Ltd.) or its content suppliers and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">4. Product Information and Quotations</h2>
              <p>Product information, specifications, and pricing on this website are provided for general reference only and are subject to change without notice. All quotations provided through our inquiry form or direct communication are valid for 30 days unless otherwise stated. Final pricing and specifications are confirmed in our formal purchase order and sales contract.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">5. Disclaimer of Warranties</h2>
              <p>This website is provided on an &quot;as is&quot; and &quot;as available&quot; basis without any warranties of any kind, either express or implied. We do not warrant that the website will be uninterrupted, error-free, or free of viruses or other harmful components. We make no warranties regarding the accuracy, completeness, or reliability of any content on the website.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">6. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, INKO Custom Labels shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of, or inability to use, this website or its content. Our total liability for any claims arising from your use of the website shall not exceed USD 100.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">7. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over the content of those websites and accept no responsibility for them or for any loss or damage that may arise from your use of them.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">8. Privacy</h2>
              <p>Your use of this website is also governed by our <Link href="/privacy" className="text-[#E8A020] hover:underline">Privacy Policy</Link>, which is incorporated into these Terms of Use by reference.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">9. Governing Law</h2>
              <p>These Terms of Use shall be governed by and construed in accordance with the laws of the People&apos;s Republic of China. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Xi&apos;an, Shaanxi Province, China.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">10. Changes to Terms</h2>
              <p>We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website after any changes constitutes your acceptance of the new terms.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">11. Contact Us</h2>
              <p>If you have questions about these Terms of Use, please contact us:</p>
              <div className="mt-3 bg-gray-50 rounded-xl p-6">
                <p><strong>INKO Custom Labels</strong><br />
                Xi&apos;an Haoz Printing Labels Co., Ltd.<br />
                Xi&apos;an, Shaanxi Province, China<br />
                Email: <a href="mailto:info@inkolabels.com" className="text-[#E8A020] hover:underline">info@inkolabels.com</a><br />
                Phone: <a href="tel:+8613572821237" className="text-[#E8A020] hover:underline">+86 135 7282 1237</a></p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/" className="text-[#0F2744] hover:text-[#E8A020] text-sm font-medium transition-colors">← Back to Home</Link>
          <Link href="/privacy" className="text-[#0F2744] hover:text-[#E8A020] text-sm font-medium transition-colors">Privacy Policy →</Link>
        </div>
      </section>
    </div>
  );
}
