const content = {
  header: {
    title: "Support Center",
    categories: ["Knowledge Base", "Contact Us", "Community Form"],
  },
  documentation: {
    categories: [
      {
        title: "Elements",
        links: ["Getting Started", "Installation", "Documentation", "Release Notes"],
      },
      {
        title: "Code",
        links: ["Code Examples", "Best Practices", "Guides"],
      },
      {
        title: "Image",
        links: ["How to upload", "Supported Formats", "Best practices"],
      },
      {
        title: "Change log",
        links: ["Version 1.0", "Version 1.1", "Version 2.0"],
      },
    ],
  },
  videoPlaylists: {
    featured: [
      { title: "Essential Video Tutorials", videoLink: "/videos/essential" },
      { title: "New Video Tutorials", videoLink: "/videos/new" },
    ],
    newVideos: [
      { title: "Intro to Tailwind CSS", videoLink: "/videos/tailwind" },
      { title: "Next.js Best Practices", videoLink: "/videos/nextjs" },
    ],
  },
  faqs: [
    {
      question: "How to use this platform?",
      answer: "Here is how you can get started with the platform...",
    },
    {
      question: "Where can I find more resources?",
      answer: "Check our documentation and video playlist sections...",
    },
  ],
};

export default content;
