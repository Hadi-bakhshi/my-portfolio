import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import type { ComponentProps } from "react";

/**
 * Thin wrapper around Hugeicons' `<HugeiconsIcon>` so app code can render icons
 * uniformly as `<Icon icon={Search01Icon} />`. Sizing is driven by Tailwind
 * `size-*` classes (which override the icon's default 24px attributes), so this
 * composes cleanly with shadcn components that target `[&_svg]`.
 */
export type IconProps = Omit<ComponentProps<typeof HugeiconsIcon>, "icon"> & {
  icon: IconSvgElement;
};

export function Icon({ icon, ...rest }: IconProps) {
  return <HugeiconsIcon icon={icon} {...rest} />;
}
