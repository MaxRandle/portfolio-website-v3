import { ProjectMeta } from "@helpers/files";
import { Typography } from "@components/Typography";
import { Figure } from "@components/Figure";
import { Card, CardContent, CardMedia } from "@layouts/Card";
import { motion, useAnimation, useInView, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface ProjectListProps {
  projectMetas: ProjectMeta[];
  className?: string;
}

export const ProjectsList: React.FC<ProjectListProps> = ({ projectMetas, className, ...props }) => {
  const controls = useAnimation();
  const rootRef = useRef(null);
  const isInView = useInView(rootRef);

  useEffect(() => {
    if (isInView) controls.start("visible");
    if (!isInView) controls.start("hidden");
  }, [isInView, controls]);

  const ulVariants: Variants = {
    visible: {
      transition: {
        delayChildren: 0.7,
        staggerChildren: 0.07,
      },
    },
  };

  const liVariants = {
    hidden: {
      opacity: 0,
      scale: 1,
      x: -20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      x: 0,
    },
  };

  return (
    <motion.ul
      ref={rootRef}
      className={`${className} space-y-4`}
      variants={ulVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...props}
    >
      {projectMetas
        .sort((a, b) => (a.year >= b.year ? -1 : 1))
        .map((meta) => (
          <motion.li
            key={meta.slug}
            variants={liVariants}
          >
            <Card
              isRounded="md"
              key={meta.slug}
              href={`/projects/${meta.slug}`}
            >
              <CardMedia className="w-24 sm:w-40 h-24 sm:h-40">
                <Figure
                  alt={`${meta.title} thumbnail`}
                  src={`/media/projects/${meta.thumbnail ?? "seal1.png"}`}
                />
              </CardMedia>
              <CardContent className="space-y-4">
                <Typography variant="subheading">{meta.title}</Typography>
                <Typography>{meta.summary}</Typography>
                <Typography
                  variant="caption"
                  palette="weak"
                  style={{ textTransform: "uppercase" }}
                >
                  {meta.tags.join(" | ")}
                </Typography>
              </CardContent>
            </Card>
          </motion.li>
        ))}
    </motion.ul>
  );
};
