import { PopUp } from "../../components/Popup/PopUp"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Projetos from "../../components/Projetos/Projetos"
import AboutUs from "../../components/Quem Somos/AboutUs"
import Contact from "../../components/Contato/Contato"
import Menu from "../../components/Header/components/Menu/Menu"

const Home = () => {
  return (
    <div className="bg-black/90">
      <Menu />
      <Header />
      <PopUp />
      <AboutUs />
      <Projetos />
      <Contact />
      <Footer />
    </div>
  )
}

export default Home
