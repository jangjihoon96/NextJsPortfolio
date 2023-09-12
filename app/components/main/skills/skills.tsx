import Title from "../../text/title";
import Description from "../../text/description";
import SkillsContent from "./skillsContent";
import { connectDB } from "@/util/database";
// import { ObjectId } from "mongodb";

type SkillDataType = {
  _id: string;
  id: number;
  name: string;
  level: "Basic" | "Intermediate" | "Advanced";
};

export default async function Skills() {
  const db = (await connectDB).db("portfolio");
  let skillsResult: SkillDataType[] = await db
    .collection("skills")
    .find()
    .toArray();
  skillsResult = skillsResult.map((doc) => {
    const { _id, ...rest } = doc;
    return { _id: _id.toString(), ...rest };
  });
  // console.log(skillsResult);
  return (
    <section id="skills">
      <Title>Skills</Title>
      <Description>My technical level</Description>
      <SkillsContent skillsResult={skillsResult} />
    </section>
  );
}
