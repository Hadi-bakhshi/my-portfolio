import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { moreProjects } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";

/**
 * Compact grid for the remaining projects that don't get a full case-study
 * row — smaller cards, no media slot, just title/summary/stack + links.
 */
export function MoreProjectsGrid() {
  return (
    <div className="mt-16">
      <Eyebrow>system.archive</Eyebrow>
      <h3 className="mt-2 font-heading text-lg text-muted-foreground">More projects.</h3>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((project) => (
          <Card key={project.title} className="flex flex-col justify-between border-border/70 bg-card/80 p-4">
            <div>
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-heading text-sm">{project.title}</h4>
                <div className="flex shrink-0 items-center gap-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} repository`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <HugeiconsIcon icon={GithubIcon} size={16} />
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <HugeiconsIcon icon={LinkSquare02Icon} size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">{project.summary}</p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="outline" className="text-[10px]">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
