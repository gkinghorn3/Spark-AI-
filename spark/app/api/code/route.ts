import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import OpenAI from "openai";
import { ChatCompletionMessageParam } from "openai/resources/index.mjs";

// Create an instance of the OpenAI class with the API key
const openai = new OpenAI({
  apiKey: process.env.OPEN_AI_KEY,
});

// Define the instruction message for the chat completion
const instructionMessage: ChatCompletionMessageParam = {
  role: "system",
  content: "you are a code generator. You must answer only in markdown code snippets. use code comments for explanations."
} 

// Define the POST request handler
export async function POST(req: Request) {
  try {
    // Authenticate the user
    const { userId } = auth();

    // Parse the request body
    const body = await req.json();
    const { messages } = body;

    // Check if the user is authorized
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Check if the OpenAI API key is provided
    if (!openai.apiKey) {
      return new NextResponse("Unauthorized", { status: 400 });
    }

    // Check if the 'messages' field is present in the request body
    if (!messages) {
      return new NextResponse("messages are required", { status: 400 });
    }

    // Generate a chat completion using OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [instructionMessage, ...messages],
    });

    // Return the generated response
    return NextResponse.json(response.choices[0].message)
    
  } catch (error) {
    // Handle any errors that occur during the execution
    console.log("[CODE_ERROR]", error);
    return new NextResponse("internal error", { status: 500 });
  }
}
