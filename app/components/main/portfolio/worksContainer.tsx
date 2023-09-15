"use client";
import WorksNav from "./worksNav";
import Works from "./works";
import { useState } from "react";
import { WorkDocumentType } from "./data";

export default function WorksContainer({
  transformedWork,
}: {
  transformedWork: WorkDocumentType[];
}) {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredWorksData =
    activeFilter === "all"
      ? transformedWork
      : transformedWork.filter((item) => item.cartagorize === activeFilter);

  const handleFilterChange = (filterName: string) => {
    setActiveFilter(filterName);
  };
  return (
    <>
      <WorksNav
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <Works filteredWorksData={filteredWorksData} />
    </>
  );
}
