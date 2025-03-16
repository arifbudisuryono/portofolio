import Header from "../components/Layouts/Header"
import ProjectSection from "../components/Layouts/ProjectSection"

const Project = () => {
  return (
    <>
    <Header />
    <section id="project">
      <div className="container mx-auto">
        <ProjectSection />
      </div>
    </section>
    </>
  )
}

export default Project