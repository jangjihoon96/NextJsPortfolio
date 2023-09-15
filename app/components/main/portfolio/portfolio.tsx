import Title from "../../text/title";
import Description from "../../text/description";
import { WorkDocumentType } from "./data";
import WorksContainer from "./worksContainer";
import { connectDB } from "@/util/database";
import { Document } from "mongodb";

export default async function Portfolio() {
  const db = (await connectDB).db("portfolio");
  const workResult: Document[] = await db.collection("works").find().toArray();

  const transformedWork: WorkDocumentType[] = workResult.map((doc) => ({
    _id: doc._id.toString(),
    id: doc.id,
    img: doc.img,
    alt: doc.alt,
    demo: doc.demo,
    github: doc.github,
    title: doc.title,
    desc: doc.desc,
    cartagorize: doc.cartagorize,
  }));

  return (
    <section id="portfolio">
      <Title>Portfolio</Title>
      <Description>Most recent work</Description>
      <WorksContainer transformedWork={transformedWork} />
      {/* <WorksNav
        portfolioFilter={portfolioFilter}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />
      <Works worksData={filteredWorksData} /> */}
    </section>
  );
}
