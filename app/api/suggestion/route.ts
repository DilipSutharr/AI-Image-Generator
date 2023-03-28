export async function GET(request: Request) {
  // Connect to Microsoft Azure function endpoint
  const response = await fetch(
    "https://ai-img-generator-ms.azurewebsites.net/api/getchatgptsuggestion",
    {
      cache: "no-store",
    }
  );

  const textData = await response.text();

  return new Response(JSON.stringify(textData.trim()), {
    status: 200,
  });
}
