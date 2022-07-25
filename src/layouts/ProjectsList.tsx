import { Heading } from "@/components/Heading";
import { ProjectMeta } from "@/helpers/files";
import { Typography } from "@/components/Typography";
import { Figure } from "@/components/Figure";
import { Card, CardContent, CardMedia } from "@/layouts/Card";

interface IProjectListProps {
  projectMetas: ProjectMeta[];
  className?: string;
}

export const ProjectsList: React.FC<IProjectListProps> = ({ projectMetas, className, ...props }) => {
  return (
    <div
      className={`${className} space-y-8`}
      {...props}
    >
      {projectMetas
        .sort((a, b) => (a.year >= b.year ? -1 : 1))
        .map((meta) => (
          <Card
            isResponsive
            key={meta.slug}
            href={`/projects/${meta.slug}`}
          >
            <CardMedia className="w-24 sm:w-40 h-24 sm:h-40">
              <Figure
                className="bg-purple-200"
                alt={`${meta.title} thumbnail`}
                src={`/media/projects/${meta.thumbnail ?? "seal1.png"}`}
              />
            </CardMedia>
            <CardContent className="space-y-4">
              <Heading level={4}>{meta.title}</Heading>
              <Typography>{meta.summary}</Typography>
              <Typography
                variant="caption"
                palette="faded"
                style={{ textTransform: "uppercase" }}
              >
                {meta.tags.join(" | ")}
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
};
