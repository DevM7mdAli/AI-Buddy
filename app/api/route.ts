import model from "../googleAI"

function getIP(ip : Request){
    return ip.headers.get('x-forwarded-for') || ip.headers.get('remote-addr');
}


let chatHistories: { [ip: string]: any[] } = {};

export async function POST(
  req: Request,
) {
  const body = await req.json()
  let ipAddress = getIP(req)
  if(body.person){
    if (!ipAddress) {
      return new Response(JSON.stringify({ ai: "IP address not found" }), { status: 400 });
    }

    if (!chatHistories[ipAddress]) {
      chatHistories[ipAddress] = [];
    }

    const chat = model.startChat({ history: chatHistories[ipAddress]});
    
    const aiRes = await chat.sendMessage(body.person)

    return new Response(JSON.stringify({ai: aiRes.response.text()}))
    } else {
      return new Response(JSON.stringify({ai: "I cant tell you anything without saying anything"}))
  }
}
