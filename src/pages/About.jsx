import Header from "../components/Layouts/Header"
import AboutSection from "../components/Layouts/AboutSection"

const About = () => {
  return (
    <>
    <Header />
    <section>
      <div className="container mx-auto">
        <AboutSection />
      </div>
    </section>
    </>
  )
}

export default About