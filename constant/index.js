import { Mail, MapPin, Phone } from "lucide-react";
import SERVICES from './services';

export const NAVIGATION_LINKS = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: false,
    subMenu: SERVICES.map((s) => ({
      name: s.title || s.name || s.id,
      href: `/${s.id}`,
    })),
  },
  {
    name: 'Testimonials',
    href: '/testimonials',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const CONTACT_DETAILS = [
  {
    icon: Phone,
    name: "Call",
    value: '(555) 123-4567',
    href: 'tel:+15551234567',
  },
  {
    icon: Mail,
    name: "Email",
    value: 'info@myproposalmasters.com',
    href: 'mailto:info@myproposalmasters.com',
  },
  {
    icon: MapPin,
    name: "Visit",
    value: '123 Main St, Anytown, USA',
    href: false,
  }
]

export const TESTIMONIALS = {
  comments: [
    {
      text:
        "Thanks to their guidance, we secured $500,000 in federal funding for our community development project. They understood our mission and translated it into a winning proposal.",
      author: "Sarah Kris",
      position: "Nonprofit Director",
      rating: 5,
    },
    {
      text:
        "As a researcher, I was overwhelmed by grant requirements. Their team made the process easy and delivered a clear, compelling proposal that earned us our first major grant.",
      author: "Dr. Michael Robert",
      position: "University Researcher",
      rating: 5,
    },
    {
      text:
        "Professional, knowledgeable, and approachable. They don’t just write, they coach and guide you through the process. Highly recommended.",
      author: "James Peterson.",
      position: "Healthcare Organization",
      rating: 5,
    },
    {
      text:
        "Working with them was a turning point for our nonprofit. They not only wrote winning proposals but also helped us build the confidence to keep growing.",
      author: "Andrea Mark",
      position: "",
      rating: 5,
    },
    {
      text:
        "Their team understood the complexities of academic funding better than anyone. With their support, we won our largest research grant to date.",
      author: "Dr. Samuel Hudson",
      position: "",
      rating: 5,
    },
    {
      text:
        "Professional, reliable, and deeply knowledgeable. They gave us the tools and proposals we needed to take our startup to the next level.",
      author: "Nathan Richard",
      position: "",
      rating: 5,
    },
  ]
};

export const LEGAL_PAGES = [
  {
    id: 'terms-and-conditions',
    title: 'Terms and Conditions',
    lastUpdated: 'October 11, 2025',
    sections: [
      {
        heading: '1. Introduction',
        content: 'Welcome to Your Company. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.'
      },
      {
        heading: '2. Services',
        content: 'We provide professional consulting, grant writing, program development, interim personnel, and event fundraising services. Our services are subject to availability and may be modified or discontinued at any time.'
      },
      {
        heading: '3. User Responsibilities',
        content: 'You agree to provide accurate and complete information when engaging our services. You are responsible for maintaining the confidentiality of any account credentials and for all activities that occur under your account.'
      },
      {
        heading: '4. Intellectual Property',
        content: 'All content on this website, including text, graphics, logos, and software, is the property of Your Company or its licensors and is protected by copyright and other intellectual property laws.'
      },
      {
        heading: '5. Payment Terms',
        content: 'Payment terms for our services will be outlined in individual service agreements. All fees are non-refundable unless otherwise specified in writing. We reserve the right to modify our fees at any time.'
      },
      {
        heading: '6. Confidentiality',
        content: 'We maintain strict confidentiality regarding all client information and project details. Both parties agree not to disclose confidential information without prior written consent, except as required by law.'
      },
      {
        heading: '7. Limitation of Liability',
        content: 'To the fullest extent permitted by law, Your Company shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services or website.'
      },
      {
        heading: '8. Termination',
        content: 'Either party may terminate service agreements in accordance with the terms specified in individual contracts. Upon termination, all outstanding fees become immediately due and payable.'
      },
      {
        heading: '9. Governing Law',
        content: 'These Terms and Conditions shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.'
      },
      {
        heading: '10. Changes to Terms',
        content: 'We reserve the right to modify these Terms and Conditions at any time. Changes will be effective immediately upon posting to this website. Your continued use of our services constitutes acceptance of any changes.'
      },
      {
        heading: '11. Contact Information',
        content: 'If you have any questions about these Terms and Conditions, please contact us at info@yourcompany.com or call (555) 123-4567.'
      }
    ]
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: 'October 11, 2025',
    sections: [
      {
        heading: '1. Information We Collect',
        content: 'We collect information that you provide directly to us, including name, email address, phone number, company information, and any other information you choose to provide when contacting us or using our services.'
      },
      {
        heading: '2. How We Use Your Information',
        content: 'We use the information we collect to provide, maintain, and improve our services; to communicate with you; to process transactions; to send you technical notices and support messages; and to respond to your inquiries.'
      },
      {
        heading: '3. Information Sharing',
        content: 'We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as necessary to provide our services or as required by law. We may share information with trusted service providers who assist in operating our website.'
      },
      {
        heading: '4. Data Security',
        content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.'
      },
      {
        heading: '5. Cookies and Tracking',
        content: 'We use cookies and similar tracking technologies to track activity on our website and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.'
      },
      {
        heading: '6. Third-Party Links',
        content: 'Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.'
      },
      {
        heading: '7. Data Retention',
        content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.'
      },
      {
        heading: '8. Your Rights',
        content: 'You have the right to access, correct, or delete your personal information. You may also object to or restrict certain processing of your data. To exercise these rights, please contact us using the information provided below.'
      },
      {
        heading: '9. Children\'s Privacy',
        content: 'Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.'
      },
      {
        heading: '10. International Data Transfers',
        content: 'Your information may be transferred to and maintained on computers located outside of your state, province, country, or other governmental jurisdiction where data protection laws may differ.'
      },
      {
        heading: '11. Changes to Privacy Policy',
        content: 'We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.'
      },
      {
        heading: '12. Contact Us',
        content: 'If you have any questions about this Privacy Policy or our privacy practices, please contact us at privacy@yourcompany.com or call (555) 123-4567.'
      }
    ]
  }
];
