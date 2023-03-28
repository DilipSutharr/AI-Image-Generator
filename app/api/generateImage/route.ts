import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { prompt } = await request.json(); // res now contains body

  const response = await fetch(
    "https://ai-img-generator-ms.azurewebsites.net/api/generateimage",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt }),
    }
  );

  const textData = await response.text();

  return NextResponse.json(textData);
}
