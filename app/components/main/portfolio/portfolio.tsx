"use client";
import styled from "styled-components";
import Title from "../../text/title";
import Description from "../../text/description";
import { portfolioData, portfolioFilter } from "./data";
import Works from "./works";
import WorksNav from "./worksNav";
import { useEffect, useState } from "react";
// 320 186 2560 1488
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredPortfolioData =
    activeFilter === "all"
      ? portfolioData
      : portfolioData.filter((item) => item.cartagorize === activeFilter);

  const handleFilterChange = (filterName: string) => {
    setActiveFilter(filterName);
    console.log(activeFilter);
  };
  return (
    <section>
      <Title>Portfolio</Title>
      <Description>Most recent work</Description>
      <WorksNav
        portfolioFilter={portfolioFilter}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <Works portfolioData={filteredPortfolioData} />
    </section>
  );
}
