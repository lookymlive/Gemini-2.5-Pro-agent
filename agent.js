import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main() {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(
      "Hel my create my App lookym upload video store"
    );
    const response = await result.response;
    console.log(response.text());
  } catch (error) {
    console.error("Error details:", {
      message: error.message,
      status: error.status,
      code: error.code,
    });
  }
}

main().catch(console.error);
