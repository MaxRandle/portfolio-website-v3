import { ProjectMeta } from "@helpers/files";
import { Typography } from "@components/Typography";
import { Figure } from "@components/Figure";
import { Card, CardContent, CardFooter, CardMedia } from "@layouts/Card";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { useBreakpoint } from "@hooks/useBreakpoint";
import { Heading } from "@components/Heading";
import { Divider } from "@components/Divider";
import { ROUTES } from "@config/ROUTES";

interface ProjectListProps {
  projectMetas: ProjectMeta[];
  className?: string;
}

export const ProjectsList: React.FC<ProjectListProps> = ({ projectMetas, className, ...props }) => {
  const controls = useAnimation();
  const rootRef = useRef(null);
  const isInView = useInView(rootRef, {
    // bottom right top left - this is so so dumb...
    // why not just top right bottom left like everyone is used to.
    margin: "0% 0% -60% 0%",
    once: true,
  });

  const screen_md = useBreakpoint("md");

  const STAGGER_DURATION = 0.07;

  useEffect(() => {
    if (isInView) controls.start("visible");
    if (!isInView) controls.start("hidden");
  }, [isInView, controls]);

  const ulVariants: Variants = {
    hidden: {
      transition: {
        staggerChildren: STAGGER_DURATION,
      },
    },
    visible: {
      transition: {
        staggerChildren: STAGGER_DURATION,
      },
    },
  };

  const liVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
  };

  return (
    <motion.ul
      ref={rootRef}
      className={`${className} md:space-y-4`}
      variants={ulVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...props}
    >
      {projectMetas
        .sort((a, b) => (a.year >= b.year ? -1 : 1))
        .map((meta, idx) => (
          <motion.li
            key={meta.slug}
            variants={liVariants}
          >
            {idx !== 0 && !screen_md && <Divider />}
            <Card
              isRounded="md"
              isBordered={screen_md}
              key={meta.slug}
              href={ROUTES.projects.slug(meta.slug)}
            >
              <CardMedia>
                <Figure
                  className="w-16 h-16 md:w-40 md:h-40"
                  isCircular={!screen_md}
                  isRounded={!screen_md}
                  alt={`${meta.title} thumbnail`}
                  src={`/media/projects/${meta.thumbnail ?? "seal1.png"}`}
                />
              </CardMedia>
              <CardContent className="space-y-2">
                <Heading level={3}>{meta.title}</Heading>
                <Typography>{meta.summary}</Typography>
              </CardContent>
              <CardFooter>
                <Typography
                  variant="caption"
                  palette="weak"
                  style={{ textTransform: "uppercase" }}
                >
                  {meta.tags.join(" ~ ")}
                </Typography>
              </CardFooter>
            </Card>
          </motion.li>
        ))}
    </motion.ul>
  );
};
