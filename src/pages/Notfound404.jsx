import Header from "../components/Layouts/Header"
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <>
    <Header />
    <div className="container mx-auto">
      <div className="min-h-[80vh] flex flex-col md:flex-row items-center">
        <div className="w-full md:w-[450px]">
          <img src="../image/404.png" alt="" />
        </div>
        <div className="md:ml-15">
          <h1 className="text-[120px] lg:text-[200px] font-extrabold text-primary text-center md:text-start">404</h1>
          <p className="uppercase text-xl lg:text-2xl lg:font-bold text-center md:text-start">we couldn't find what you're looking for.</p>
          <div className="flex items-center justify-center md:justify-start gap-2 m-3">
            <Link to={"/"}>
              <div className="bg-primary text-hitam w-[30px] h-[30px] flex items-center justify-center rounded-full lg:w-[50px] lg:h-[50px] hover:bg-[#37AFE1]">
                <FaArrowLeft size={20}/>
              </div>
            </Link>
            <Link to={"/"}>
              <div className="uppercase bg-primary w-[200px] h-[30px] flex items-center hover:bg-[#37AFE1] justify-center rounded-full text-hitam font-semibold lg:w-[300px] lg:h-[50px] lg:text-[22px] lg:font-bold">
                <p>back to homepage</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Notfound