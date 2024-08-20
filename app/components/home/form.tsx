"use client"
import { FormEvent , useState } from "react"
import { motion } from "framer-motion"
import { IoMdSend } from "react-icons/io";
import Response from './response'
export default function FormAi(){
  const [msg , setMsg] = useState('')
  const [aiRes , setAiRes] = useState('')

  async function onSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const msg:string = formData.get("msg")?.toString() || '';
    setMsg(msg)
    setAiRes("")
    const response = await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({person : msg}),
    })
    // Handle response if necessary
    try{
    const data = await response.json()
    setAiRes(data.ai)
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
        <textarea className="textarea textarea-bordered w-full text-md sm:text-lg" name="msg" placeholder="Ask AI anything" maxLength={290} ></textarea>
      </div>

        <div>
        <button type="submit" onClick={()  => {location.href = "#answer"}} className="btn btn-primary mt-6 text-md sm:text-lg">Send to AI <IoMdSend /></button>
        </div>
      </form>
    </motion.div>
      {
      msg ?
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