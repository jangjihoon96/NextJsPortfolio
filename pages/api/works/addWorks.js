import { connectDB } from "@/util/database";
export default async function handler(req, res) {
  if (req.method === "POST") {
    if (
      req.body.id &&
      req.body.img &&
      req.body.alt &&
      req.body.title &&
      req.body.desc &&
      req.body.github &&
      req.body.cartagorize
    ) {
      if (req.body.adminCode === "admin1") {
        const db = (await connectDB).db("portfolio");
        let result = await db.collection("works").insertOne(req.body);
        return res.redirect(302, "/");
      } else {
        return res.status(200).json("관리자 코드를 다시 확인해주세요.");
      }
    } else {
      return res.status(200).json("정보를 모두 입력해주세요.(Demo 주소 제외)");
    }
  }
}
