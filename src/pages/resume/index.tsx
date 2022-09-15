import type { NextPage } from "next";
import { PageLayout } from "@layouts/PageLayout";
import { Section } from "@layouts/Section";
import { Typography } from "@components/Typography";
import { Heading } from "@components/Heading";
import { FiGithub, FiGlobe, FiLinkedin, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import homePageContent from "@content/homePage";
import { Link } from "@components/Link";

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
      <ul className="px-6 md:px-0 grid grid-cols-2 gap-4">
        <li className="flex items-center">
          <FiMail size={24} />
          <Typography className="ml-6 lg:ml-4">
            <Link href={`mailto:${CONTENT.contactDetails.email}`}>{CONTENT.contactDetails.email}</Link>
          </Typography>
        </li>
        <li className="flex items-center">
          <FiPhone size={24} />
          <Typography className="ml-6 lg:ml-4">
            <Link href={`tel:${CONTENT.contactDetails.phone}`}>{CONTENT.contactDetails.phone}</Link>
          </Typography>
        </li>
        <li className="flex items-center">
          <FiMapPin size={24} />
          <Typography className="ml-6 lg:ml-4">{CONTENT.contactDetails.location}</Typography>
        </li>
        <li className="flex items-center">
          <FiGlobe size={24} />
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
          <FiGithub size={24} />
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
          <FiLinkedin size={24} />
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
        <Typography>{CONTENT.personalStatement.join(" ")}</Typography>
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
      dateRange: string;
      companyName?: string;
      responsibilities?: string[];
    }

    const WorkPlace = ({ jobTitle, dateRange, companyName, responsibilities, ...props }: IWorkPlaceProps) => {
      return (
        <div {...props}>
          <Typography variant="subheading">{jobTitle}</Typography>
          <Typography>{companyName}</Typography>
          <Typography
            variant="caption"
            palette="weak"
          >
            {dateRange}
          </Typography>
          <ul className="space-y-4">
            {responsibilities?.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        </div>
      );
    };

    const WORKPLACES: IWorkPlaceProps[] = [
      {
        jobTitle: "Front End Software Engineer",
        dateRange: "March 2022 - present",
        companyName: "Kernel Wealth",
        responsibilities: [
          "Built functional web apps with TypeScript/React/Next ",
          "Built static marketing pages with dynamic content served from a CMS.",
          "Setup end to end testing capabilities to run as a build step in bitbucket.",
          "Precisely implement figma designs into clean, accessible, context agnostic, functional react components with multiple states and variants using Sass with styled-components and a BEM-inspired style system.",
          "Quickly mocked up and prototyped pages and form flows using TailwindCSS to handle layout.",
          "Set new software patterns that demonstrate flexibility, scalability, and maintainability",
        ],
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
        <div className="container space-y-6 lg:space-y-12">
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
