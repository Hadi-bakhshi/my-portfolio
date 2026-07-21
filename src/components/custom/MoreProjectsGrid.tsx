import { GithubIcon, LinkSquare02Icon } from "@hugeicons/core-free-icons";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { moreProjects } from "@/data/resume";
import { Eyebrow } from "@/components/custom/Eyebrow";
import { Icon } from "@/components/ui/icon";
import {
  contentCardClass,
  iconLinkClass,
  sectionTitleClass,
} from "@/lib/layout";
import { cn } from "@/lib/utils";
import Link from "next/link";

/**
 * Compact grid for the remaining projects that don't get a full case-study
 * row — smaller cards, no media slot, just title/summary/stack + links.
 */
export function MoreProjectsGrid() {
  return (
    <div className="mt-12 border-t border-border pt-12">
      <Eyebrow>system.archive</Eyebrow>
      <h3 className={sectionTitleClass}>More projects.</h3>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {moreProjects.map((project) => (
          <Card
            key={project.title}
            className={cn(
              contentCardClass,
              "flex flex-col justify-between p-6",
            )}
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <h4 className="font-heading text-sm">{project.title}</h4>
                <div className="flex shrink-0 items-center gap-2">
                  {project.repo && (
                    <Link
                      href={project.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} repository`}
                      className={iconLinkClass}
                    >
                      <Icon icon={GithubIcon} size={16} />
                    </Link>
                  )}
                  {project.demo && (
                    <Link
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} live demo`}
                      className={iconLinkClass}
                    >
                      <Icon icon={LinkSquare02Icon} size={16} />
                    </Link>
                  )}
                </div>
              </div>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.summary}
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <Badge key={tech} variant="secondary">
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
