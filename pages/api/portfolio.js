import fs from "fs";
import { join } from "path";

export default function handler(req, res) {
  const portfolioData = join(process.cwd(), "/data/portfolio.json");
  if (process.env.NODE_ENV === "development") {
    if (req.method === "POST") {
      fs.writeFileSync(
        portfolioData,
        JSON.stringify(req.body),
        "utf-8",
        (err) => console.log(err)
      );
      return res.status(200);
    } else {
      res
        .status(200)
        .json({ name: "This route works in development mode only" });
    }
  }
}
