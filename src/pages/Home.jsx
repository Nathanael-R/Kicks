import Hero from "../components/Hero"
import Trending from "../components/Trending"
import Faq from "../components/Faq"
import Catalogue from "../components/Catalogue"
const Home = ({darkMode}) => {
  return (
    <section className="">
        <Hero />
        <Trending />
        <Catalogue />
        <Faq />
    </section>
  )
}

export default Home