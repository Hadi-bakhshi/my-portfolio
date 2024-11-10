export type SkillCardProps = {
  /**
   * Pass title to be rendered on the card
   */
  title: string;

  /**
   * You should provide the source for the image, If you
   * don't provide default picture will be rendered.
   */
  imageSrc: string;

  /**
   * Image width OPTIONAL
   */
  width?: number;

  /**
   * Image height OPTIONAL
   */
  height?: number;
};
