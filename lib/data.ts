export const personal = {
  name: "Enio Maiale",
  titleVariants: [
    "Senior Director of Software Engineering",
    "Engineering Leader",
    "Agile Practitioner",
    "Software Architect",
  ],
  location: "Pompano Beach, Florida",
  email: "enio.maiale@gmail.com",
  linkedin: "https://www.linkedin.com/in/eniomaiale",
  summary:
    "Diligent Software Development Director with expertise in managing high-performing teams and long-term releases using the Agile framework. Skilled in product development, release planning, change management, and product strategy. Adept at identifying and grooming team members to perform at their highest potential — demonstrating critical thinking in design and debugging while ensuring dedication to quality.",
};

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  current?: boolean;
}

export const experience: ExperienceEntry[] = [
  {
    company: "Miami HEAT",
    role: "Senior Director of Software Engineering",
    period: "Nov 2021 – Present",
    current: true,
    bullets: [
      "Built and scaled engineering team; implemented Agile framework organization-wide.",
      "Managed engineering team and offshore vendors across multiple time zones.",
      "Mentored engineers and engineering managers, accelerating career growth.",
      "Reduced production bugs by 70% and improved platform reliability to 92%.",
      "Generated $500K in additional revenue through application performance optimization.",
      "Architected performance analytics tools adopted by basketball operations.",
    ],
  },
  {
    company: "Miami HEAT",
    role: "Director of Software Engineering",
    period: "Oct 2018 – Nov 2021",
    bullets: [
      "Led cross-functional engineering squads delivering fan experience platforms.",
      "Drove architectural decisions for scalable, cloud-native systems.",
      "Established engineering best practices and code review culture.",
    ],
  },
  {
    company: "601 Analytics",
    role: "Software Engineering Consultant",
    period: "Jan 2020 – Present",
    current: true,
    bullets: [
      "Provided technical consulting on data analytics platforms and engineering strategy.",
    ],
  },
  {
    company: "Phunware, Inc.",
    role: "Senior Software Engineer",
    period: "Dec 2016 – Oct 2018",
    bullets: [
      "Developed React and C# enterprise applications for mobile engagement platform.",
      "Designed and implemented CI/CD pipelines using Jenkins, cutting release cycles by 40%.",
      "Coordinated cross-team deployments to staging and production environments.",
    ],
  },
  {
    company: "Miami Insurance Brokers",
    role: "IT Manager",
    period: "Mar 2008 – Oct 2013",
    bullets: [
      "Built and maintained insurance web applications from the ground up.",
      "Integrated CRM and payment processing systems, streamlining operations.",
    ],
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages & Frameworks",
    items: ["C#", "TypeScript", "React", "Next.js", "SQL Server", "Node.js"],
  },
  {
    category: "Cloud & DevOps",
    items: ["Azure", "Jenkins", "CI/CD", "Docker", "Git"],
  },
  {
    category: "Architecture & Methodology",
    items: [
      "Software Architecture",
      "Agile / Scrum",
      "System Design",
      "API Design",
      "Microservices",
    ],
  },
  {
    category: "Leadership",
    items: [
      "Engineering Management",
      "Team Building",
      "Mentorship",
      "Release Planning",
      "Vendor Management",
    ],
  },
];

export interface EducationEntry {
  institution: string;
  degree: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    institution: "Florida International University",
    degree: "Master's Degree, Computer Science",
    period: "2023 – 2025",
  },
  {
    institution: "Universidad Nueva Esparta",
    degree: "Bachelor of Computer Science",
    period: "2000 – 2005",
  },
];
