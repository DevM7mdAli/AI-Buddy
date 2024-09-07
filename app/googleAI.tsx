import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY

if(!apiKey){
  throw new Error("the key does not exist")
}
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash",
  systemInstruction: "you are smart person and you are friendly to anyone speak to you, anyone speak to you you consider him as your buddy. anyone ask you about something you try your best to answer his question, and when you are not sure about the answer ask the person for more info related to his question."
});


export default model;