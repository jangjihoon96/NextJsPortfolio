"use client";
import Title from "../../text/title";
import Description from "../../text/description";
import { portfolioFilter, PortfolioDataType } from "./data";
import Works from "./works";
import WorksNav from "./worksNav";
import { useEffect, useState } from "react";

export default function Portfolio() {
  const [worksData, setWorksData] = useState<PortfolioDataType[]>([]);
  useEffect(() => {
    fetch("/api/works/worksList")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        setWorksData(result);
      });
  }, []);
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredWorksData =
    activeFilter === "all"
      ? worksData
      : worksData.filter((item) => item.cartagorize === activeFilter);

  const handleFilterChange = (filterName: string) => {
    setActiveFilter(filterName);
  };
  return (
    <section id="portfolio">
      <Title>Portfolio</Title>
      <Description>Most recent work</Description>
      <WorksNav
        portfolioFilter={portfolioFilter}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <Works worksData={filteredWorksData} />
    </section>
  );
}
