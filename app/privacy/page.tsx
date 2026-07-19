import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | INKO Custom Labels",
  description: "Privacy Policy for INKO Custom Labels — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#0F2744] pt-32 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl font-black text-white uppercase leading-tight mb-3" style={{ fontFamily: "var(--font-barlow)" }}>
            Privacy Policy
          </h1>
          <p className="text-white/60 text-sm">Last updated: January 1, 2025</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 prose prose-gray max-w-none">
          <div className="space-y-10 text-gray-600 leading-relaxed">

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">1. Introduction</h2>
              <p>INKO Custom Labels (operated by Xi&apos;an Haoz Printing Labels Co., Ltd., &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>inkolabels.com</strong> or contact us for business inquiries.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Contact Information:</strong> Name, company name, email address, phone number, and country when you submit an inquiry form or contact us directly.</li>
                <li><strong>Business Information:</strong> Product requirements, quantities, and specifications provided in inquiry forms.</li>
                <li><strong>Usage Data:</strong> IP address, browser type, pages visited, and time spent on our website, collected automatically through cookies and analytics tools.</li>
                <li><strong>Communications:</strong> Records of email, WhatsApp, and other communications you have with us.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">3. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Respond to your inquiries and provide quotations</li>
                <li>Process and fulfill orders</li>
                <li>Send you relevant product information and updates (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
                <li>Prevent fraud and ensure website security</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">4. Information Sharing</h2>
              <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li><strong>Service Providers:</strong> Trusted third-party services that assist us in operating our website and business (e.g., email service providers, shipping companies), subject to confidentiality agreements.</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or governmental authority.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets, with appropriate notice to you.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">5. Cookies</h2>
              <p>Our website uses cookies to enhance your browsing experience. Cookies are small text files stored on your device that help us analyze website traffic and remember your preferences. You can control cookie settings through your browser settings. Disabling cookies may affect some website functionality.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">6. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">7. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Business inquiry data is typically retained for 3 years.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">8. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal data:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Right to access your personal data</li>
                <li>Right to correct inaccurate data</li>
                <li>Right to request deletion of your data</li>
                <li>Right to object to processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="mt-3">To exercise these rights, please contact us at <a href="mailto:info@inkolabels.com" className="text-[#E8A020] hover:underline">info@inkolabels.com</a>.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">9. International Transfers</h2>
              <p>As a China-based company serving global customers, your information may be transferred to and processed in China. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable data protection laws.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">10. Changes to This Policy</h2>
              <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on this page with an updated date. We encourage you to review this policy periodically.</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#0F2744] mb-3">11. Contact Us</h2>
              <p>If you have questions about this Privacy Policy or our data practices, please contact us:</p>
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
          <Link href="/terms" className="text-[#0F2744] hover:text-[#E8A020] text-sm font-medium transition-colors">Terms of Use →</Link>
        </div>
      </section>
    </div>
  );
}
