import styles from './Menu.module.css'
import { House, Info, Toolbox, Phone, CaretDown, CaretRight } from "@phosphor-icons/react";
import logoPET from '/imgs/logos/logoPET.png'

const Menu = () => {
  const scrollTo = (idPoint) => {
    const element = document.getElementById(`${idPoint}`)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const svgSize = 35
  const svgColor = "#f0f0f0"
  const svgWeight = "thin"
  const svgWeightF = "fill"

  return (
    <nav className={styles.headerMenu}>
      <ul className={styles.menuItens}>
        <li>
          <a onClick={() => scrollTo("header")}>
            <House
              size={svgSize}
              color={svgColor}
              weight={svgWeightF}
            />
            <span>HOME</span>
          </a>
        </li>
        <li>
          <a onClick={() => scrollTo("aboutUs")}>
            <Info
              size={svgSize}
              color={svgColor}
              weight={svgWeight}
            />
          <span>SOBRE</span>
        </a></li>
        <a href="#">
          <img
            src={logoPET}
            alt="Logo do PETEE UFRN" id="LogoPetHeader"
          />
        </a>
        <li className={styles.dropdown}>
          <a href="#">
            <Toolbox
              size={svgSize}
              color={svgColor}
              weight={svgWeight}
            />
            <span>PROJETOS</span>
            <CaretDown
              size={20}
              weight='bold'
            />
          </a>
          <ul className={styles.dropdownContent}>
            <li>
              <a href="#">
                <span>Ensino</span>
                <CaretRight
                  size={20}
                  weight='bold'
                />
              </a>
              <ul className={styles.subDropdown}>
                <li><a href="#">Apoio Pedagógico</a></li>
                <li><a href="#">ENADE</a></li>
              </ul>
            </li>
            <li>
              <a href="#" onClick={() => scrollTo("headerMenu")}>
                <span>Extensão</span>
                <CaretRight
                  size={20}
                  weight='bold'
                />
              </a>
              <ul className={styles.subDropdown}>
                <li><a href="#">Engenharia nas escolas</a></li>
                <li><a href="#">Luza Ativa</a></li>
                <li><a href="#">PETECA</a></li>
                <li><a href="#">PETEECAST</a></li>
                <li><a href="#">PARTICIPAÇÃO EM EVENTOS</a></li>
                <li><a href="#">WORKSHOP</a></li>
              </ul>
            </li>
            <li>
              <a href="#">
                <span>Pesquisa</span>
                <CaretRight
                  size={20}
                  weight='bold'
                />
              </a>
              <ul className={styles.subDropdown}>
                <li><a href="#">Mãos à obra</a></li>
                <li><a href="#">Codeplay</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a onClick={() => scrollTo("footer")}>
            <Phone
              size={svgSize}
              color={svgColor}
              weight={svgWeightF}
            />
            <span>CONTATOS</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
