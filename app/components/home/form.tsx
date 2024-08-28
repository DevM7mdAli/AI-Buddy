"use client"
import { FormEvent , useState } from "react"
import { motion } from "framer-motion"
import { IoMdSend } from "react-icons/io";
import Response from './response'


export default function FormAi(){
  type chatting = {
    msg : string,
    aiRes : string
  }


  const [urMsg , setUrMsg] = useState('')
  const [chat , setChat] = useState<chatting[]>([])

  async function onSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formMsg:string = formData.get("msg")?.toString() || '';
    //? to clear the input field 
    setUrMsg('')

    if(chat.length === 0){
    setChat([{aiRes: "", msg: formMsg}])
    } else {
      setChat(
        [
        ...chat,
        {aiRes: "", msg: formMsg}
        ]
      )
    }

    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({person : formMsg}),
    })

    // In case something bad happened
    try{
    const data = await response.json()
    if(chat.length === 0){
      setChat([{aiRes: data.ai, msg: formMsg}])
      } else {
        setChat(
          [
            ...chat,
            {aiRes: data.ai, msg: formMsg}
          ]
        )
      }
    location.href = `#answer${chat.length}`
    } catch {
      if(chat.length === 0){
        setChat([{aiRes: "error in sending", msg: formMsg}])
        } else {
          setChat(
            [
              ...chat,
              {aiRes: "error in sending", msg: formMsg}
            ]
          )
        }
    }
  }


  return(
    //body of the 
    <>

      { chat ?
      <div className="flex flex-col gap-y-6 flex-grow justify-end">
        {chat.map((val , index) => {
            return(
            <motion.div key={index}
            initial={{opacity: 0 , y: 35}}
            animate={{opacity: 1 , y: 0}}>
              <Response request={val.msg} respond={val.aiRes} index={index} />
            </motion.div>
            )
          })
        }
      </div>

      : <></>
      }

    <motion.div className="py-3"
        initial={{opacity: 0 , y: -35}}
        animate={{opacity: 1 , y: 0}}
        >
        <form onSubmit={onSubmit} className="flex-col gap-y-16">
          <div>
            <textarea onChange={e => {setUrMsg(e.target.value)}} className="textarea textarea-bordered w-full text-md sm:text-lg" name="msg" placeholder="Ask AI anything" maxLength={290} value={urMsg}></textarea>
          </div>

            <div className="flex justify-end pb-3">
            <button type="submit" className="btn btn-primary mt-6 text-md sm:text-lg text-end">Send <IoMdSend /></button>
            </div>
          </form>
        </motion.div>
    </>
  )
}