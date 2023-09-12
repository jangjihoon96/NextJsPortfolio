import Title from "../../text/title";
import Description from "../../text/description";
import SkillsContent from "./skillsContent";
import { connectDB } from "@/util/database";
import { ObjectId, Document } from "mongodb";

type SkillDocumentType = {
  _id: string;
  id: number;
  name: string;
  level: "Basic" | "Intermediate" | "Advanced";
};

export default async function Skills() {
  const db = (await connectDB).db("portfolio");
  const skillsResult: Document[] = await db
    .collection("skills")
    .find()
    .toArray();

  // MongoDB에서 반환된 데이터를 직접 변환
  const transformedSkills: SkillDocumentType[] = skillsResult.map((doc) => ({
    _id: doc._id.toString(),
    id: doc.id,
    name: doc.name,
    level: doc.level,
  }));

  return (
    <section id="skills">
      <Title>Skills</Title>
      <Description>My technical level</Description>
      <SkillsContent skillsResult={transformedSkills} />
    </section>
  );
}
