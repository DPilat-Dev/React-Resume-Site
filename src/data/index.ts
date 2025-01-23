export type ExperienceType = {
    title: string; // Job title
    company_name: string; // Company name
    date: string; // Date range
    details: string[]; // List of job details or accomplishments
  };

export type SkillType = {
    name: string; // Skill name
    icon: string; // Skill Icon
 };

 export type AboutMeType = {
    details : string[];
 };

const aboutme: AboutMeType = {
        details: [
            "Hi, I'm a Fullstack Software Engineer with 5 years of experience in building and maintaining SaaS products. I love creating user-friendly features that not only engage users but also drive meaningful results. Collaborating with teams to deliver solutions that help customers reach their goals is one of my favorite parts of the job. Outside of work, I enjoy experimenting with home lab setups, exploring new technologies, and finding creative ways to expand my technical skills. I’m always looking for opportunities to learn, grow, and make a positive impact through technology."
        ]
 }

const experiences: ExperienceType[] = [
    {
        title: "Software Engineer",
        company_name: "DeepSync",
        date: "2024 - Present",
        details: [
            "Utilized C#, ASP.NET, .NET Framwork to maintain legacy software.",
            "Integration Stripe with the Legacy software.",
            "Updated and maintained multiply legacy projects ranging from multiple sites with creating Docs for the respected projects."
        ],
    },
    {
        title: "Fullstack Software Engineer",
        company_name: "Bizvalet",
        date: "2018 - 2023",
        details: [
            "Utilized C#, ASP.NET, Entity Framework for new features: drip emails, blogging, ect.",
            " Developed recurring orders using HangFire, enhancing customer scheduling flexibility.",
            "Created an embeddable cross-domain booking form using JavaScript for versatile integration."
        ],
    },
    {
        title: "Frontend Developer Intern",
        company_name: "Bizvalet",
        date: "2018 - 2018",
        details: [
            "Collaborated on features to empower Maid services around the Seattle area.",
            "Develop innovative and user-friendly web applications using HTML, CSS, and JavaScript to enhance the customer experience and drive business growth for Bizvalet's maid services.",
        ],
    },
];

const skills: SkillType[] = [
    {
        name: "CSharp",
        icon: "TbBrandCSharp"
    },
    {
        name: "Java",
        icon: "FaJava"
    },
    {
        name: "Python",
        icon: "FaPython"
    },
    {
        name: "JavaScript",
        icon: "SiJavascript"
    },
    {
        name: "TypeScript",
        icon: "SiTypescript"
    },
    {
        name: "React",
        icon: "FaReact"
    },
    {
        name: "Angular",
        icon: "FaAngular"
    },
    {
        name: "HTML",
        icon: "FaHtml5"
    },
    {
        name: "CSS",
        icon: "FaCss3"
    },
];

const otherskills: SkillType[] = [
    {
        name:"Azure",
        icon:"VscAzure"
    },
    {
        name:"Git",
        icon:"FaGitAlt"
    },
    {
        name:"SQL",
        icon:"TbSql"
    },
];

export  {aboutme, experiences, skills, otherskills};