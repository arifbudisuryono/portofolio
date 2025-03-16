import { motion } from "framer-motion"
import Button from "../Elements/Button"
import { useState } from "react"
import { sub } from "framer-motion/client";

const Form = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");

  const send = () => {
    const recipent = "6285642421457";
    const body = `Name: ${firstname} ${lastname}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${sub}\nMessage: ${message}`;
    const whatsappURL = `https://wa.me/${recipent}?text=${encodeURIComponent(body)}`;

    window.open(whatsappURL, "_blank");
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.3, duration: 0.4, ease: "easeIn" }}
      className="p-6 rounded-xl bg-slate-800 order-1 lg:w-1/2">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-primary font-semibold">Get in Touch</h1>
        <p>For business and partnership inquiry please contact me</p>
        <form className="flex flex-col gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder="Firstname" className="bg-hitam p-2 rounded" />
            <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" placeholder="Lastname" className="bg-hitam p-2 rounded" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" inputMode="numeric" placeholder="Phone" className="bg-hitam p-2 rounded" />
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" className="bg-hitam p-2 rounded" />
          </div>
            <input value={sub} onChange={(e) => setSub(e.target.value)} type="text" placeholder="Subject" className="bg-hitam p-2 rounded" />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" className="bg-hitam p-2 rounded"></textarea>
            <Button
              Click={send}
              style="bg-primary w-full text-hitam font-semibold hover:bg-[#37AFE1] transition-all duration-300"
              >
                Send Message
            </Button>
        </form>
      </div>
    </motion.div>
  )
}

export default Form