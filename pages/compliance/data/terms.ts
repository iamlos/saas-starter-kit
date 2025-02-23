export interface TermsSection {
  id: string;
  title: string;
  content: string | string[];
}

export const termsData = {
  lastUpdated: "February 14, 2024",
  introduction: {
    title: "INTRODUCTION",
    content: [
    //   "Welcome to the digital services offered by OneTapRecruit AI {t('OneTapRecruit')}. When you visit or use www.onetaprecruit.com, or any other online site, mobile application, service, or product that references these Terms and Conditions of Use (collectively, the "  "), 
    //   you are agreeing to be bound by these Terms and Conditions of Use and by our Privacy Policy (collectively, the "Terms and Conditions"). If you do not agree with the Terms and Conditions, you may not use the Services.",
    //   "PLEASE READ THE TERMS AND CONDITIONS CAREFULLY BEFORE USING OUR SERVICES. THEY CONTAIN IMPORTANT INFORMATION ABOUT YOUR RIGHTS AND OBLIGATIONS, INCLUDING DISCLAIMERS OF WARRANTIES, DISCLAIMERS OF LIABILITY, AND MANDATORY ARBITRATION. THE TERMS AND CONDITIONS ARE SUBJECT TO CHANGE."
    ]
  },
  sections: [
    {
      id: "revisions",
      title: "REVISIONS",
      content: "OneTapRecruit reserves the right to change, suspend and/or discontinue, at any time, any aspect or feature of our Services, including without limitation content, hours of availability and equipment needed for access or use. We also reserve the right to change or modify the Terms and Conditions applicable to your use of the Services at any time."
    },
    {
      id: "eligibility",
      title: "ELIGIBILITY",
      content: "The Services are intended solely for users who are 13 years of age or older. Any registration by, use of, or access to the Services by anyone under 13 is unauthorized and in violation of these Terms and Conditions."
    },
    {
      id: "privacy",
      title: "PRIVACY",
      content: "Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and share information about you when you access or use the Services."
    },
    // Add more sections as needed
  ]
};