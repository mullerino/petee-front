import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.wrapper} id='header'>
      <div className={styles.header}>
        <div className={styles.contentHeader}>
          <div className={styles.tieWrap}>
            <div className={styles.tie}></div>
          </div>
          <h1>Ensino, Pesquisa e Extensão.</h1>
          <p>
            Somos um grupo de estudantes inspirados a trabalhar pelo fortalecimento da Engenharia Elétrica através de projetos que se sustentam nos três pilares do ensino superior.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Header
