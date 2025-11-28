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
    lastUpdated: '[Insert Date]',
    sections: [
      {
        heading: 'Introduction',
        summary:
          <>These Terms and Conditions ("Terms") govern your use of <a className="lp_a" href="https://myproposalmasters.com">myproposalmasters.com</a> (the "Website") and your engagement of My Proposal Master ("Company," "we," or "us") for grant writing and related services (the "Services"). By using the Website or working with us, you agree to be bound by these Terms. If you do not agree with these Terms, please do not use the Website or engage our Services</>,
      },
      {
        heading: '1. Scope of Services',
        summary:
          'My Proposal Master provides specialized grant strategy, writing, and consulting support. The exact scope for each Client is defined in proposals, quotes, or agreements.',
        bullets: [
          'Grant proposal writing and development',
          'Grant research and funding prospecting',
          'Editing and review of grant proposals and related documents',
          'Budget development and alignment for grant applications',
          'Strategic grant consulting and capacity building',
          'Nonprofit startup grant support and first-time funding guidance',
          'Academic and business grant writing services',
        ],
        note:
          'The specific scope, deliverables, timelines, and fees for each engagement are documented for the Client before work begins.',
      },
      {
        heading: '2. No Guarantee of Funding or Outcomes',
        summary:
          'Grant funding decisions are made solely by funders and are influenced by factors outside our control (such as competition, funding cycles, eligibility, and policy priorities).',
        bullets: [
          'We provide high-quality, strategic, and compliant proposals but cannot guarantee funding, awards, or approvals.',
          'Past success and testimonials do not promise or predict future outcomes.',
        ],
      },
      {
        heading: '3. Use of the Website',
        summary:
          'You agree to use the Website only for lawful purposes.',
        bullets: [
          'Do not violate any applicable law or regulation.',
          'Do not infringe upon any third-party rights.',
          'Do not disrupt, damage, or impair the Website or its security.',
          'Do not attempt to gain unauthorized access to any systems or data.',
        ],
        note:
          'We may restrict, suspend, or terminate access to the Website for misuse.',
      },
      {
        heading: '4. Client Responsibilities',
        summary:
          'To enable effective delivery of Services, the Client agrees to:',
        bullets: [
          'Provide accurate, complete, and timely information, including organizational details, project descriptions, budgets, and supporting documents.',
          'Ensure all information supplied is lawful and does not infringe third-party rights.',
          'Review drafts and provide feedback within mutually agreed timelines.',
          'Inform us promptly of any changes in deadlines, project scope, or funder requirements.',
        ],
        note:
          'Delays in providing information or feedback may impact project timelines and submission dates.',
      },
      {
        heading: '5. Fees, Payments, and Invoicing',
        summary:
          'Fees and payment expectations are set out in writing before work begins.',
        subSections: [
          {
            title: '5.1 Fee Structure',
            bullets: [
              'Project fees are outlined in a written proposal, quote, or agreement.',
              'Fees may be fixed, milestone-based, retainers or consulting packages, or hourly/daily rates where agreed.',
            ],
          },
          {
            title: '5.2 Payment Terms',
            bullets: [
              'A deposit or initial payment may be required to schedule and begin work.',
              'Remaining amounts are due upon completion of agreed milestones or delivery of draft/final documents.',
              'Invoices are generally payable within [7/10/14] days of issue.',
              'Payments may be made via approved methods indicated on the invoice or Website (e.g., bank transfer, card payment, or online payment processors).',
            ],
          },
          {
            title: '5.3 Taxes',
            bullets: [
              'Where applicable, taxes, duties, or similar charges may be added to fees and will be clearly indicated where required by law.',
            ],
          },
        ],
      },
      {
        heading: '6. Refunds and Cancellations',
        summary:
          'Services are highly customized and time-intensive; fees reflect the expertise and work invested from the outset.',
        subSections: [
          {
            title: 'Before Work Begins',
            bullets: [
              'If the Client cancels before substantive work has started, a refund of any prepaid amount may be considered, minus reasonable administrative or scheduling costs already incurred.',
            ],
          },
          {
            title: 'After Work Has Commenced',
            bullets: [
              'Once research, planning, drafting, or consulting has begun, fees are generally non-refundable because time and expertise have already been invested.',
              'In exceptional circumstances, partial refunds may be reviewed case by case based on work completed and commitments made.',
            ],
          },
          {
            title: 'Change of Mind or Funding Outcome',
            bullets: [
              'Refunds are not issued for change of mind, internal decision changes, or unsuccessful funding outcomes, as funding decisions rest with grantmakers.',
            ],
          },
          {
            title: 'Paused or Delayed Projects',
            bullets: [
              'If a project is paused or delayed by the Client for an extended period, timelines or fees may be adjusted by mutual agreement to reflect updated scope and availability.',
            ],
          },
        ],
      },
      {
        heading: '7. Revisions and Scope Changes',
        summary:
          'Revisions are included to refine content within the original scope and funder requirements.',
        bullets: [
          'A reasonable number of revisions are typically included as stated in the proposal or agreement.',
          'Substantial changes in direction, new target funders, major shifts in project design, or additions beyond the agreed scope may require a revised scope of work and additional fees.',
          'Any such changes will be discussed and agreed before additional work proceeds.',
        ],
      },
      {
        heading: '8. Intellectual Property and Ownership',
        subSections: [
          {
            title: '8.1 Client-Provided Content',
            bullets: [
              'The Client retains ownership of all pre-existing materials and information provided to us, including internal reports, logos, and proprietary documents.',
            ],
          },
          {
            title: '8.2 Deliverables',
            summary:
              'Upon full payment of fees, the Client generally receives usage rights to final deliverables (e.g., grant proposals, budgets, research reports) for internal purposes and funder submissions as agreed.',
            bullets: [
              'We may retain copies of work for internal record-keeping, quality assurance, and portfolio tracking without disclosing confidential information.',
              'Underlying frameworks, methods, and templates used to create the deliverables remain the intellectual property of My Proposal Master.',
              'Any broader licensing, publication, or reuse beyond grant and internal organizational use should be discussed in advance.',
            ],
          },
        ],
      },
      {
        heading: '9. Confidentiality',
        summary:
          'Both parties agree to maintain the confidentiality of non-public information shared during the engagement.',
        bullets: [
          'Examples include internal documents, budgets, strategies, organizational data, draft proposals, and proprietary project information.',
        ],
        subSections: [
          {
            title: 'Permitted disclosures',
            bullets: [
              'To team members or subcontractors who need it to perform the Services and are bound by confidentiality obligations.',
              'When required by law, court order, or competent authority.',
            ],
          },
          {
            title: 'Additional agreements',
            bullets: [
              'Where written NDAs are required by the Client or Company, those terms apply in addition to this section.',
            ],
          },
        ],
      },
      {
        heading: '10. Professional Advice',
        summary:
          'Services may include strategic guidance, funding recommendations, or narrative framing.',
        bullets: [
          'Services do not constitute legal, tax, financial, or accounting advice unless explicitly agreed otherwise in writing.',
          'Clients should seek appropriate professional advice from qualified advisors where necessary.',
        ],
      },
      {
        heading: '11. Disclaimers',
        bullets: [
          'To the fullest extent permitted by law, the Website and Services are provided on an "as available" basis.',
          'No representation or warranty is made that the Website will be uninterrupted, error-free, or free from security vulnerabilities.',
          'No guarantee is made that any specific funding outcome will be achieved, regardless of past results.',
        ],
      },
      {
        heading: '12. Limitation of Liability',
        bullets: [
          'To the maximum extent permitted by law, My Proposal Master will not be liable for any indirect, incidental, consequential, or special damages, including loss of funding, profits, or business interruption arising from use of the Website or Services.',
          'Our total liability for any claim relating to the Services, whether in contract, tort, or otherwise, will not exceed the total fees paid by the Client for the specific project giving rise to the claim.',
          'Some jurisdictions do not allow certain limitations; where prohibited, this limitation applies to the fullest extent permitted.',
        ],
      },
      {
        heading: '13. Indemnification',
        bullets: [
          'The Client agrees to indemnify and hold harmless My Proposal Master from any claims, losses, or damages arising out of the Client\'s use of the Website or Services in violation of these Terms or applicable law.',
          'The Client is responsible for inaccuracies or incomplete information provided to us.',
          'The Client will indemnify against infringement of third-party rights caused by materials supplied by the Client.',
        ],
      },
      {
        heading: '14. Third-Party Links and Tools',
        summary:
          'The Website may include links to third-party websites or tools, such as scheduling platforms or payment gateways. These are provided for convenience and do not imply endorsement.',
        bullets: [
          'Each third-party site or tool is governed by its own terms and policies.',
        ],
      },
      {
        heading: '15. Changes to the Website, Services, or Terms',
        summary:
          'We may update the Website, adjust Services, or revise these Terms periodically.',
        bullets: [
          'Changes become effective when posted on the Website with an updated "Last Updated" date.',
          'Continued use of the Website or Services after such changes constitutes acceptance of the revised Terms.',
        ],
      },
      {
        heading: '16. Governing Law and Jurisdiction',
        summary:
          'These Terms are governed by the laws of [insert applicable jurisdiction], without regard to conflict-of-law principles.',
        bullets: [
          'Any disputes arising out of or in connection with these Terms or the Services will be subject to the exclusive or non-exclusive jurisdiction of the courts of [insert city/country], unless otherwise agreed in writing.',
        ],
      },
      {
        heading: '17. Contact Information',
        summary: 'For questions about these Terms or the Services, please contact:',
        contacts: [
          { label: 'Company', value: 'My Proposal Master' },
          { label: 'Email', value: 'info@myproposalmasters.com', href: 'mailto:info@myproposalmasters.com' },
          { label: 'Website', value: 'https://myproposalmasters.com', href: 'https://myproposalmasters.com' },
        ],
      }
    ]
  },
  {
    id: 'privacy-policy',
    title: 'Privacy Policy',
    lastUpdated: '[Insert Date]',
    sections: [
      {
        heading: 'Introduction',
        summary:
          <>My Proposal Master (\u201cCompany,\u201d \u201cwe,\u201d or \u201cus\u201d) respects the privacy of every person and organization that visits our website, uses our services, or communicates with our team. This Privacy Policy explains how personal information is collected, used, and protected when you interact with <a className="lp_a" href="https://myproposalmasters.com">myproposalmasters.com</a> (the \u201cWebsite\u201d) and our grant writing and consulting services (the \u201cServices\u201d).</>,
        bullets: [
          'By using the Website or engaging our Services, you agree to the practices described in this Privacy Policy.',
        ],
      },
      {
        heading: '1. Information We Collect',
        summary: 'We collect information in the following ways:',
        subSections: [
          {
            title: '1.1 Information You Provide Directly',
            summary: 'This includes information you provide when you:',
            bullets: [
              'Submit a contact form or \u201cBook a Consultation\u201d request',
              'Request a quote or proposal',
              'Sign a service agreement or onboarding form',
              'Subscribe to updates or newsletters',
              'Communicate with us by email, phone, or other channels',
            ],
            note:
              'This may include: Name, job title, and organization name; Email address, phone number, and mailing address; Project details, funding needs, and grant opportunities of interest; Billing and invoicing details (e.g., organization billing information); Any documents or content you share for review (e.g., draft proposals, budgets, internal reports).',
          },
          {
            title: '1.2 Payment Information',
            summary:
              'Payment details (e.g., card or bank information) are usually processed by secure third-party payment processors.',
            bullets: [
              'We do not store full card details on our servers.',
              'We may keep basic transaction data, such as amount, date, and invoice reference, for accounting and record-keeping purposes.',
            ],
          },
          {
            title: '1.3 Information Collected Automatically',
            summary: 'When you visit the Website, we may automatically collect:',
            bullets: [
              'IP address and approximate location',
              'Browser type, device type, and operating system',
              'Pages viewed, time spent on pages, and referring URLs',
              'General usage and interaction data',
              'This information is typically collected through cookies, analytics tools, and similar technologies.',
            ],
          },
          {
            title: '1.4 Information from Third Parties',
            summary:
              'We may receive information from third-party tools, such as scheduling platforms, payment providers, or analytics services, when these are integrated into our Website or workflows.',
          },
        ],
      },
      {
        heading: '2. How We Use Your Information',
        summary: 'We use personal information for purposes including:',
        bullets: [
          'Providing and delivering our Services (grant proposal writing, research, editing, consulting, training, and related support)',
          'Responding to inquiries, consultation requests, and customer support needs',
          'Preparing quotes, proposals, and service agreements',
          'Managing payments, invoices, and accounting obligations',
          'Improving our Website, content, and user experience',
          'Sending important service updates, deadlines, and reminders',
          'Sharing relevant insights, resources, or newsletters (where permitted)',
          'Meeting legal, regulatory, and compliance obligations',
          'Protecting our rights, preventing misuse or fraud, and responding to legal requests',
        ],
      },
      {
        heading: '3. Legal Basis for Processing (Where Applicable)',
        summary: 'Where data protection laws require a legal basis (e.g., GDPR), we typically rely on:',
        bullets: [
          'Contract \u2013 to provide Services you request',
          'Legitimate Interests \u2013 to operate, improve, and protect our business',
          'Legal Obligations \u2013 for accounting, taxation, and compliance',
          'Consent \u2013 for certain marketing communications or optional cookies',
        ],
      },
      {
        heading: '4. How We Share Information',
        summary: 'We do not sell personal information. We may share information with:',
        bullets: [
          'Service Providers \u2013 such as payment processors, IT providers, analytics tools, and scheduling platforms, who support our operations under confidentiality obligations',
          'Professional Advisors \u2013 such as accountants or legal counsel, when reasonably necessary',
          'Authorities \u2013 when required by law, regulation, or legal process',
          'Business Transfers \u2013 in the event of a merger, sale, or reorganization, where data may be transferred as part of the business assets',
        ],
        note:
          'Any third party that processes data on our behalf is expected to protect it and use it only for the specific purpose for which it was shared.',
      },
      {
        heading: '5. International Transfers',
        summary:
          'Depending on your location and our service providers, personal information may be processed and stored in other countries. Where applicable, we take reasonable steps to ensure that any cross-border transfers comply with relevant data protection laws.',
      },
      {
        heading: '6. Data Retention',
        summary: 'We retain personal information for as long as necessary to:',
        bullets: [
          'Deliver the Services and maintain client relationships',
          'Meet legal, tax, and accounting requirements',
          'Resolve disputes and enforce agreements',
          'Where feasible, information may be anonymized or securely deleted when it is no longer required.',
        ],
      },
      {
        heading: '7. Security',
        summary:
          'We take reasonable administrative, technical, and organizational measures to protect personal information against unauthorized access, loss, or misuse. However, no method of transmission or storage is completely secure, and absolute security cannot be guaranteed.',
      },
      {
        heading: '8. Cookies and Similar Technologies',
        summary: 'Our Website may use cookies and similar tools to:',
        bullets: [
          'Remember preferences and improve user experience',
          'Analyze site traffic and performance',
          'Support certain functionality (e.g., forms, booking widgets)',
          'You can manage cookie settings through your browser. Disabling certain cookies may affect how the Website functions.',
        ],
      },
      {
        heading: '9. Your Rights',
        summary: 'Depending on your jurisdiction, you may have the right to:',
        bullets: [
          'Access the personal information held about you',
          'Request correction of inaccurate or incomplete data',
          'Request deletion of certain data, subject to legal retention requirements',
          'Object to or restrict certain types of processing',
          'Withdraw consent where processing is based on consent',
          'Lodge a complaint with a data protection authority',
        ],
        note:
          'Requests can be made using the contact details below. We may need to verify your identity before processing certain requests.',
      },
      {
        heading: '10. Children\u2019s Privacy',
        summary:
          'Our Website and Services are intended for adults and professional organizations. We do not knowingly collect personal information from children under the age of 18. If information about a minor is inadvertently collected, it will be deleted when identified.',
      },
      {
        heading: '11. Third-Party Websites',
        summary:
          'The Website may contain links to third-party sites or tools. This Privacy Policy does not apply to those external sites. Their privacy practices are governed by their own policies.',
      },
      {
        heading: '12. Changes to This Policy',
        summary:
          'We may update this Privacy Policy from time to time. The \u201cLast Updated\u201d date at the top indicates the most recent revision. Any changes become effective when posted on the Website.',
      },
      {
        heading: '13. Contact Us',
        summary: 'If you have questions or requests regarding this Privacy Policy or your personal data, please contact:',
        contacts: [
          { label: 'Company', value: 'My Proposal Master' },
          { label: 'Email', value: 'info@myproposalmasters.com', href: 'mailto:info@myproposalmasters.com' },
          { label: 'Website', value: 'https://myproposalmasters.com', href: 'https://myproposalmasters.com' },
        ],
      }
    ]
  }
];
