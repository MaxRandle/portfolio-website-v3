import { ProjectMeta } from "@helpers/files";
import { Typography } from "@components/Typography";
import { Figure } from "@components/Figure";
import { Card, CardContent, CardMedia } from "@layouts/Card";

interface ProjectListProps {
  projectMetas: ProjectMeta[];
  className?: string;
}

export const ProjectsList: React.FC<ProjectListProps> = ({ projectMetas, className, ...props }) => {
  return (
    <div
      className={`${className} space-y-8`}
      {...props}
    >
      {projectMetas
        .sort((a, b) => (a.year >= b.year ? -1 : 1))
        .map((meta) => (
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
        ))}
    </div>
  );
};
