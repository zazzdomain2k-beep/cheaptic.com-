import React from 'react';
import LegalPageWrapper from './LegalPageWrapper';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <LegalPageWrapper title="Privacy Policy">
      <p className="text-sm text-slate-500">Last updated: July 29, 2024</p>
      <p>
        Welcome to Cheaptic.com. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      <h2>Information We Collect</h2>
      <p>
        We may collect information about you in a variety of ways. The information we may collect on the Site includes:
      </p>
      <h3>Personal Data</h3>
      <p>
        Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.
      </p>
      <h3>Derivative Data</h3>
      <p>
        Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.
      </p>

      <h2>How We Use Your Information</h2>
      <p>
        Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
      </p>
      <ul>
        <li>Create and manage your account.</li>
        <li>Email you regarding your account or order.</li>
        <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
        <li>Increase the efficiency and operation of the Site.</li>
        <li>Monitor and analyze usage and trends to improve your experience with the Site.</li>
      </ul>

      <h2>Disclosure of Your Information</h2>
      <p>
        We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
      </p>
      <h3>By Law or to Protect Rights</h3>
      <p>
        If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
      </p>

      <h2>Security of Your Information</h2>
      <p>
        We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have questions or comments about this Privacy Policy, please contact us using the form on our Contact page.
      </p>
    </LegalPageWrapper>
  );
};

export default PrivacyPolicyPage;
