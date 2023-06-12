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

export const portfolioData: PortfolioDataType[] = [
  {
    id: 1,
    img: "work01.png",
    alt: "Dobby Islands Free",
    title: "Dobby Islands Free",
    desc: "React로 개발한 인터렉티브 웹사이트 입니다.",
    github: "https://github.com/likelion4th-React-LAB15/final-project",
    demo: "https://likelion4th-react-lab15.github.io/final-project/",
    cartagorize: "Team",
  },
  {
    id: 2,
    img: "work02.png",
    alt: "Market Karly",
    title: "Market Karly",
    desc: "마켓컬리 클론이며, Vanilla JS로 개발한 웹사이트 입니다.",
    github: "https://github.com/Dev5ps/market-karly",
    demo: "",
    cartagorize: "Team",
  },
];

type PortfolioFilterType = { id: number; name: string };

export const portfolioFilter: PortfolioFilterType[] = [
  { id: 1, name: "all" },
  { id: 1, name: "team " },
  { id: 1, name: "alone" },
  { id: 1, name: "toy" },
];
