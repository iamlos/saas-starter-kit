export interface PrivacySection {
  id: string;
  title: string;
  content: string | string[];
}

export const privacyData = {
  lastUpdated: "February 14, 2024",
  introduction: {
    title: "INTRODUCTION",
    content: [
      "OneTapRecruit AI ("OneTapRecruit AI", "we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.",
      "Please read this Privacy Policy carefully. By accessing or using our services, you agree to this Privacy Policy and our Terms of Service."
    ]
  },
  sections: [
    {
      id: "information-we-collect",
      title: "INFORMATION WE COLLECT",
      content: [
        "Personal Information: Name, email address, phone number, date of birth, and athletic information.",
        "Usage Data: Browser type, IP address, device information, and interaction with our services.",
        "Athletic Data: Sports statistics, performance metrics, and recruitment history."
      ]
    },
    {
      id: "how-we-use-information",
      title: "HOW WE USE YOUR INFORMATION",
      content: [
        "To provide and maintain our services",
        "To match you with potential athletic opportunities",
        "To communicate with you about our services",
        "To improve our services and develop new features",
        "To comply with legal obligations"
      ]
    },
    {
      id: "data-sharing",
      title: "HOW WE SHARE YOUR INFORMATION",
      content: "We may share your information with college recruiters, athletic programs, and other relevant parties with your consent. We do not sell your personal information to third parties."
    },
    {
      id: "data-security",
      title: "DATA SECURITY",
      content: "We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the internet is 100% secure."
    },
    {
      id: "your-rights",
      title: "YOUR RIGHTS",
      content: [
        "Access your personal information",
        "Correct inaccurate information",
        "Request deletion of your information",
        "Opt-out of marketing communications",
        "Control your privacy settings"
      ]
    }
  ]
};