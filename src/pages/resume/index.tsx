import type { NextPage } from "next";
import { PageLayout } from "@/layouts/PageLayout";
import { Section } from "@/layouts/Section";
import { Box } from "@/components/Box";
import { Typography } from "@/components/Typography";
import { Heading } from "@/components/Heading";
import { FiGithub, FiGlobe, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Home: NextPage = () => {
  function Contacts() {
    return (
      <Box className="space-y-4 lg:space-y-8">
        <Heading level={1}>Max Randle</Heading>
        <ul className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex lg:justify-between">
          <li>
            <div className="flex items-center">
              <FiMail size={24} />
              <Typography className="ml-6 lg:ml-4">
                <a href="mailto:maxrandle95@gmail.com">maxrandle95@gmail.com</a>
              </Typography>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <FiPhone size={24} />
              <Typography className="ml-6 lg:ml-4">
                <a href="tel:+64 21 023 069 08">+64 21 023 069 08</a>
              </Typography>
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <FiMapPin size={24} />
              <Typography className="ml-6 lg:ml-4">Auckland, NZ</Typography>
            </div>
          </li>
          <li>
            <div className="flex items-center">
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
            </div>
          </li>
          <li>
            <div className="flex items-center">
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
            </div>
          </li>
        </ul>
      </Box>
    );
  }

  return (
    <PageLayout>
      <Section>
        <div className="container">
          <Contacts />
        </div>
      </Section>
    </PageLayout>
  );
};

export default Home;
