import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(
    "Help my create my App lookym upload video store"
  );
  const response = await result.response;
  console.log(response.text());
}

main().catch(console.error);
