import { motion } from "framer-motion";

const PageAnimation = {
  initial: {
    top: "100%",
  },
  animate: {
    top: "0%"
  },
  exit: {
    top: ["100%"]
  },
};

const reverseIndex = ( index ) => {
  const totalSteps = 6;
  return totalSteps - index -1;
}

const PageTransition = ({isAnimating}) => {
  return (
    
        <>
        <div className="top-0 left-0 right-0 w-screen h-screen fixed z-40 pointer-events-none flex">
        {[...Array(6)].map((_, index) => (
          <motion.div
            key={index}
            variants={PageAnimation}
            initial="initial"
            animate={isAnimating ? "animate" : "initial"}
            exit="exit"
            transition={{ duration: 0.3, delay: reverseIndex(index) * 0.1, ease: "easeInOut" }}
            className="w-full h-full bg-white relative"
          />
        ))}
        </div>
        </>
  )
}

export default PageTransition