import CTA from "../components/Layouts/CTA"
import Form from "../components/Layouts/Form"
import Header from "../components/Layouts/Header"

const Blog = () => {
  return (
    <>
    <Header />
    <section id="contact">
      <div className="container lg:flex items-center justify-center lg:gap-10 min-h-[80vh]">
      <CTA />
      <Form />
      </div>
    </section>
    </>
  )
}

export default Blog