import React from 'react';
import LegalPageWrapper from './LegalPageWrapper';

const TermsOfServicePage: React.FC = () => {
  return (
    <LegalPageWrapper title="Terms of Service">
      <p className="text-sm text-slate-500">Last updated: July 29, 2024</p>
      <p>
        Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Cheaptic.com website (the "Service") operated by Cheaptic.com ("us", "we", or "our").
      </p>
      <p>
        Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
      </p>

      <h2>1. Use Of The Site</h2>
      <p>
        You may use the Site to search for travel-related information and to book travel reservations. You agree not to use this Site for any other purpose, including without limitation, to make any speculative, false, or fraudulent reservation or any reservation in anticipation of demand.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        The Service and its original content, features, and functionality are and will remain the exclusive property of Cheaptic.com and its licensors. The Service is protected by copyright, trademark, and other laws of both the United States and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Cheaptic.com.
      </p>

      <h2>3. Links To Other Web Sites</h2>
      <p>
        Our Service may contain links to third-party web sites or services that are not owned or controlled by Cheaptic.com. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party web sites or services. You further acknowledge and agree that Cheaptic.com shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
      </p>
      
      <h2>4. Limitation Of Liability</h2>
      <p>
        In no event shall Cheaptic.com, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
      </p>

      <h2>5. Changes</h2>
      <p>
        We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
      </p>
      
      <h2>Contact Us</h2>
      <p>
        If you have any questions about these Terms, please contact us.
      </p>
    </LegalPageWrapper>
  );
};

export default TermsOfServicePage;
