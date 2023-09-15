export type PortfolioFilterType = { id: number; name: string };

export const portfolioFilter: PortfolioFilterType[] = [
  { id: 1, name: "all" },
  { id: 2, name: "team" },
  { id: 3, name: "individual" },
  { id: 4, name: "toy" },
];

export type WorkDocumentType = {
  _id: string;
  id: number;
  img: string;
  alt: string;
  demo: undefined | null | string;
  github: string;
  title: string;
  desc: string;
  cartagorize: string;
};
