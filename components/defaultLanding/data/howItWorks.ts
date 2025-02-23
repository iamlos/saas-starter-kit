export interface Step {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  metrics?: {
    icon: string;
    label: string;
  }[];
  stats?: {
    value: string;
    label: string;
  }[];
  image?: string;
}

export const howItWorksData = {
  mainTitle: "Here's How OneTap Works!",
  highlight: "Effortless Recruiting in 3 Steps",
  steps: [
    {
      id: 1,
      title: "Create Your Athletic Profile",
      subtitle: "Complete profiles see up to 250% more connections on our AI platform",
      description: "Upload your academic and athletic stats, Share your game footage, and Showcase your athletic achievements.",
      metrics: [
        { icon: "dollar", label: "NILs" },
        { icon: "phone", label: "Calls" },
        { icon: "envelope", label: "Emails" },
        { icon: "arrows", label: "Connect" }
      ]
    },
    {
      id: 2,
      title: "Let AI Find Your Perfect Match",
      subtitle: "Together with your preferred choices in mind, our AI will find the fit for yo.",
      description: "Advanced algorithms analyze your profile, Instant matching with compatible college programs, Real-time opportunities based on your evolving performance",
      stats: [
        { value: "68%", label: "Better matches than competing platforms!" }
      ]
    },
    {
      id: 3,
      title: "Automated Outreach ...",
      subtitle: "Making meaningful connections is easy with AI.",
      description: "Personalized email campaigns to coaches, Smart follow-up communication, In-platform messaging with college programs",
      image: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/480710427_122106215810766927_6393046521978187827_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=jrPbfm_PZxQQ7kNvgHhnaqj&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=Arnqp3KBsKa7DAXnF1NHdTG&oh=00_AYDGfmE9JPjn-WxvtSlOhfCmezXD0esnN4qlsAMbGK2UVA&oe=67BF3EC5"
    }
  ]
};