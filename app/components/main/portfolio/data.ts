export type PortfolioDataType = {
  id: number;
  img: string;
  alt: string;
  title: string;
  desc: string;
  github: string;
  demo: string;
  cartagorize: string;
};

export type PortfolioFilterType = { id: number; name: string };

export const portfolioFilter: PortfolioFilterType[] = [
  { id: 1, name: "all" },
  { id: 2, name: "team" },
  { id: 3, name: "individual" },
  { id: 4, name: "toy" },
];
