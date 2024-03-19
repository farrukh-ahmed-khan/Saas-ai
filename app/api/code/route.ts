import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import {OpenAI, ChatCompletionRequestMessage} from 'openai';


const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
// const configuration = new Configuration({
//   apiKey: ,
// });

// const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage={
    role: "system",
    content: "You are a code generator bot. You can ask me to generate code for you. Try asking me to generate a function that returns the sum of two numbers."
}

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // if (!Configuration.apiKey) {
    //   return new NextResponse("API Key is required", { status: 500 });
    // }

    if (!messages) {
      return new NextResponse("Messages is required", { status: 400 });
    }
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.error("[CODE_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
