export interface AccessibilitySection {
  id: string;
  title: string;
  content: string | string[];
}

export const accessibilityData = {
  lastUpdated: "February 14, 2024",
  introduction: {
    title: "ACCESSIBILITY STATEMENT",
    content: [
      "OneTapRecruit AI is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards.",
      "We strive to ensure that our website and services are accessible to all users, regardless of technology or ability."
    ]
  },
  sections: [
    {
      id: "our-commitment",
      title: "OUR COMMITMENT",
      content: [
        "Web Content Accessibility Guidelines (WCAG) 2.1 Level AA compliance",
        "Regular accessibility audits and updates",
        "Ongoing training for our development team",
        "Continuous feedback incorporation from our users",
        "Regular testing with assistive technologies"
      ]
    },
    {
      id: "accessibility-features",
      title: "ACCESSIBILITY FEATURES",
      content: [
        "Keyboard navigation support",
        "Screen reader compatibility",
        "Text alternatives for non-text content",
        "Clear heading structure",
        "Sufficient color contrast",
        "Resizable text support",
        "Focus indicators"
      ]
    },
    {
      id: "assistive-technologies",
      title: "SUPPORTED ASSISTIVE TECHNOLOGIES",
      content: [
        "Screen readers (NVDA, JAWS, VoiceOver)",
        "Screen magnification software",
        "Speech recognition software",
        "Keyboard-only navigation",
        "Browser accessibility tools"
      ]
    },
    {
      id: "known-limitations",
      title: "KNOWN LIMITATIONS",
      content: "We are actively working to resolve any accessibility issues. If you encounter any accessibility barriers on our website, please contact us immediately."
    },
    {
      id: "contact-information",
      title: "CONTACT US",
      content: "If you have any questions, concerns, or feedback about the accessibility of our services, please contact our accessibility team at accessibility@onetaprecruit.com"
    }
  ]
};