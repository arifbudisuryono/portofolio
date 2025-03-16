import HeroSection from "../fragments/HeroSection"

const Hero = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-8 min-h-[80vh]">
        <div className="order-2 lg:order-1 lg:w-1/2">
        <HeroSection.HeroDesc />
        </div>
        <div className="order-1 lg:order:2 mb-8 md:mb-14 lg:w-1/2">
        <HeroSection.HeroImage />
        </div>
    </div>
  )
}

export default Hero