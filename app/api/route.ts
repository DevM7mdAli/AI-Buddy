import model from "../googleAI"

export async function POST(
  req: Request,
) {
  const body = await req.json()
  if(body.person){
    const aiRes = await model.generateContent(body.person);
    return new Response(JSON.stringify({ai: aiRes.response.text()}))
    } else {
      return new Response(JSON.stringify({ai: "I cant tell you anything without saying anything"}))
  }
}
