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
            <Typography>{skill.name}</Typography>
          ))}
        </div>
      </Box>
    );
  }

  function Experience() {
    return (
      <Box className="space-y-4 lg:space-y-8">
        <Heading level={2}>Work Experience</Heading>
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
