import model from "../googleAI"

let chatHistory:any = [];

export async function POST(
  req: Request,
) {
  const body = await req.json()
  if(body.person){
    const chat = model.startChat({ history : chatHistory})
    
    const aiRes = await chat.sendMessage(body.person)

    return new Response(JSON.stringify({ai: aiRes.response.text()}))
    } else {
      return new Response(JSON.stringify({ai: "I cant tell you anything without saying anything"}))
  }
}
