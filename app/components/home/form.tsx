"use client"
import { FormEvent , useState } from "react"
import { motion } from "framer-motion"
import { IoMdSend } from "react-icons/io";
import Response from './response'


export default function FormAi(){
  const [msg , setMsg] = useState('')
  const [urMsg , setUrMsg] = useState('')
  const [aiRes , setAiRes] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const formMsg:string = formData.get("msg")?.toString() || '';
    setUrMsg('')
    setAiRes("")
    setMsg(formMsg)

    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({person : formMsg}),
    })

    // In case something bad happened
    try{
    const data = await response.json()
    setAiRes(data.ai)
    location.href = "#answer"
    } catch {
      setAiRes("Error! try send the message again")
    }
  }


  return(
    <>
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
      {
      msg || aiRes ?
      <motion.div
      initial={{opacity: 0 , y: 35}}
      animate={{opacity: 1 , y: 0}}
      >
      <Response request={msg} respond={aiRes}/>
      </motion.div>
      :<></>
      }
    </>
  )
}