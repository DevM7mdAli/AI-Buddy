import model from "../googleAI"

export async function POST(
  req: Request,
) {
  const body = await req.json()
  const aiRes = await model.generateContent(body.person);
  return new Response(JSON.stringify({ai: aiRes.response.text()}))
}
