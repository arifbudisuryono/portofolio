import { motion } from "framer-motion"
import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const CTAList = [
    {
        icon: <FaPhoneAlt size={20}/>,
        name: "phone",
        contact: "(+62) 8564 42421 457"
    },
    {
        icon: <MdOutlineEmail size={20}/>,
        name: "email",
        contact: "arifmaldini22@gmail.com"
    },
    {
        icon: <FaMapMarkerAlt size={20}/>,
        name: "address",
        contact: "Karangjati, kec. Kalijamber, kab. Sragen"
    }
]

const CTA = () => {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.4, ease: "easeInOut" }}
        className="mb-10 md:mb-10 order-2 lg:w-1/2">
        <div className="flex flex-col gap-3 md:gap-6">
            {
                CTAList.map((item, index) => (
                    <div key={index} className="flex gap-4 md:gap-8 items-center">
                        <div className="p-4 bg-[#272748] text-primary ">
                            {item.icon}
                        </div>
                        <div className="">
                            <p className="text-slate-400">{item.name}</p>
                            <p className="font-semibold">{item.contact}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </motion.div>
  )
}

export default CTA