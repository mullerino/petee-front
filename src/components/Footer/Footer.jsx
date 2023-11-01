import linkedin from '/imgs/logos/logoLINKEDIN.png'
import insta from '/imgs/logos/logoINSTAGRAM.png'
import yt from '/imgs/logos/logoYOUTUBE.png'
import logoPET from '/imgs/logos/logoPET.png'

import styles from './Footer.module.css'
import Faq from "../../components/Faq/Faq"

import projects from './projetos'
import emailPET from './emailPET'

const InfoFooter = ({ titulo, items, target }) => {
  return (
    <div className={styles.elements} id={titulo.replace(' ', '').replace('ç', 'c').replace('ã', 'a')}>
      <h3>{titulo}</h3>
      <ul>
        {items.map(item => (
          <li key={item.nome}>
            <a href={item.link} target={target}>{item.nome}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

const MenuInfosFooter = () => {
  const about = [{ nome: 'Home', link: '#' }, { nome: 'Quem Somos', link: '#' }, { nome: 'O que fazemos', link: '#' }, { nome: 'Contato', link: '#' }]
  const contactUs = [{ nome: emailPET, link: 'mailto:ufrnpetee@gmail.com?subject=Assunto do email&body=Olá, Petianos!' }]
  const adresses = [{ nome: 'Núcleo de Tecnologia Industrial UFRN - S2B4 Lagoa Nova, Natal, RN', link: 'https://goo.gl/maps/o8SqWoAgzLvUEeQp6' }]

  return (
    <div className={styles.infos}>
      <InfoFooter titulo="Sobre" items={about} />
      <InfoFooter titulo="Ensino" items={projects.ensino} />
      <InfoFooter titulo='Pesquisa' items={projects.pesquisa} />
      <InfoFooter titulo="Extensão" items={projects.extensao} />
      <div className={styles.elements}>
        <InfoFooter titulo='Fale Conosco' items={contactUs} target='_blank' />
        <InfoFooter titulo='Endereço' items={adresses} target='_blank' />
      </div>
    </div>
  )
}

const SocialMediaItem = ({ link, sourceImg, alt }) => {
  return (
    <a href={link} target="_blank"><img src={sourceImg} alt={`Logo do` + alt} /></a>
  )
}

const SocialMedia = () => {
  return (
    <div className={styles.social}>
      <SocialMediaItem link="https://br.linkedin.com/company/peteeufrn" sourceImg={linkedin} alt="LinkedIn" />
      <SocialMediaItem link="https://www.instagram.com/ufrnpetee/" sourceImg={insta} alt="Instagram" />
      <SocialMediaItem link="https://www.youtube.com/@ufrnpetee" sourceImg={yt} alt="YouTube" />
    </div>
  )
}

const Footer = () => {
  return (
    <div className={styles.footerSection} id='footer'>
      <Faq />
      <footer>
        <MenuInfosFooter />
        <a href="#"><img src={logoPET} alt="Logo do PETEE UFRN" id={styles.logoPETeeFooter} /></a>
        <span>© 2023 PETee</span>
        <SocialMedia />
      </footer>
    </div>
  )
}

export default Footer
