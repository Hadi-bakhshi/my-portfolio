export type TabProps = {
  tabList: string[];
  onClick: (index: number) => void;
  activeTabIndex: number | null;
};
