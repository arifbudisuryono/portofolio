import Header from "../components/Layouts/Header"
import Hero from "../components/Layouts/Hero"

const Home = () => {
  return (
    <>
    <Header />
    <section id="home">
      <div className="container mx-auto">
        <Hero />
      </div>
    </section>
    </>
  )
}

export default Home