import type { NextPage } from "next";
import { PageLayout } from "@/layouts/PageLayout";
import { Section } from "@/layouts/Section";
import { Box } from "@/components/Box";
import { Typography } from "@/components/Typography";
import { Heading } from "@/components/Heading";
import { FiGithub, FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import homePageContent from "@/content/homePage";

const Home: NextPage = () => {
  function Contacts() {
    return (
      <Box className="space-y-4 lg:space-y-8">
        <Heading level={1}>Max Randle</Heading>
        <ul className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-between">
          <li className="flex items-center">
            <FiMail size={24} />
            <Typography className="ml-6 lg:ml-4">
              <a href="mailto:maxrandle95@gmail.com">maxrandle95@gmail.com</a>
            </Typography>
          </li>
          <li className="flex items-center">
            <FiPhone size={24} />
            <Typography className="ml-6 lg:ml-4">
              <a href="tel:+64 21 023 069 08">+64 21 023 069 08</a>
            </Typography>
          </li>
          <li className="flex items-center">
            <FiMapPin size={24} />
            <Typography className="ml-6 lg:ml-4">Auckland, NZ</Typography>
          </li>
          <li className="flex items-center">
            <FiGlobe size={24} />
            <Typography className="ml-6 lg:ml-4">
              <a
                href="https://maxrandle.co.nz"
                target="_blank"
                rel="noreferrer"
              >
                maxrandle.co.nz
              </a>
            </Typography>
          </li>
          <li className="flex items-center">
            <FiGithub size={24} />
            <Typography className="ml-6 lg:ml-4">
              <a
                href="https://github.com/MaxRandle"
                target="_blank"
                rel="noreferrer"
              >
                github.com/MaxRandle
              </a>
            </Typography>
          </li>
        </ul>
      </Box>
    );
  }

  function Intro() {
    const EXPERIENCE_START_DATE = new Date("2018-06-23");
    const MS_IN_YEAR = 3.154e10;
    const EXPERIENCE_IN_YEARS = Math.floor((new Date().valueOf() - EXPERIENCE_START_DATE.valueOf()) / MS_IN_YEAR);

    return (
      <Box className="space-y-4 lg:space-y-8">
        <Heading level={2}>Personal statement</Heading>
        <Typography>
          Intermediate-level software developer with {EXPERIENCE_IN_YEARS} years of experience delivering robust digital solutions using modern tools.
          <br />
          <br />
          Forward thinking with the ability to anticipate and preempt issues. Strong analytical and problem solving skills allow for tackling unusual
          and complex challenges.
          <br />
          <br />
          Exceptional written and oral communication skills with an ability to interface effectively across all management levels in an organisation.
          Excellent at building and maintaining client relations, personable and comfortable engaging with clients to elicit requirements, present
          solutions, and provide training.
          <br />
          <br />
          A self motivated learner, driven to continually deepen and expand my skill set and committed to ongoing professional development. Able to
          quickly learn and adapt to new technologies and environments. Exhibits effective time management and remains composed under pressure,
          identifying and communicating potential issues early.
          <br />
          <br />
          Enjoys collaborative work. Values and utilises the knowledge and abilities of my colleagues and team members. Actively participates in
          collective problem solving and experience sharing.
        </Typography>
      </Box>
    );
  }

  function Skills() {
    return (
      <Box className="space-y-4 lg:space-y-8">
        <Heading level={2}>Skills</Heading>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {homePageContent.skills.contentArray.map((skill) => (
            <Typography key={skill.name}>{skill.name}</Typography>
          ))}
        </div>
      </Box>
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
            variant="label"
            palette="faded"
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
          "Writing unit tests and end to end tests.",
          "Build accessible, context agnostic, functional react components that leverage the power of TypeScript with styled components and postcss plugins that facilitate next gen css features.",
          "Setting new software patterns that are defined enough to scale but simple enough to be evolved with uncertain future requirements.",
          "Working with NextJS to build functional web apps including form flows, as well as fast, static, and content rich web pages",
          "Build pages that demonstrate dynamic, statically rendered content and are therefore blazing fast and do not contain stale data thanks to NextJS capability to do incremental static regeneration.",
        ],
      },
    ];

    return (
      <Box className="space-y-4 lg:space-y-8">
        <Heading level={2}>Work Experience</Heading>
        {WORKPLACES.map((workPlace) => (
          <WorkPlace
            key={`jobTitle-${workPlace.jobTitle} dateRange-${workPlace.dateRange}`}
            {...workPlace}
          />
        ))}
      </Box>
    );
  }

  return (
    <PageLayout>
      <Section>
        <div className="container space-y-6 lg:space-y-12">
          <Contacts />
          <Intro />
          <Skills />
          <Experience />
        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;
