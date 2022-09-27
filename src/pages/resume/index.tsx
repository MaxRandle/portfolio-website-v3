import type { NextPage } from "next";
import { PageLayout } from "@layouts/PageLayout";
import { Section } from "@layouts/Section";
import { Typography } from "@components/Typography";
import { Heading } from "@components/Heading";
import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import homePageContent from "@content/homePage";
import { Link } from "@components/Link";
import { Divider } from "@components/Divider";

const EXPERIENCE_START_DATE = new Date("2018-06-23");
const MS_IN_YEAR = 3.154e10;
const EXPERIENCE_IN_YEARS = Math.floor((new Date().valueOf() - EXPERIENCE_START_DATE.valueOf()) / MS_IN_YEAR);

const CONTENT = {
  name: "Max Randle",
  contactDetails: {
    email: "maxrandle95@gmail.com",
    phone: "+64 21 023 069 08",
    location: "Auckland, NZ",
    website: "maxrandle.co.nz",
    github: "github.com/MaxRandle",
    linkedIn: "in/max-randle-a79760160",
  },
  personalStatement: [
    `I am an intermediate-level software engineer with ${EXPERIENCE_IN_YEARS} years of professional experience delivering robust digital solutions using modern tools. I am primarily skilled at creating seamless user interfaces for functional web applications.`,
    "Strong analytical and problem solving skills allow for tackling unusual and complex challenges. Forward thinking with the ability to anticipate blockers and communicate them early.",
    "Exceptional written and oral communication skills with an ability to interface effectively across all management levels in an organisation. Personable, easy going, and comfortable engaging with clients to build and maintain trust.",
    "A self motivated learner, driven to continually deepen and expand my skill set and committed to ongoing professional development. Able to quickly learn and adapt to new technologies and team cultures.",
    "Exhibits effective time management and remains composed under pressure, identifying and communicating potential issues early.",
    "Finger on the pulse of the web dev community and always on the lookout for new tools and best practices, as well as what is on the horizon for new web tech. Passionate about modern tools but has a realistic understanding of how and when to adopt them.",
    "Enjoys collaborative work. Values and utilises the expertise team members. Actively participates in collective problem solving and experience sharing.",
  ],
};

const Home: NextPage = () => {
  function Hero() {
    return (
      <Heading
        className="px-6 md:px-0"
        level={1}
      >
        {CONTENT.name}
      </Heading>
    );
  }

  function ContactDetails() {
    return (
      <ul className="px-6 md:px-0 gap-4 flex flex-col md:grid md:grid-cols-2">
        <li className="flex items-center">
          <FiMail
            className="shrink-0"
            size={24}
          />
          <Typography className="ml-6 lg:ml-4">
            <Link href={`mailto:${CONTENT.contactDetails.email}`}>{CONTENT.contactDetails.email}</Link>
          </Typography>
        </li>
        <li className="flex items-center">
          <FiPhone
            className="shrink-0"
            size={24}
          />
          <Typography className="ml-6 lg:ml-4">
            <Link href={`tel:${CONTENT.contactDetails.phone}`}>{CONTENT.contactDetails.phone}</Link>
          </Typography>
        </li>
        <li className="flex items-center">
          <FiMapPin
            className="shrink-0"
            size={24}
          />
          <Typography className="ml-6 lg:ml-4">{CONTENT.contactDetails.location}</Typography>
        </li>
        <li className="flex items-center">
          <FiGlobe
            className="shrink-0"
            size={24}
          />
          <Typography className="ml-6 lg:ml-4">
            <Link
              href={`https://${CONTENT.contactDetails.website}`}
              isExternal
            >
              {CONTENT.contactDetails.website}
            </Link>
          </Typography>
        </li>
        <li className="flex items-center">
          <FiGithub
            className="shrink-0"
            size={24}
          />
          <Typography className="ml-6 lg:ml-4">
            <Link
              href={`https://${CONTENT.contactDetails.github}`}
              isExternal
            >
              {CONTENT.contactDetails.github}
            </Link>
          </Typography>
        </li>
        <li className="flex items-center">
          <FiLinkedin
            className="shrink-0"
            size={24}
          />
          <Typography className="ml-6 lg:ml-4">
            <Link
              href={`https://www.linkedin.com/${CONTENT.contactDetails.linkedIn}`}
              isExternal
            >
              {CONTENT.contactDetails.linkedIn}
            </Link>
          </Typography>
        </li>
      </ul>
    );
  }

  function Intro() {
    return (
      <div className="px-6 md:px-0 space-y-4 lg:space-y-8">
        <Heading level={2}>Personal statement</Heading>
        <div className="space-y-4">
          {CONTENT.personalStatement.map((paragraph, idx) => (
            <Typography key={idx}>{paragraph}</Typography>
          ))}
        </div>
        {/* <Typography>{CONTENT.personalStatement.join(" ")}</Typography> */}
      </div>
    );
  }

  function Skills() {
    return (
      <div className="px-6 md:px-0 space-y-4 lg:space-y-8">
        <Heading level={2}>Skills</Heading>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {homePageContent.skills.contentArray.map((skill) => (
            <Typography key={skill.name}>{skill.name}</Typography>
          ))}
        </div>
      </div>
    );
  }

  function Experience() {
    interface IWorkPlaceProps {
      jobTitle: string;
      coreTech: string;
      dateRange: string;
      companyName?: string;
      responsibilities?: string[];
    }

    const WorkPlace = ({ jobTitle, coreTech, dateRange, companyName, responsibilities, ...props }: IWorkPlaceProps) => {
      return (
        <div {...props}>
          <Heading level={3}>{jobTitle}</Heading>
          <Typography
            variant="caption"
            palette="weak"
          >
            {coreTech}
          </Typography>
          <Divider className="mt-2" />
          <Typography className="mt-2">{companyName}</Typography>
          <Typography
            variant="caption"
            palette="weak"
          >
            {dateRange}
          </Typography>
          <ul className="mt-2 space-y-2">
            {responsibilities?.map((responsibility) => (
              <li
                key={responsibility}
                className="flex space-x-2 md:space-x-4"
              >
                <Typography
                  palette="weak"
                  className="md:ml-4"
                >
                  •
                </Typography>
                <Typography>{responsibility}</Typography>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    const WORKPLACES: IWorkPlaceProps[] = [
      {
        jobTitle: "Front End Software Engineer",
        coreTech: "TypeScript / React / Next.js",
        dateRange: "March 2022 - present",
        companyName: "Kernel Wealth",
        responsibilities: [
          "Built static marketing pages with dynamic content served from a CMS. Content kept up to date using Next.js Incremental Static Regeneration.",
          "Writing end to end tests and configuring bitbucket pipeline to run them as a build step.",
          "Precisely implement figma designs into clean, accessible, context agnostic, functional React components with multiple states and variants using Sass with styled-components and a BEM-inspired style system.",
          "Quickly mocked up and prototyped pages using TailwindCSS to handle layout.",
          "Set new software patterns that demonstrate flexibility, scalability, and maintainability. EG: building conditional and branching user form flows.",
          "Worked with product to finalise designs for upcoming features and raise engineering considerations.",
          "Developed A/B testing capabilities to assist with gathering user metrics and conversion rates.",
        ],
      },
      {
        jobTitle: "Full Stack Software Engineer",
        coreTech: "React / Next.js / Node / Express / MongoDB",
        dateRange: "August 2021 - Nov 2021",
        companyName: "Renti Ltd",
        responsibilities: [
          "Transforming designs into functional React components, setting up Next.js pages with SSR, building user flows with forms and other functional elements.",
          "Designing and building database schemas, server side endpoint routing, and writing resolvers.",
          "Sprint planning, story pointing, elaborating work, scoping MVP for new features.",
        ],
      },
      {
        jobTitle: "Full Stack & Automation Developer",
        coreTech: "React / UiPath / .NET Core",
        dateRange: "October 2020 - August 2021",
        companyName: "Quanton Ltd (business acquisition of Probity)",
        responsibilities: [],
      },
      {
        jobTitle: "Front End & Automation Developer",
        coreTech: "React / UiPath / .NET Core",
        dateRange: "July 2018 - September 2020",
        companyName: "Probity Consulting",
        responsibilities: [],
      },
    ];

    return (
      <div className="px-6 md:px-0 space-y-4 lg:space-y-8">
        <Heading level={2}>Work Experience</Heading>
        {WORKPLACES.map((workPlace) => (
          <WorkPlace
            key={`jobTitle-${workPlace.jobTitle} dateRange-${workPlace.dateRange}`}
            {...workPlace}
          />
        ))}
      </div>
    );
  }

  return (
    <PageLayout>
      <Section>
        <div className="container space-y-8 lg:space-y-12">
          <Hero />
          <ContactDetails />
          <Intro />
          <Skills />
          <Experience />
        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;
